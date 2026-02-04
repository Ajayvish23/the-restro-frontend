import axios from "axios";
import {toast} from "react-toastify";

export default async function addToCart(id,name,price,image,user){
    if (!user) {
        toast.warning("Please login first!");
        return;
    }

    try{
        await axios.post("http://localhost:8000/api/cart",
            {
            itemId: id,
            name: name,
            price: price,
            quantity: 1,
            image:image,
            },
            {withCredentials:true});
        toast.success("Added to cart!");
        // console.log(name);
        // console.log(id);
        // console.log(user);
    }catch(err) {
        console.log(err);
        toast.error("Please login first!");
    }
}