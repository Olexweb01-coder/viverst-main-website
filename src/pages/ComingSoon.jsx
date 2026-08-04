import { Link } from "react-router-dom";
import MorphField from "../components/MorphField";
import Reveal from "../components/Reveal";
import "./ComingSoon.css";

export default function ComingSoon({ title, note }) {
  return (
    <main className="coming-soon">
      <MorphField intensity={0.7} />
      <div className="container coming-soon-inner">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" /> Under construction
          </span>
          <h1 className="coming-soon-title">{title}</h1>
          <p className="coming-soon-note">{note}</p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
