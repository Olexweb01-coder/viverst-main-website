import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  Palette,
  Crown,
  Lightbulb,
  Award,
  Users,
  ShieldCheck,
  Zap,
  Waves,
  Mountain,
  Puzzle,
  Heart,
  Check,
} from "lucide-react";
import MorphField from "../components/MorphField";
import Reveal from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import "./Home.css";

const AGRO_IMG =
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1400&auto=format&fit=crop";
const STUDIO_IMG =
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1400&auto=format&fit=crop";

const VALUES = [
  { label: "Leadership", icon: Crown },
  { label: "Innovation", icon: Lightbulb },
  { label: "Excellence", icon: Award },
  { label: "Collaboration", icon: Users },
  { label: "Integrity", icon: ShieldCheck },
  { label: "Proactiveness", icon: Zap },
  { label: "Adaptability", icon: Waves },
  { label: "Resilience", icon: Mountain },
  { label: "Problem Solving", icon: Puzzle },
  { label: "Customer Centricity", icon: Heart },
];

const REPUTATION = [
  "A trusted corporate leader known for integrity, transparency, and responsible governance.",
  "A builder of exceptional businesses that consistently deliver quality, innovation, and sustainable growth.",
  "A long-term investment partner focused on creating enduring value rather than short-term gains.",
  "An innovation-driven organization that embraces change, technology, and continuous improvement.",
  "A catalyst for economic and social development by creating jobs, empowering entrepreneurs, and strengthening industries.",
];

export default function Home() {
  return (
    <main className="home">
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <MorphField intensity={1} />
        <div className="container hero-inner">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Corporate brand · Viverst Global Limited
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="hero-title">
              One entity.
              <br />
              <span className="hero-title-accent">Infinite versatility.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-sub">
              Viverst builds, governs, and grows businesses with long-term
              economic and social impact — starting with Viverst Agro and
              Viverst Studio, and expanding into every industry worth
              building in.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero-cta">
              <Link to="/companies" className="btn btn-primary">
                Explore our story <ArrowRight size={17} />
              </Link>
              <Link to="/about" className="btn">
                Our story
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">
                  <AnimatedCounter value={2} />
                </span>
                <span className="hero-stat-label">Subsidiaries</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">
                  <AnimatedCounter value={10} />
                </span>
                <span className="hero-stat-label">Core values</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">
                  <AnimatedCounter value={1} />
                </span>
                <span className="hero-stat-label">Shared vision</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- VISION / MISSION / PURPOSE ---------------- */}
      <section className="section vmp">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> What drives us
            </span>
          </Reveal>
          <div className="vmp-grid">
            <Reveal delay={0.05} className="vmp-card card">
              <span className="vmp-tag">Vision</span>
              <p>
                To build a globally respected portfolio of businesses that drive
                innovation, create sustainable economic value, and improve lives
                across industries and generations.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="vmp-card card">
              <span className="vmp-tag">Mission</span>
              <p>
                To identify opportunities, build and invest in high-potential
                businesses, and provide the strategic leadership, resources, and
                governance they need to achieve sustainable growth.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="vmp-card card">
              <span className="vmp-tag">Purpose</span>
              <p>
                To build businesses that create lasting value for people,
                industries, and society — transforming ideas into sustainable
                enterprises that solve meaningful challenges.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- VALUES ---------------- */}
      <section className="section values">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Core values
            </span>
            <h2 className="values-title">The ten principles behind every decision.</h2>
          </Reveal>
          <div className="values-marquee">
            <div className="values-track">
              {[...VALUES, ...VALUES].map((v, i) => {
                const Icon = v.icon;
                return (
                  <div className="value-pill card" key={`${v.label}-${i}`}>
                    <Icon size={18} strokeWidth={2} />
                    <span>{v.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MEET OUR COMPANIES ---------------- */}
      <section className="section companies">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Our companies
            </span>
            <h2 className="companies-title">
              Two distinct brands. One versatile vision.
            </h2>
          </Reveal>

          <div className="companies-grid">
            <Reveal delay={0.08} className="company-card card company-card--agro">
              <div className="company-card-media">
                <img src={AGRO_IMG} alt="Rows of green crops in a cultivated field" loading="lazy" />
              </div>
              <div className="company-card-body">
                <div className="company-card-icon">
                  <Sprout size={22} strokeWidth={2} />
                </div>
                <span className="company-card-eyebrow">Department / Subsidiary</span>
                <h3 className="company-card-title">Viverst Agro</h3>
                <p className="company-card-copy">
                  Innovative agricultural solutions, agribusiness services, and B2B
                  agricultural services that strengthen food systems and value chains.
                </p>
                <div className="company-card-chips">
                  <span>Agri-tech</span>
                  <span>Agro processing</span>
                  <span>Packaging</span>
                  <span>B2B services</span>
                </div>
                <Link to="/agro" className="company-card-link">
                  Visit Viverst Agro <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="company-card card company-card--studio">
              <div className="company-card-media">
                <img src={STUDIO_IMG} alt="Clean creative design workspace with a monitor and keyboard" loading="lazy" />
              </div>
              <div className="company-card-body">
                <div className="company-card-icon">
                  <Palette size={22} strokeWidth={2} />
                </div>
                <span className="company-card-eyebrow">Department / Subsidiary</span>
                <h3 className="company-card-title">Viverst Studio</h3>
                <p className="company-card-copy">
                  Creative solutions in branding, graphic design, visual
                  communication, digital design, print, 3D, and creative strategy.
                </p>
                <div className="company-card-chips">
                  <span>Branding</span>
                  <span>Graphic design</span>
                  <span>3D design</span>
                  <span>Creative strategy</span>
                </div>
                <Link to="/studio" className="company-card-link">
                  Visit Viverst Studio <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- REPUTATION ---------------- */}
      <section className="section reputation">
        <div className="container reputation-grid">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Positioning
            </span>
            <h2 className="reputation-title">
              The reputation we're building, one company at a time.
            </h2>
            <p className="reputation-copy">
              Unlike organizations focused on a single industry, Viverst is
              positioned as a diversified enterprise committed to identifying
              opportunities, developing market-leading brands, and building an
              ecosystem of businesses that work together to drive economic
              progress.
            </p>
          </Reveal>

          <div className="reputation-list">
            {REPUTATION.map((item, i) => (
              <Reveal key={item} delay={i * 0.06} className="reputation-item card">
                <Check size={16} strokeWidth={2.5} />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section cta">
        <div className="container">
          <Reveal className="cta-card card">
            <h2 className="cta-title">Let's build something versatile together.</h2>
            <p className="cta-copy">
              Whether you're exploring a partnership, an investment, or simply
              curious about the group — we'd like to hear from you.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in touch <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
