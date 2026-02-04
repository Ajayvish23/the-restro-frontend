import "../styles/DishCard.css"
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import "../styles/Button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import addToCart from "../utils/addToCart.js";

export default function DishCard({image,name,price,id,user}){


    return (
        <div className="dish-card" >
            <Link to={"/menu"}><img src={image} alt={name}/></Link>

            <div className="dish-info">
                <h3>{name}</h3>
                <p>₹{price}</p>
            </div>
            <div className={"dish-btn"}>
                <Button variant={"buy"}>Buy now</Button>
                <Button
                    variant={"cart"}
                    onClick={()=>addToCart(image,name,price,id,user)}
                ><FontAwesomeIcon icon={faCartArrowDown}/></Button>
            </div>
        </div>
    )
}