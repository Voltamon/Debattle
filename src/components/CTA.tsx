"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={ctaRef} id="cta" style={{ overflow: "hidden", padding: "var(--spacing-xl) 0", backgroundColor: "var(--color-accent)", position: "relative" }}>
      
      {/* Slanted Separator from Debate Engine */}
      <div style={{
        position: "absolute",
        top: "-100vh",
        right: 0,
        width: "120vw",
        height: "100vh",
        backgroundColor: "var(--color-primary)",
        borderBottom: "8px solid var(--color-text)",
        transformOrigin: "bottom right",
        transform: "rotate(-10deg)",
        zIndex: 0
      }} />

      {/* Abstract Marquee */}
      <div style={{ whiteSpace: "nowrap", overflow: "hidden", display: "flex", position: "relative", zIndex: 1, paddingTop: "8rem" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          style={{ display: "flex", gap: "2rem", paddingBottom: "2rem" }}
        >
          {Array(4).fill(0).map((_, i) => (
            <h2 key={i} style={{ fontSize: "clamp(6rem, 15vw, 15rem)", color: "var(--color-bg)", margin: 0, lineHeight: 0.8, textShadow: "6px 6px 0px var(--color-text)" }}>
              SPEAK UP • SPEAK UP •
            </h2>
          ))}
        </motion.div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "4rem" }}>
          <p style={{ fontSize: "clamp(1rem, 3vw, 2rem)", maxWidth: "800px", marginBottom: "3rem", fontWeight: 800, color: "var(--color-text)", border: "4px solid var(--color-text)", padding: "clamp(1rem, 3vw, 2rem)", backgroundColor: "var(--color-bg)", boxShadow: "clamp(4px, 1.5vw, 10px) clamp(4px, 1.5vw, 10px) 0px var(--color-text)" }}>
            The world needs your voice. Join Debattle today and start engaging in the discussions that matter.
          </p>

          <motion.a 
            href="#" 
            className="hover-lift"
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1rem", 
              backgroundColor: "var(--color-primary)", 
              color: "var(--color-bg)", 
              padding: "clamp(1rem, 2vw, 2rem) clamp(1.5rem, 4vw, 4rem)", 
              fontSize: "clamp(1rem, 3vw, 2rem)", 
              fontWeight: 900, 
              textTransform: "uppercase",
              border: "8px solid var(--color-text)",
              boxShadow: "clamp(6px, 2vw, 15px) clamp(6px, 2vw, 15px) 0px var(--color-text)"
            }}
          >
            Create Account <ArrowRight size={36} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
