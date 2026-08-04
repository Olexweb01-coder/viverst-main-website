import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

/**
 * ScrollProgress — a thin solid-color bar tracking how far down the
 * page the visitor has scrolled. Purely a "moving element to make
 * it feel lively" — no gradient, no blur.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
