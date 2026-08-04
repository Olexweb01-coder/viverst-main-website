import { motion } from "framer-motion";

/**
 * Reveal — fades/slides content in as it enters the viewport.
 * Wraps children so every section on the site shares one
 * consistent, calm scroll-in motion language.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.7,
  once = true,
  amount = 0.2,
  as = "div",
  className,
  style,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
