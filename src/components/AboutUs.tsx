"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState("");
  const fullQuote = "\"In this House, we do not fight with swords, but with words. We do not seek to crush, but to convince.\"";
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const doodleX = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  
  useEffect(() => {
    if (isQuoteInView) {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayedText(fullQuote.slice(0, i));
        i++;
        if (i > fullQuote.length) clearInterval(timer);
      }, 40);
      return () => clearInterval(timer);
    }
  }, [isQuoteInView]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current) {
      gsap.fromTo(".stat-card", 
        { y: 50, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" }
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "var(--spacing-xl) 0", backgroundColor: "transparent", borderTop: "var(--border-weight) solid var(--color-text)", position: "relative", overflow: "hidden" }}>
      {/* Background Doodle */}
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          top: "50%", 
          left: "-10%", 
          y: "-50%",
          x: doodleX,
          zIndex: 0, 
          opacity: 0.15, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "-20deg", 
          color: "var(--color-primary)" 
        }}
      >
        <h1 style={{ fontSize: "25rem", margin: 0, lineHeight: 0.8 }}>ORDER</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid" style={{ alignItems: "center", marginBottom: "clamp(3rem, 10vw, 6rem)" }}>
          <div style={{ gridColumn: "1 / span 12", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} className="desktop-grid-adjust">
            <h2 style={{ fontSize: "clamp(2.7rem, 8vw, 5.2rem)", marginBottom: "2rem", whiteSpace: "nowrap" }}><span style={{ color: "var(--color-primary)" }}>WHO </span>WE ARE</h2>
            <p className="mono" style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", opacity: 0.8, lineHeight: 1.6, maxWidth: "800px" }}>
              Debattle is the digital successor to the great debating chambers of history. We provide the infrastructure for rigorous, structured, and civil disagreement—where rhetoric is refined, and logic is the only currency.
            </p>
          </div>
          
          <div style={{ gridColumn: "1 / span 12", marginTop: "3rem" }}>
            <motion.div 
              ref={quoteRef}
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -1 }}
              className="game-card about-quote-card"
              style={{ padding: "clamp(1.5rem, 5vw, 4rem)", backgroundColor: "#ebdbb2", color: "#1d2021", margin: "0 auto", maxWidth: "1000px", border: "4px solid #1d2021", boxShadow: "10px 10px 0px var(--color-primary)" }}
            >
              <blockquote style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 900, fontStyle: "italic", lineHeight: 1.3 }}>
                {displayedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ display: "inline-block", width: "4px", height: "1.2em", backgroundColor: "var(--color-accent)", marginLeft: "4px", verticalAlign: "middle" }}
                />
              </blockquote>
              <footer className="mono" style={{ marginTop: "2rem", color: "var(--color-primary)", fontSize: "0.8rem", fontWeight: 800 }}>— THE STANDING ORDERS v1.0</footer>
            </motion.div>
          </div>
        </div>

        <div className="stats-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          <StatCard label="Sessions Convened" value="124K+" color="var(--color-primary)" />
          <StatCard label="Enrolled Members" value="42K+" color="var(--color-accent)" />
          <StatCard label="Divisions Recorded" value="1.2M+" color="var(--color-secondary)" />
          <StatCard label="Points of Order Raised" value="842K" color="var(--color-success)" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const shadowColor = color === "var(--color-primary)" ? "var(--color-accent)" : 
                      color === "var(--color-accent)" ? "var(--color-secondary)" : 
                      color === "var(--color-secondary)" ? "var(--color-success)" :
                      color === "var(--color-success)" ? "var(--color-primary)" : "#1d2021";

  const textColor = (color === "var(--color-accent)" || color === "var(--color-success)") ? "#1d2021" : "#ebdbb2";

  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="stat-card game-card" 
      style={{ 
        padding: "clamp(1rem, 3vw, 1.5rem)", 
        textAlign: "center", 
        backgroundColor: color,
        color: textColor,
        border: "4px solid #1d2021",
        boxShadow: `6px 6px 0px ${shadowColor}`,
        cursor: "default" 
      }}
    >
      <div className="mono" style={{ fontSize: "clamp(1.2rem, 5vw, 2rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
        <RollingNumber value={value} trigger={isHovered} />
      </div>
      <div className="mono" style={{ fontSize: "clamp(0.55rem, 2vw, 0.7rem)", opacity: 0.9, textTransform: "uppercase", letterSpacing: "1px", lineHeight: 1.2, fontWeight: 700 }}>{label}</div>
    </motion.div>
  );
}

function RollingNumber({ value, trigger }: { value: string, trigger: boolean }) {
  const [display, setDisplay] = useState(value);
  
  useEffect(() => {
    if (trigger) {
      const numericPart = value.replace(/[^0-9.]/g, "");
      const suffix = value.replace(/[0-9.,]/g, "");
      const target = parseFloat(numericPart.replace(/,/g, ""));
      
      let start = 0;
      const duration = 1000;
      const startTime = performance.now();
      
      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * easeOut;
        
        let formatted = "";
        if (value.includes(",")) {
          formatted = Math.floor(current).toLocaleString();
        } else if (value.includes(".")) {
          formatted = current.toFixed(1);
        } else {
          formatted = Math.floor(current).toString();
        }
        
        setDisplay(formatted + suffix);
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      
      requestAnimationFrame(update);
    }
  }, [trigger, value]);

  return <>{display}</>;
}
