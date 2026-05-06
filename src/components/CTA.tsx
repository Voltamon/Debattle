"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Shield } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  
  const beltX = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  const doodleX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  
  return (
    <section ref={ctaRef} id="cta" style={{ overflow: "hidden", padding: "clamp(4rem, 15vw, 10rem) 0 clamp(8rem, 25vw, 12rem) 0", backgroundColor: "var(--color-bg)", position: "relative", borderTop: "var(--border-weight) solid var(--color-text)" }}>
      
      {/* Background Graphic */}
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          bottom: "-15%", 
          left: "-10%", 
          zIndex: 0, 
          opacity: 0.15, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "15deg", 
          color: "var(--color-accent)",
          x: doodleX
        }}
      >
        <h1 style={{ fontSize: "25rem", margin: 0 }}>JOIN</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="game-card" style={{ padding: "clamp(2rem, 8vw, 6rem)", backgroundColor: "var(--color-primary)", color: "var(--color-bg)", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem" }}>
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              <Trophy size={48} strokeWidth={2.5} />
            </motion.div>
          </div>
          
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", marginBottom: "1.5rem", lineHeight: 1.1 }}>RESERVE YOUR SEAT IN THE HOUSE</h2>
          <p className="mono" style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)", fontWeight: 700, marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
            Debattle is currently in a restricted early access phase. Join the waitlist to receive your invitation to the next session.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-text)", color: "var(--color-bg)" }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: "0.75rem", 
                backgroundColor: "var(--color-bg)", 
                color: "var(--color-text)", 
                padding: "1rem 2rem", 
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)", 
                fontWeight: 900, 
                textTransform: "uppercase",
                border: "4px solid var(--color-text)",
                boxShadow: "6px 6px 0px var(--color-text)",
                cursor: "pointer",
                width: "min(100%, 350px)"
              }}
            >
              Join the Waitlist <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: "0.75rem", 
                backgroundColor: "transparent", 
                color: "var(--color-bg)", 
                padding: "1rem 2rem", 
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)", 
                fontWeight: 900, 
                textTransform: "uppercase",
                border: "4px solid var(--color-bg)",
                cursor: "pointer",
                width: "min(100%, 350px)"
              }}
            >
              <Shield size={20} /> The Standing Orders
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stripe Belt Marquee (Bottom) */}
      <div style={{ 
        whiteSpace: "nowrap", 
        overflow: "hidden", 
        display: "flex", 
        position: "absolute", 
        bottom: "2rem", 
        left: 0,
        width: "100%",
        backgroundColor: "var(--color-accent)",
        borderTop: "3px solid var(--color-bg)",
        borderBottom: "3px solid var(--color-bg)",
        zIndex: 1, 
        padding: "clamp(0.6rem, 2vw, 1.5rem) 0",
        rotate: "-2deg"
      }}>
        <motion.div
          style={{ display: "flex", gap: "2rem", alignItems: "center", x: beltX }}
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="mono" style={{ fontSize: "clamp(0.8rem, 3vw, 1.5rem)", color: "var(--color-bg)", fontWeight: 900, textTransform: "uppercase" }}>
              PARLIAMENTARY SESSIONS • LIVE DIVISIONS • ORDER OF MERIT • DECORUM • 
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
