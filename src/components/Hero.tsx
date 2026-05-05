"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const letters = "DEBATTLE.".split("");
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("entrance");
      controls.start("loop");
    };
    sequence();
  }, [controls]);

  return (
    <section 
      className="hero-section" 
      style={{ 
        minHeight: "110vh", 
        position: "relative", 
        overflow: "hidden", 
        display: "flex", 
        alignItems: "center", 
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        paddingTop: "clamp(2rem, 10vw, 8rem)"
      }}
    >
      {/* Background Giant Text Doodle */}
      <div style={{ position: "absolute", top: "40%", left: "clamp(30%, 52%, 55%)", zIndex: 2, opacity: 0.08, pointerEvents: "none", whiteSpace: "nowrap", rotate: "-20deg"}}>
        <h1 style={{ fontSize: "clamp(10rem, 25vw, 25rem)", margin: 0, lineHeight: 0.8 }}>RAW</h1>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Abstract Typography Title */}
        <motion.div 
          style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", marginBottom: "4rem", cursor: "default" }}
          initial="initial"
          animate={controls}
        >
          {letters.map((letter, i) => (
            <motion.h1
              key={i}
              custom={i}
              variants={{
                initial: { opacity: 0, y: 100, rotate: -20 },
                entrance: (i) => ({ 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0, 
                  color: "var(--color-text)",
                  transition: { duration: 0.8, delay: 1, type: "spring", bounce: 0.2 } 
                }),
                loop: (i) => {
                  const sign = Math.random() > 0.5 ? 1 : -1;
                  const angle = sign * (Math.floor(Math.random() * 6) + 5);
                  return {
                    scale: [1, 1.25, 1],
                    y: [0, -20, 0],
                    rotate: [0, angle, 0],
                    color: ["var(--color-text)", "var(--color-primary)", "var(--color-text)"],
                    transition: { 
                      duration: 0.5,
                      delay: i * 1, 
                      repeat: Infinity,
                      repeatDelay: (letters.length * 1) - 0.5
                    }
                  };
                }
              }}
              style={{ 
                fontSize: "clamp(4rem, 15vw, 18rem)", 
                margin: 0, 
                lineHeight: 0.8, 
                textShadow: `6px 6px 0px ${i % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-accent)'}`,
                display: "inline-block"
              }}
            >
              {letter}
            </motion.h1>
          ))}
        </motion.div>
        
        <div className="grid">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ gridColumn: "1 / span 5", marginTop: "2rem" }}
          >
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "1rem", color: "var(--color-accent)", textTransform: "uppercase", transform: "rotate(-2deg)", backgroundColor: "var(--color-text)", color: "var(--color-bg)", padding: "1rem", border: "4px solid var(--color-primary)", boxShadow: "8px 8px 0px var(--color-primary)" }}>
              HOSTING MEANINGFUL POLITICAL DEBATES.
            </h2>
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ 
              gridColumn: "1 / span 9", 
              textAlign: "left", 
              marginTop: "4rem", 
              marginBottom: "clamp(6rem, 20vw, 10rem)",
              backgroundColor: "var(--color-bg)", 
              border: "4px dashed var(--color-text)", 
              borderLeft: "none",
              padding: "2rem",
              marginLeft: "-50vw",
              paddingLeft: "calc(50vw + 2rem)"
            }}
          >
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", marginBottom: "3rem", opacity: 0.9, color: "var(--color-text)", display: "inline-block", textAlign: "left" }}>
              Step into the ring. Bring your ideas, your arguments, and your passion. We provide the platform, you provide the voice.
            </p>
            <br/>
            <motion.a 
              href="#cta" 
              whileHover={{ scale: 1.05, rotate: 2, backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "inline-block", backgroundColor: "var(--color-primary)", color: "var(--color-bg)", padding: "clamp(0.75rem, 2vw, 1.5rem) clamp(1.5rem, 4vw, 4rem)", fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", border: "4px solid var(--color-text)", boxShadow: "10px 10px 0px var(--color-text)", transition: "background-color 0.3s, color 0.3s" }}
            >
              Join The Fray
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
