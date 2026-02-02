import "../styles/About.css";
import aboutImg from "../assets/hero.jpg";
import chefImg from "../assets/hero.jpg";
import Button from "../components/Button";
import GlobalCard from "../components/GlobalCard.jsx";

function About() {
    return (
        <section className="about-page">

            {/* ===== About Intro ===== */}
            <div className="about-page-container">
                <div className="about-page-image">
                    <img src={aboutImg} alt="Our restaurant" />
                </div>
              
                <div className="about-page-content">
                    <h1>Our Story</h1>
                    <p>
                        Since 2015, we’ve been serving delicious food made with passion,
                        tradition, and the finest ingredients.
                    </p>
                    <p>
                        What started as a small family kitchen has grown into a place
                        loved by food enthusiasts across the city.
                    </p>

                    <Button>Our Story</Button>
                </div>
            </div>

            {/* ===== Timeline ===== */}
            <div className="timeline">
                <h2>Our Journey</h2>
                <ul>
                    <li><span>2015</span> – Restaurant founded</li>
                    <li><span>2017</span> – Expanded menu & seating</li>
                    <li><span>2020</span> – Started online orders</li>
                    <li><span>2023</span> – 5,000+ happy customers</li>
                </ul>
            </div>

            {/* ===== Quality Icons ===== */}
            <div className="qualities">
                <GlobalCard
                    title={"🌿 Fresh"}
                    content={"Only fresh and high-quality ingredients."}
                ></GlobalCard>
                <GlobalCard
                    title={"🧼 Hygienic"}
                    content={"Prepared in clean and safe kitchens."}
                ></GlobalCard>
                <GlobalCard
                    title={"⭐ Authentic"}
                    content={"True flavors and original recipes."}
                ></GlobalCard>
            </div>

            {/* ===== Chef Intro ===== */}
            <div className="chef-section">
                <img src={chefImg} alt="Our Chef" />
                <GlobalCard
                    title={"Meet Our Chef"}
                    content={"With over 15 years of culinary experience, our head chef brings " +
                        "authentic flavors and creativity to every dish."}
                    content2={"His passion for food ensures every meal is memorable."}
                    cLass={"global2"}
                ></GlobalCard>
            </div>

        </section>
    );
}

export default About;
