import "../styles/AboutSection.css";
import Button from "./Button.jsx";
import ImageSlider from "./ImageSlider.jsx";

function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <ImageSlider></ImageSlider>
        </div>

        <div className="about-content">
          <h2>About Our Restaurant</h2>
          <p>
            We serve delicious and freshly prepared meals using high-quality
            ingredients. Our chefs bring authentic flavors and passion to every
            dish.
          </p>
          <p>
            Whether you dine in or order online, we promise a delightful food
            experience every time.
          </p>
          <Button linkto={"/about"} variant={"main"}>Learn More</Button>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
