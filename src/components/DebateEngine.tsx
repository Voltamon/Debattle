"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Mic2, MessageSquare, Award } from "lucide-react";

export default function DebateEngine() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current) {
      const cards = gsap.utils.toArray(".engine-card");
      gsap.fromTo(cards, 
        { scale: 0.8, opacity: 0, rotation: () => Math.random() * 20 - 10 },
        {
          scale: 1,
          opacity: 1,
          rotation: () => Math.random() * 6 - 3,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} style={{ padding: "var(--spacing-xl) 0", backgroundColor: "var(--color-primary)", position: "relative", overflow: "hidden", borderTop: "8px solid var(--color-text)" }}>
      
      {/* Background Giant Text Doodle */}
      <div style={{ position: "absolute", top: "20%", right: "-10%", zIndex: 0, opacity: 0.1, pointerEvents: "none", transform: "rotate(15deg)" }}>
        <h1 style={{ fontSize: "clamp(10rem, 25vw, 25rem)", margin: 0, lineHeight: 0.8, color: "var(--color-bg)" }}>FIGHT</h1>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>
          <h2 style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "var(--color-bg)", textTransform: "lowercase", letterSpacing: "-5px" }}>_the_debate_engine</h2>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 1.25rem)", width: "100%", maxWidth: "600px", margin: "0 auto", marginTop: "1rem", color: "var(--color-text)", backgroundColor: "var(--color-accent)", padding: "1rem", border: "4px solid var(--color-bg)" }}>
            A structured format designed to elevate conversation and reward logical reasoning over loud shouting.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "clamp(1rem, 4vw, 4rem)" }}>
          
          <div className="engine-card" style={{ flex: "1 1 0", border: "4px solid var(--color-text)", padding: "clamp(0.5rem, 2vw, 2rem)", backgroundColor: "var(--color-accent)", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", boxShadow: "clamp(4px, 1.5vw, 15px) clamp(4px, 1.5vw, 15px) 0px var(--color-bg)" }}>
            <div style={{ padding: "1rem", backgroundColor: "var(--color-text)", borderRadius: "0%", marginBottom: "1rem", color: "var(--color-bg)" }}>
              <Mic2 size={40} />
            </div>
            <h3 style={{ fontSize: "clamp(1rem, 3vw, 2rem)", marginBottom: "1rem", color: "var(--color-bg)" }}>01_STAGE</h3>
            <p style={{ color: "var(--color-bg)", fontWeight: 600, fontSize: "clamp(0.6rem, 1vw, 1rem)" }}>Propose a topic or accept a challenge. State your premise clearly and set the rules of engagement.</p>
          </div>

          <div className="engine-card" style={{ flex: "1 1 0", border: "4px solid var(--color-text)", padding: "clamp(0.5rem, 2vw, 2rem)", backgroundColor: "var(--color-secondary)", display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right", boxShadow: "calc(clamp(4px, 1.5vw, 15px) * -1) clamp(4px, 1.5vw, 15px) 0px var(--color-bg)", marginTop: "clamp(1rem, 4vw, 4rem)" }}>
            <div style={{ padding: "1rem", backgroundColor: "var(--color-bg)", borderRadius: "50%", marginBottom: "1rem", color: "var(--color-text)" }}>
              <MessageSquare size={40} />
            </div>
            <h3 style={{ fontSize: "clamp(1rem, 3vw, 2rem)", marginBottom: "1rem", color: "var(--color-bg)" }}>02_REBUTTAL</h3>
            <p style={{ color: "var(--color-bg)", fontWeight: 600, fontSize: "clamp(0.6rem, 1vw, 1rem)" }}>Engage in structured, timed back-and-forth. Our algorithm ensures equal speaking time and fair play.</p>
          </div>

          <div className="engine-card" style={{ flex: "1 1 0", border: "4px solid var(--color-text)", padding: "clamp(0.5rem, 2vw, 2rem)", backgroundColor: "var(--color-text)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "clamp(3px, 1vw, 10px) calc(clamp(3px, 1vw, 10px) * -1) 0px var(--color-accent)", marginTop: "clamp(2rem, 8vw, 8rem)" }}>
            <div style={{ padding: "1rem", backgroundColor: "var(--color-bg)", borderRadius: "10px", marginBottom: "1rem", color: "var(--color-text)" }}>
              <Award size={40} />
            </div>
            <h3 style={{ fontSize: "clamp(1rem, 3vw, 2rem)", marginBottom: "1rem", color: "var(--color-bg)" }}>03_VOTE</h3>
            <p style={{ color: "var(--color-bg)", fontWeight: 600, fontSize: "clamp(0.6rem, 1vw, 1rem)" }}>The audience decides. Live polling and sentiment analysis determine the most persuasive argument.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
