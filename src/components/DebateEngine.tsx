"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DebateEngine() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const doodleX = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section id="arena" ref={containerRef} style={{ padding: "var(--spacing-xl) 0", backgroundColor: "transparent", position: "relative", borderTop: "var(--border-weight) solid var(--color-text)", overflow: "hidden" }}>
      {/* Background Doodle */}
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          top: "15%", 
          right: "-10%", 
          zIndex: 0, 
          opacity: 0.15, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "15deg", 
          color: "var(--color-accent)",
          x: doodleX
        }}
      >
        <h1 style={{ fontSize: "25rem", margin: 0, lineHeight: 0.8 }}>ENGINE</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "clamp(2.7rem, 9vw, 5.2rem)", marginBottom: "2rem" }}>Order of <span style={{ color: "var(--color-accent)" }}>Debate</span></h2>
          <p className="mono" style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", opacity: 0.8, lineHeight: 1.6, maxWidth: "800px", margin: "1rem auto 0" }}>Our platform upholds the rigorous standards of parliamentary discourse, ensuring every motion is heard and decided.</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", position: "relative" }}>
          {/* Connector Lines (Desktop Only) */}
          <div className="mobile-hide" style={{ position: "absolute", top: "50%", left: "15%", right: "15%", height: "2px", borderTop: "2px dashed var(--color-surface)", zIndex: 0 }} />

          <Step 
            number="01" 
            title="PROPOSITION" 
            desc="The motion is moved. The Proposition and Opposition deliver their opening statements to the House."
            color="var(--color-primary)"
            tilt="-5deg"
          />
          
          <div className="mobile-hide" style={{ alignSelf: "center", zIndex: 1 }}>
            <ArrowRight className="mono" style={{ opacity: 0.3 }} />
          </div>

          <Step 
            number="02" 
            title="DISCUSSION" 
            desc="The floor is opened. Members engage in moderated debate, raising points of order and clarification."
            color="var(--color-accent)"
            tilt="5deg"
          />

          <div className="mobile-hide" style={{ alignSelf: "center", zIndex: 1 }}>
            <ArrowRight className="mono" style={{ opacity: 0.3 }} />
          </div>

          <Step 
            number="03" 
            title="RESOLUTION" 
            desc="The House divides for the final division. Votes are tallied and the result is formally recorded."
            color="var(--color-secondary)"
            tilt="-5deg"
          />
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, desc, color, tilt }: { number: string, title: string, desc: string, color: string, tilt: string }) {
  const shadowColor = color === "var(--color-primary)" ? "var(--color-accent)" : 
                      color === "var(--color-accent)" ? "var(--color-secondary)" : 
                      color === "var(--color-secondary)" ? "var(--color-primary)" : "#1d2021";

  const textColor = color === "var(--color-accent)" ? "#1d2021" : "#ebdbb2";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotate: `var(--step-tilt, ${tilt})`,
        transition: { 
          duration: 0.8, 
          type: "spring", 
          stiffness: 100,
          damping: 20
        } 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="engine-step game-card" 
      style={{ 
        flex: "1 1 300px", 
        maxWidth: "var(--step-max-width)", 
        padding: "var(--step-padding)", 
        zIndex: 1, 
        backgroundColor: color,
        color: textColor,
        border: "4px solid #1d2021",
        boxShadow: `8px 8px 0px ${shadowColor}`,
        transformOrigin: "center center",
        "--step-tilt": tilt
      } as any}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "1.5rem", letterSpacing: "1px", fontWeight: 900, margin: 0 }}>{title}</h3>
        <span className="mono" style={{ fontSize: "1.5rem", fontWeight: 900, opacity: 0.78 }}>{number}</span>
      </div>
      <p className="mono" style={{ fontSize: "0.85rem", lineHeight: 1.5, fontWeight: 700 }}>{desc}</p>
    </motion.div>
  );
}
