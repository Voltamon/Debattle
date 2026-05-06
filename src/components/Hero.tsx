"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Play } from "lucide-react";

export default function Hero() {
  const letters = "DEBATTLE.".split("");
  const { scrollYProgress } = useScroll();
  const doodleX = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <section 
      className="hero-section" 
      style={{ 
        minHeight: "100vh", 
        position: "relative", 
        overflow: "hidden", 
        display: "flex", 
        alignItems: "center", 
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        paddingTop: "4rem",
        paddingBottom: "4rem"
      }}
    >
      {/* Background Grid & Giant Text */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.1, backgroundImage: "radial-gradient(var(--color-text) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          top: "15%", 
          left: "55%", 
          zIndex: 0, 
          opacity: 0.15, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "-15deg", 
          color: "var(--color-primary)",
          x: doodleX
        }}
      >
        <h1 style={{ fontSize: "30rem", margin: 0, lineHeight: 0.8 }}>DEBATE</h1>
      </motion.div>

      <div className="container hero-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid">
          <div style={{ gridColumn: "1 / span 12", textAlign: "center", marginBottom: "clamp(2rem, 8vw, 4rem)" }}>
            <motion.div 
              style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", cursor: "default", width: "100%" }}
              initial="initial"
              animate="entrance"
            >
              {letters.map((letter, i) => (
                <motion.h1
                  key={i}
                  custom={i}
                  className="hero-letter"
                  whileHover={{ 
                    scale: 1.2, 
                    color: i % 2 === 0 ? "var(--color-primary)" : "var(--color-accent)",
                    y: -10,
                    textShadow: `8px 8px 0px var(--color-bg)`,
                    zIndex: 10,
                    transition: { type: "spring", stiffness: 400, damping: 12 }
                  }}
                  initial="initial"
                  animate="entrance"
                  variants={{
                    initial: { opacity: 0, y: 50, rotate: -20 },
                    entrance: (i) => ({ 
                      opacity: 1, 
                      y: 0, 
                      rotate: -10, 
                      transition: { duration: 0.8, delay: 0.2 + i * 0.05, type: "spring" } 
                    })
                  }}
                  style={{ 
                    margin: "0 0.1rem", 
                    lineHeight: 1, 
                    textShadow: `clamp(2px, 0.8vw, 12px) clamp(2px, 0.8vw, 12px) 0px ${i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)'}`,
                    display: "inline-block",
                    position: "relative",
                    zIndex: 1,
                    cursor: "pointer",
                    color: "var(--color-text)"
                  }}
                >
                  {letter}
                </motion.h1>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mono"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)", marginTop: "1.5rem", color: "var(--color-secondary)", fontWeight: 700, padding: "0 1rem" }}
            >
              ELEVATE THE PUBLIC DISCOURSE. JOIN THE WAITLIST.
            </motion.p>
          </div>

          <div style={{ gridColumn: "1 / span 12", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", marginBottom: "2rem", lineHeight: 1.1, maxWidth: "800px" }}>
                THE PREMIER <span style={{ color: "var(--color-primary)" }}>PARLIAMENTARY</span> DEBATE PLATFORM.
              </h2>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-text)", color: "var(--color-bg)" }}
                  className="game-card"
                  style={{ padding: "0.8rem 1.5rem", backgroundColor: "var(--color-primary)", color: "var(--color-bg)", fontWeight: 900, fontSize: "0.9rem", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Play size={18} fill="currentColor" />
                  Reserve Your Seat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  style={{ padding: "0.8rem 1.5rem", backgroundColor: "transparent", border: "2px solid var(--color-text)", color: "var(--color-text)", fontWeight: 800, textTransform: "uppercase", cursor: "pointer", fontSize: "0.9rem" }}
                >
                  The Manifesto
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
