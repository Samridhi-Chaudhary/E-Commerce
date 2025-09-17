
import "./Footer.css";
import {  Twitter, Instagram, Youtube, FacebookIcon, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>ShopFlow</h2>
          <p>Your trusted destination for premium products. We deliver quality, style, and exceptional service to customers worldwide.</p>
          <div className="social-icons">
            <FacebookIcon size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Youtube size={20} />
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Shop All</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Sale</li>
            <li>Gift Cards</li>
          </ul>
        </div>

   
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Size Guide</li>
            <li>FAQ</li>
          </ul>
          <div className="contact-info">
            <p> <Phone size={15}/> 1-800-SHOPFLOW</p>
            <p> <Mail size={15}/> help@shopflow.com</p>
            <p><MapPin size={15}/> New York, NY 10001</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to get special offers, free giveaways, and exclusive deals.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <small>By subscribing, you agree to our Privacy Policy and Terms of Service.</small>
        </div>

      </div>
   
      <div className="footer-bottom">
        <p>© 2024 ShopFlow. All rights reserved.</p>
        <div className="bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
