import {useEffect, useState} from "react";
import axios from "axios";
import "../styles/Cart.css"
import Button from "../components/Button.jsx";
import {useLocation} from "react-router-dom";

export default function Cart(){
    let [cart, setCart] = useState([])
    let location=useLocation();

    useEffect(() => {
        const fetchCartData= async()=>{
            try{
                let res= await axios.get("http://localhost:8000/api/cart",{withCredentials:true});
                setCart(res.data)
                // console.log(res);
                // console.log("Cart API response:", res.data);
            }catch (err){
                console.log(err);
            }
        }
        fetchCartData();
    }, [location]);

    async function removeItem(id){
        try{
            await axios.post("http://localhost:8000/api/cart/delete", {id},{withCredentials:true});
            setCart(prevCart => prevCart.filter(item => item._id !== id));
            console.log(id);
        }catch(err){
            console.log(err);
        }
    }

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity,0);


    const setQuantity=async(id,inc)=>{
        try{
            // let inc=true
            await axios.post("http://localhost:8000/api/cart/update",{id,inc},{withCredentials:true});
            if(inc){
                setCart(prevCart=>prevCart.map((item)=> (item._id===id)?{...item, quantity:item.quantity+1}:item));
            }
            else{
                setCart(prevCart=>prevCart.map((item)=> (item._id===id)?{...item, quantity:item.quantity-1}:item));
            }
        }catch(err){
            console.log(err);
        }
    }


    return(
        <div className={"cart-page"}>
            <h1>My Cart</h1>
            <div className={"cart-list"}>
                {cart.map(item=>(
                    <div className={"cart-card"} key={item._id}>
                        <img src={item.image}></img>
                        <div className={"cart-info"}>
                            <h3>{item.name}</h3>
                        </div>
                        <div className={"price-qty"}>
                            <span>₹{item.price}</span>
                            <button onClick={()=>setQuantity(item._id,false)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={()=>setQuantity(item._id,true)}>+</button>
                            <button onClick={()=>removeItem(item._id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"cart-summary"}>
                <h2>Total amount:{totalAmount} </h2>
            </div>
            <Button>Proceed for payment</Button>
        </div>
    )
}