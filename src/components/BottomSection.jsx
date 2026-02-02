import "../styles/BottomSection.css";
import Button from "./Button.jsx";

function BottomSection() {
    return (
        <section className="cta" id={"cta"}>
            <div className="cta-content">
                <h2>Ready to Taste Something Amazing?</h2>
                <p>
                  Order now or visit us today and enjoy freshly prepared delicious
                  meals.
                </p>

                <div className="cta-buttons">
                    <Button linkto={"/menu"} variant={"third"}>Order Now</Button>
                    <Button linkto={"/contact"} variant={"third"}>Visit Us</Button>
                </div>
            </div>
        </section>
    );
}

export default BottomSection;
