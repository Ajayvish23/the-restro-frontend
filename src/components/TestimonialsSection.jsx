import "../styles/TestimonialsSection.css";
import ReviewCard from "./ReviewCard.jsx";

function TestimonialsSection() {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <p className="testimonials-subtitle">
                Real reviews from our happy customers
            </p>

            <div className="testimonials-container">
                <ReviewCard
                    name={"Rahul Sharma"}
                    remark={`"Amazing food and great service. The flavors were authentic and absolutely delicious!"`}>
                </ReviewCard>
                <ReviewCard
                    name={"Neha Verma"}
                    remark={`"One of the best dining experiences I’ve had. Highly recommended for food lovers."`}>
                </ReviewCard>
                <ReviewCard
                    name={"Ram Kumar"}
                    remark={`"Fresh food, quick delivery, and reasonable prices. Will definitely order again."`}>
                </ReviewCard>
            </div>
        </section>
    );
}

export default TestimonialsSection;
