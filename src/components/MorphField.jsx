import "./MorphField.css";

/**
 * MorphField — the parent site's ambient background.
 * Slow-drifting, softly blurred blooms of mint (#8cff89) and a
 * whisper of the headline blue, floating over the near-white
 * base. Motion is continuous and scroll-independent, so it reads
 * as "alive" on mobile too, with no hover state required.
 */
export default function MorphField({ intensity = 1 }) {
  return (
    <div className="morph-field" style={{ "--intensity": intensity }} aria-hidden="true">
      <div className="morph-blob morph-blob--mint" />
      <div className="morph-blob morph-blob--blue" />
      <div className="morph-blob morph-blob--mint-soft" />
    </div>
  );
}
