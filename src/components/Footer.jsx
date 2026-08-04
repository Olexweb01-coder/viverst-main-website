import { Link } from "react-router-dom";
import { Sprout, Palette, Mail, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo-light.png" alt="Viverst" className="footer-logo-img" />
          <p className="footer-tag">
            A diversified corporate group building versatile, high-performing
            businesses across agriculture and creative design.
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Company</span>
          <Link to="/">Home</Link>
          <Link to="/about">About Viverst</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Our brands</span>
          <Link to="/agro" className="footer-brand-link">
            <Sprout size={14} strokeWidth={2.25} /> Viverst Agro
          </Link>
          <Link to="/studio" className="footer-brand-link">
            <Palette size={14} strokeWidth={2.25} /> Viverst Studio
          </Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Get in touch</span>
          <a href="mailto:info@viverst.com" className="footer-brand-link">
            <Mail size={14} strokeWidth={2.25} /> info@viverst.com
          </a>
          <span className="footer-brand-link footer-static">
            <MapPin size={14} strokeWidth={2.25} /> Lagos, Nigeria
          </span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Viverst Global Limited. All rights reserved.</span>
        <span className="footer-signature">Building versatile businesses, one industry at a time.</span>
      </div>
    </footer>
  );
}
