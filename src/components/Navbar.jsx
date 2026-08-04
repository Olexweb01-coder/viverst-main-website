import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sprout, Palette } from "lucide-react";
import "./Navbar.css";

const SITE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
{ to: "/our-story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
];

const BRANDS = [
  { to: "/agro", label: "Agro", icon: Sprout, tone: "brand-agro" },
  { to: "/studio", label: "Studio", icon: Palette, tone: "brand-studio" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo" aria-label="Viverst Global — home">
          <img src="/logo.png" alt="Viverst" className="nav-logo-img" />
        </Link>

        <nav className="nav-links" aria-label="Site">
          {SITE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <div className="nav-divider" aria-hidden="true" />
          <nav className="nav-brands" aria-label="Our companies">
            {BRANDS.map((brand) => {
              const Icon = brand.icon;
              return (
                <Link key={brand.to} to={brand.to} className={`nav-brand-pill ${brand.tone}`}>
                  <Icon size={15} strokeWidth={2.25} />
                  <span>{brand.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        {SITE_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => `nav-mobile-link ${isActive ? "is-active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
