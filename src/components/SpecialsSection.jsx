import "../styles/SpecialsSection.css";
import dish1 from "../assets/paneer-butter.jpg";
import dish2 from "../assets/chicken_biryani.jpg";
import dish3 from "../assets/veg-pizza.jpg";
import dish4 from "../assets/veg-biryani.jpg";
import DishCard from "./DishCard.jsx";

function Specials() {
    return (
        <section className="specials">
            <h2>Our Specials</h2>
            <p className="specials-subtitle">
              Customer favorites, freshly prepared
            </p>

            <div className="specials-container">
                <DishCard source={dish1} altText={"Paneer Butter Masala"} price={220}></DishCard>
                <DishCard source={dish2} altText={"Chicken Biryani"} price={260}></DishCard>
                <DishCard source={dish3} altText={"Veg Pizza"} price={180}></DishCard>
                <DishCard source={dish4} altText={"Veg Biryani"} price={160}></DishCard>
            </div>
        </section>
    );
}

export default Specials;
