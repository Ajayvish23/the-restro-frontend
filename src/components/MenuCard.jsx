import "../styles/MenuCard.css";
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import addToCart from "../utils/addToCart.js";

export default function MenuCard({image, name, price,id,user}){

    const scrollToCTA=()=>{
        let orderSection=document.getElementById("cta");
        orderSection?.scrollIntoView({behavior:"smooth"})
    }


    // let addToCart=() => {
    //     axios.post("http://localhost:8000/api/cart",
    //         {
    //         itemId: id,
    //         name: name,
    //         price: price,
    //         quantity: 1,
    //         },
    //         {withCredentials:true});
    //     console.log(name);
    //     console.log(id);
    // }

    return(
        <div className={"menu-card"}>
            <img src={image} alt={name}/>
            <div className={"menu-info"}>
                <h3>{name}</h3>
                <p>₹{price}</p>
            </div>
            <div className={"menu-btn"}>
                <Button variant={"buy"} onClick={scrollToCTA}>Buy now</Button>
                <Button
                    variant={"cart"}
                    onClick={()=>addToCart(id,name,price,image,user)}
                ><FontAwesomeIcon icon={faCartArrowDown}/></Button>
            </div>
        </div>
    )
}




