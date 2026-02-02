import "../styles/HeroSection.css";
import Button from "./Button.jsx";
import heroImg from "../assets/restro_img/the-restro.jpg"

function HeroSection() {
  return (
    <section className="hero" style={{backgroundImage: `url(${heroImg})`}}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Delicious Food, Delivered Fresh</h1>
          <p>
            Experience the taste of authentic flavors made with love and
            passion.
          </p>
          <Button variant={"main"} linkto={"/menu"}>View Menu</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
