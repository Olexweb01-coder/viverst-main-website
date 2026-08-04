import { Link } from "react-router-dom";
import {
  ArrowRight,
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
  Building2,
  Sprout,
  Palette,
  Check,
} from "lucide-react";
import MorphField from "../components/MorphField";
import Reveal from "../components/Reveal";
import "./About.css";

const VALUES = [
  { label: "Leadership", icon: Crown, copy: "Setting direction and standards others in the group can build on." },
  { label: "Innovation", icon: Lightbulb, copy: "Looking for better ways to solve problems, not just familiar ones." },
  { label: "Excellence", icon: Award, copy: "Holding every business in the group to the same high bar." },
  { label: "Collaboration", icon: Users, copy: "Sharing knowledge and resources across every company we build." },
  { label: "Integrity", icon: ShieldCheck, copy: "Doing business in a way that holds up under scrutiny." },
  { label: "Proactiveness", icon: Zap, copy: "Acting on opportunities before they become obvious to everyone." },
  { label: "Adaptability", icon: Waves, copy: "Changing course when the evidence says we should." },
  { label: "Resilience", icon: Mountain, copy: "Staying built for the long run, not just the next quarter." },
  { label: "Problem Solving", icon: Puzzle, copy: "Starting from the problem, not from the product we'd prefer to sell." },
  { label: "Customer Centricity", icon: Heart, copy: "Measuring success by the value customers actually receive." },
];

const REPUTATION = [
  "A trusted corporate leader known for integrity, transparency, and responsible governance.",
  "A builder of exceptional businesses that consistently deliver quality, innovation, and sustainable growth.",
  "A long-term investment partner focused on creating enduring value rather than short-term gains.",
  "An innovation-driven organization that embraces change, technology, and continuous improvement.",
  "A catalyst for economic and social development by creating jobs, empowering entrepreneurs, and strengthening industries.",
  "A respected parent company whose subsidiaries are recognized as leaders in their respective markets while sharing a common commitment to excellence and impact.",
];

export default function About() {
  return (
    <main className="about">
      {/* ---------------- HERO ---------------- */}
      <section className="about-hero">
        <MorphField intensity={0.8} />
        <div className="container about-hero-inner">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> About Viverst
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="about-title">
              A diversified corporate group, built with intent.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="about-sub">
              Viverst Global Limited builds, manages, and grows businesses
              across strategic industries with long-term economic and
              social impact — providing the vision, governance, and shared
              resources each company in the group needs to lead its market.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- VISION / MISSION / PURPOSE (full) ---------------- */}
      <section className="section vmp-full">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> What drives us
            </span>
          </Reveal>

          <div className="vmp-full-grid">
            <Reveal delay={0.05} className="vmp-full-card card">
              <span className="vmp-full-tag">Vision</span>
              <p>
                To build a globally respected portfolio of businesses that
                drive innovation, create sustainable economic value, and
                improve lives across industries and generations. We
                envision a future where every business within our
                ecosystem is a market leader in its industry, recognized
                for excellence, innovation, and positive impact.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="vmp-full-card card">
              <span className="vmp-full-tag">Mission</span>
              <p>
                To identify opportunities, build and invest in
                high-potential businesses, and provide the strategic
                leadership, resources, and governance they need to achieve
                sustainable growth and lasting impact — fostering
                innovation, encouraging collaboration, and upholding the
                highest standards of integrity.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="vmp-full-card card">
              <span className="vmp-full-tag">Purpose</span>
              <p>
                To build businesses that create lasting value for people,
                industries, and society — transforming ideas into
                sustainable enterprises, strengthening industries, and
                leaving a legacy of sustainable progress for future
                generations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CORPORATE STRUCTURE ---------------- */}
      <section className="section structure">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> How we're structured
            </span>
            <h2 className="structure-title">
              One parent company. Two specialized companies. One standard.
            </h2>
            <p className="structure-copy">
              Viverst operates as a branded house — every company in the
              group carries the Viverst name, backed by shared governance
              and strategic direction, while operating with its own
              specialized market identity.
            </p>
          </Reveal>

          <div className="structure-tree">
            <Reveal delay={0.1} className="structure-parent card-strong">
              <Building2 size={22} strokeWidth={2} />
              <span>Viverst Global Limited</span>
            </Reveal>
            <div className="structure-branch-line" aria-hidden="true" />
            <div className="structure-children">
              <Reveal delay={0.2} className="structure-child card">
                <Sprout size={20} strokeWidth={2} />
                <span>Viverst Agro</span>
              </Reveal>
              <Reveal delay={0.28} className="structure-child card">
                <Palette size={20} strokeWidth={2} />
                <span>Viverst Studio</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CORE VALUES (expanded) ---------------- */}
      <section className="section values-full">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Core values
            </span>
            <h2 className="values-full-title">
              The ten principles behind every decision we make.
            </h2>
          </Reveal>

          <div className="values-full-grid">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.label} delay={(i % 5) * 0.05} className="value-full-card card">
                  <div className="value-full-icon">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                  <span className="value-full-label">{v.label}</span>
                  <p className="value-full-copy">{v.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- POSITIONING ---------------- */}
      <section className="section positioning">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Positioning
            </span>
            <h2 className="positioning-title">Where we stand.</h2>
          </Reveal>
          <Reveal delay={0.1} className="positioning-card card">
            <p>
              Viverst is a forward-thinking corporate group that builds,
              invests in, and nurtures high-performing businesses across
              diverse industries. Through strategic leadership,
              innovation, and responsible governance, we empower each
              subsidiary to achieve sustainable growth while creating
              long-term value for customers, partners, communities, and
              stakeholders.
            </p>
            <p>
              Unlike organizations focused on a single industry, we are
              positioned as a diversified enterprise committed to
              identifying opportunities, developing market-leading brands,
              and building an ecosystem of businesses that work together
              to drive economic progress and meaningful impact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- DESIRED REPUTATION (full) ---------------- */}
      <section className="section reputation-full">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Desired reputation
            </span>
            <h2 className="reputation-full-title">
              Across every industry we enter, we aspire to be recognized
              as:
            </h2>
          </Reveal>
          <div className="reputation-full-list">
            {REPUTATION.map((item, i) => (
              <Reveal key={item} delay={i * 0.06} className="reputation-full-item card">
                <Check size={16} strokeWidth={2.5} />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section about-cta">
        <div className="container">
          <Reveal className="about-cta-card card">
            <h2 className="about-cta-title">
              Want the fuller story behind the strategy?
            </h2>
            <p className="about-cta-copy">
              Our story page goes into why we exist and the gap we're
              closing — this page is the formal version.
            </p>
            <div className="about-cta-actions">
              <Link to="/our-story" className="btn">
                Read our story
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Get in touch <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}