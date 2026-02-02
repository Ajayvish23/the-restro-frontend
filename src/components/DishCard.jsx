import "../styles/DishCard.css"
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import "../styles/Button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function DishCard({source,altText,price}){
    return (
        <div className="dish-card" >
            <Link to={"/menu"}><img src={source} alt={altText}/></Link>

            <div className="dish-info">
                <h3>{altText}</h3>
                <p>₹{price}</p>
            </div>
            <div className={"dish-btn"}>
                <Button variant={"buy"}>Buy now</Button>
                <Button variant={"cart"}><FontAwesomeIcon icon={faCartArrowDown}/></Button>
            </div>
        </div>
    )
}