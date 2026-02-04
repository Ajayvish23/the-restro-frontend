import "../styles/SpecialsSection.css";
import dish1 from "../assets/paneer-butter.jpg";
import dish2 from "../assets/chicken_biryani.jpg";
import dish3 from "../assets/veg-pizza.jpg";
import dish4 from "../assets/veg-biryani.jpg";
import DishCard from "./DishCard.jsx";

function Specials({user}) {
    let id1="697232a51833273e721215cb"
    let id2="545656rl34984jd66kf3844h"
    let id3="5450940h425980934jh34987"
    let id4="697232a51833273e721215cc"

    return (
        <section className="specials">
            <h2>Our Specials</h2>
            <p className="specials-subtitle">
              Customer favorites, freshly prepared
            </p>

            <div className="specials-container">
                <DishCard image={dish1} name={"Paneer Butter Masala"} price={220} id={id1} user={user}></DishCard>
                <DishCard image={dish2} name={"Chicken Biryani"} price={260} id={id2} user={user}></DishCard>
                <DishCard image={dish3} name={"Veg Pizza"} price={180} id={id3} user={user}></DishCard>
                <DishCard image={dish4} name={"Veg Biryani"} price={160} id={id4} user={user}></DishCard>
            </div>
        </section>
    );
}

export default Specials;
