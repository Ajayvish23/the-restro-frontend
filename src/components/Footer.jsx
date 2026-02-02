import "../styles/Footer.css"

export default function Footer(){
    return (
    <footer className="footer">
      <div className="footer-container">

        {/* Address */}
        <div className="footer-section">
          <h4>Visit Us</h4>
          <p>Main Road, City Center</p>
          <p>Jharkhand, India</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Mon – Fri: 10:00 AM – 10:00 PM</p>
          <p>Saturday: 11:00 AM – 11:30 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘 Facebook</a>
            <a href="#" aria-label="Instagram">📸 Instagram</a>
            <a href="#" aria-label="Twitter">🐦 Twitter</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} The Restro. All rights reserved.
      </div>
    </footer>
  );
}