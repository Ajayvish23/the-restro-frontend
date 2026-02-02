import "../styles/Contact.css";
import Button from "../components/Button";

function Contact() {
  return (
    <section className="contact-page">

      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you. Reach out anytime!
      </p>

      <div className="contact-container">

        {/* ===== Contact Form ===== */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <Button type="submit">Send Message</Button>
        </form>

        {/* ===== Contact Info + Map ===== */}
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>📍 Main Road, City Center, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@restaurant.com</p>

          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=india&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
