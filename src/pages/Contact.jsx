import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import MorphField from "../components/MorphField";
import Reveal from "../components/Reveal";
import "./Contact.css";

const WHATSAPP_MESSAGE =
  "Hi, I saw your website and I want more information on your services";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "info@viverst.com",
    href: "mailto:info@viverst.com",
    tone: "channel-mail",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 906 034 2734",
    href: "tel:+2349060342734",
    tone: "channel-phone",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us directly",
    href: `https://wa.me/2349060342734?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    tone: "channel-whatsapp",
    external: true,
  },
];

export default function Contact() {
  return (
    <main className="contact">
      <section className="contact-hero">
        <MorphField intensity={0.8} />
        <div className="container contact-hero-inner">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Contact Viverst
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="contact-title">Let's start a conversation.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="contact-sub">
              Whether you're exploring a partnership, an investment, or
              simply curious about the group — reach us directly through
              any of the channels below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-channels">
        <div className="container">
          <div className="channels-grid">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={i * 0.08} className="channel-card card">
                  <a
                    href={c.href}
                    className="channel-card-link"
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                  >
                    <div className={`channel-icon ${c.tone}`}>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="channel-label">{c.label}</span>
                    <span className="channel-value">{c.value}</span>
                    <span className="channel-cta">
                      {c.label === "Email" ? "Send an email" : c.label === "Phone" ? "Call now" : "Open WhatsApp"}
                      <ArrowUpRight size={15} />
                    </span>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.24} className="channel-card card">
              <div className="channel-card-link channel-card-static">
                <div className="channel-icon channel-address">
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <span className="channel-label">Address</span>
                <span className="channel-value">Lagos, Nigeria</span>
                <span className="channel-cta channel-cta-static">Headquarters</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container">
          <Reveal className="contact-cta-card card">
            <h2 className="contact-cta-title">
              Prefer WhatsApp? We reply fastest there.
            </h2>
            <p className="contact-cta-copy">
              Tap below and we'll already have a message started for you —
              just hit send.
            </p>
            <a
              href={`https://wa.me/2349060342734?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Message us on WhatsApp <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}