"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  
  const beltX = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  
  return (
    <section ref={ctaRef} id="cta" style={{ overflow: "hidden", padding: "var(--spacing-xl) 0", backgroundColor: "var(--color-primary)", position: "relative" }}>
      
      {/* Slanted Separator from About Us */}
      <div style={{
        position: "absolute",
        top: "-100vh",
        right: 0,
        width: "120vw",
        height: "100vh",
        backgroundColor: "var(--color-secondary)",
        borderBottom: "8px solid var(--color-text)",
        transformOrigin: "bottom right",
        // transform: "rotate(-10deg)",
        zIndex: 0
      }} />

      {/* Stripe Belt Marquee */}
      <div style={{ 
        whiteSpace: "nowrap", 
        overflow: "hidden", 
        display: "flex", 
        position: "absolute", 
        top: 0, 
        left: 0,
        width: "100%",
        backgroundColor: "var(--color-text)",
        borderBottom: "4px solid var(--color-bg)",
        zIndex: 10, 
        padding: "0.75rem 0" 
      }}>
        <motion.div
          style={{ display: "flex", gap: "1rem", alignItems: "center", x: beltX }}
        >
          {Array(8).fill(0).map((_, i) => (
            <h2 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--color-bg)", margin: 0, fontWeight: 900, letterSpacing: "2px", textTransform: "uppercase" }}>
              NO ECHO CHAMBERS • RAW DISCOURSE • 
            </h2>
          ))}
        </motion.div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "4rem" }}>
          <p style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", maxWidth: "1000px", marginBottom: "8rem", fontWeight: 800, color: "var(--color-text)", border: "4px solid var(--color-text)", padding: "clamp(2rem, 5vw, 4rem)", backgroundColor: "var(--color-bg)", boxShadow: "clamp(4px, 1.5vw, 10px) clamp(4px, 1.5vw, 10px) 0px var(--color-text)" }}>
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
              backgroundColor: "var(--color-accent)", 
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
