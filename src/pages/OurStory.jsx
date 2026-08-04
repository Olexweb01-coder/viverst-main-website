import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  Palette,
  Layers,
  Cpu,
  Package,
  Handshake,
  PenTool,
  Boxes,
  Compass,
} from "lucide-react";
import MorphField from "../components/MorphField";
import Reveal from "../components/Reveal";
import "./OurStory.css";

const AGRO_IMG =
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1400&auto=format&fit=crop";
const STUDIO_IMG =
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1400&auto=format&fit=crop";

const AGRO_UNITS = [
  { icon: Cpu, label: "Agricultural Technology" },
  { icon: Layers, label: "Agro Processing" },
  { icon: Package, label: "Packaging Solutions" },
  { icon: Handshake, label: "Agricultural B2B Services" },
];

const STUDIO_UNITS = [
  { icon: PenTool, label: "Branding" },
  { icon: Palette, label: "Graphic & Print Design" },
  { icon: Boxes, label: "3D Design" },
  { icon: Compass, label: "Creative Strategy" },
];

export default function OurStory() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="our-story">
      {/* ---------------- HERO ---------------- */}
      <section className="story-hero" ref={heroRef}>
        <MorphField intensity={1} />
        <motion.div
          className="container story-hero-inner"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Our story
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="story-hero-title">
              Every industry has a gap.
              <br />
              <span className="story-hero-accent">We keep finding them.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="story-hero-sub">
              Not because we chase trends — but because versatility, done
              right, is a way of seeing what's missing before anyone else
              does.
            </p>
          </Reveal>
        </motion.div>
      </section>

      {/* ---------------- THE GAP ---------------- */}
      <section className="section the-gap">
        <div className="container gap-grid">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> The gap
            </span>
            <h2 className="gap-title">
              Most companies pick a lane. We saw the cost of that.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="gap-copy">
              Industries are usually built in silos — one company, one
              sector, one way of thinking. It works, until the world
              changes faster than a single-lane business can adapt. We saw
              food systems that needed better technology and no one
              building it with real agricultural understanding. We saw
              brands that needed real creative craft, not templates. Two
              completely different problems — and yet the same root cause:
              a gap left by businesses that never learned how to be
              versatile.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHY WE EXIST ---------------- */}
      <section className="section why-we-exist">
        <div className="container why-grid">
          <Reveal className="why-word">
            <span className="why-word-text">Versatile</span>
            <span className="why-word-sub">/ˈvɜː.sə.taɪl/ — adjective</span>
            <span className="why-word-def">
              able to adapt or be adapted to many different functions,
              without losing what makes it work.
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Why we exist
            </span>
            <h2 className="why-title">
              We exist to build what a single industry can't.
            </h2>
            <p className="why-copy">
              Viverst was founded on a simple belief: lasting impact comes
              from solving real problems, wherever they show up — not from
              staying inside one category because it's comfortable. So
              instead of building one business, we built a structure that
              could hold many — each one deeply specialized, all of them
              sharing one standard for how work gets done.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHAT WE'RE BUILDING ---------------- */}
      <section className="section building">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> What we're building
            </span>
            <h2 className="building-title">
              Two proof points. Not the whole story — just where it starts.
            </h2>
          </Reveal>

          <div className="building-grid">
            <Reveal delay={0.08} className="building-card card">
              <div className="building-media">
                <img src={AGRO_IMG} alt="Rows of green crops in a cultivated field" loading="lazy" />
              </div>
              <div className="building-body">
                <div className="building-icon building-icon--agro">
                  <Sprout size={22} strokeWidth={2} />
                </div>
                <h3 className="building-card-title">Viverst Agro</h3>
                <p className="building-card-copy">
                  Because food systems deserve technology built by people who
                  understand agriculture — not just software.
                </p>
                <Link to="/agro" className="building-card-link">
                  Visit Viverst Agro <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="building-card card">
              <div className="building-media">
                <img src={STUDIO_IMG} alt="Clean creative design workspace with a monitor and keyboard" loading="lazy" />
              </div>
              <div className="building-body">
                <div className="building-icon building-icon--studio">
                  <Palette size={22} strokeWidth={2} />
                </div>
                <h3 className="building-card-title">Viverst Studio</h3>
                <p className="building-card-copy">
                  Because brands deserve real creative craft — not another
                  template dressed up as a design.
                </p>
                <Link to="/studio" className="building-card-link">
                  Visit Viverst Studio <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- BUSINESS UNITS (lighter-touch) ---------------- */}
      <section className="section units">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Inside the group
            </span>
            <h2 className="units-title">Where the work actually happens.</h2>
          </Reveal>

          <div className="units-grid">
            <Reveal delay={0.05} className="units-col">
              <span className="units-col-label units-col-label--agro">Viverst Agro</span>
              <div className="units-list">
                {AGRO_UNITS.map((u) => {
                  const Icon = u.icon;
                  return (
                    <div className="unit-pill card" key={u.label}>
                      <Icon size={17} strokeWidth={2} />
                      <span>{u.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={0.15} className="units-col">
              <span className="units-col-label units-col-label--studio">Viverst Studio</span>
              <div className="units-list">
                {STUDIO_UNITS.map((u) => {
                  const Icon = u.icon;
                  return (
                    <div className="unit-pill card" key={u.label}>
                      <Icon size={17} strokeWidth={2} />
                      <span>{u.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING ---------------- */}
      <section className="section story-close">
        <div className="container">
          <Reveal className="story-close-card card">
            <h2 className="story-close-title">
              The gap you're facing might be one we already understand.
            </h2>
            <p className="story-close-copy">
              If you've felt the cost of an industry that hasn't caught up
              yet — that's exactly the kind of problem we exist to close.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Let's talk <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}