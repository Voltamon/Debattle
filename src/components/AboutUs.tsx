"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current) {
      gsap.fromTo(textRef1.current, 
        { x: -100, opacity: 0 },
        {
          x: 0, 
          opacity: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );
      gsap.fromTo(textRef2.current, 
        { x: 100, opacity: 0 },
        {
          x: 0, 
          opacity: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 50%" }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="about-us-section" style={{ padding: "var(--spacing-xl) 0", minHeight: "120vh", backgroundColor: "var(--color-secondary)", color: "var(--color-bg)", position: "relative", overflow: "visible" }}>
      
      {/* Slanted Separator from Hero */}
      <div style={{
        position: "absolute",
        top: "-100vh",
        right: 0,
        width: "120vw",
        height: "100vh",
        backgroundColor: "var(--color-bg)",
        borderBottom: "8px solid var(--color-text)",
        transformOrigin: "bottom right",
        transform: "rotate(-20deg)",
        zIndex: 0
      }}>
        <h2 style={{ 
          position: "absolute",
          bottom: "clamp(0.5rem, 2vw, 2rem)",
          left: "calc(20vw + clamp(1rem, 5vw, 5rem))",
          fontSize: "clamp(3.6rem, 12vw, 18rem)", 
          margin: 0, 
          color: "var(--color-primary)", 
          textShadow: "clamp(4px, 1vw, 10px) clamp(4px, 1vw, 10px) 0px var(--color-text)",
          pointerEvents: "none",
          whiteSpace: "nowrap"
        }}>
          ABOUT US
        </h2>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid about-us-grid" style={{ marginBottom: "8rem", paddingTop: "18rem" }}>
          <motion.div 
            className="about-us-desc"
            style={{ gridColumn: "6 / span 7", zIndex: 2, position: "relative" }}
          >
            <p ref={textRef1} style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, padding: "clamp(1.5rem, 4vw, 4rem)", backgroundColor: "var(--color-text)", color: "var(--color-bg)", border: "4px solid var(--color-primary)", boxShadow: "clamp(4px, 1vw, 12px) clamp(4px, 1vw, 12px) 0px var(--color-primary)", transform: "rotate(2deg)", aspectRatio: "3 / 2", display: "flex", alignItems: "center", textAlign: "center" }}>
              Debattle was founded on a simple principle: democracy thrives on dialogue.  
            </p>
          </motion.div>
        </div>
        
        <div className="stats-container" style={{ display: "flex", flexWrap: "nowrap", gap: "clamp(1rem, 3rem, 6rem)", justifyContent: "center" }}>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 2, backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
            style={{ border: "4px solid var(--color-bg)", padding: "clamp(0.5rem, 2vw, 2rem)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "var(--color-accent)", color: "var(--color-text)", boxShadow: "clamp(2px, 1vw, 8px) clamp(2px, 1vw, 8px) 0px var(--color-bg)", flex: "1 1 0" }}
          >
            <span style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)", fontWeight: 900, fontFamily: "var(--font-display)", lineHeight: 1 }}>50K+</span>
            <span style={{ textTransform: "uppercase", fontWeight: 800, marginTop: "0.5rem", fontSize: "clamp(0.6rem, 1vw, 1rem)" }}>Debates Hosted</span>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: -2, backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
            style={{ border: "4px solid var(--color-bg)", padding: "clamp(0.5rem, 2vw, 2rem)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "var(--color-primary)", color: "var(--color-text)", boxShadow: "clamp(2px, 1vw, 8px) clamp(2px, 1vw, 8px) 0px var(--color-bg)", flex: "1 1 0" }}
          >
            <span style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)", fontWeight: 900, fontFamily: "var(--font-display)", lineHeight: 1 }}>1M+</span>
            <span style={{ textTransform: "uppercase", fontWeight: 800, marginTop: "0.5rem", fontSize: "clamp(0.6rem, 1vw, 1rem)" }}>Votes Cast</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
