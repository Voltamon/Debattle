"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Timer, TrendingUp } from "lucide-react";

const MATCHES = [
  {
    id: 1,
    topic: "This House believes that AI development should be paused indefinitely.",
    p1: { name: "Chancellor_X", avatar: "/images/avatar_1.png", votes: 450 },
    p2: { name: "Opposition_Y", avatar: "/images/avatar_2.png", votes: 380 },
    status: "IN SESSION",
    timeLeft: "04:22"
  },
  {
    id: 2,
    topic: "This House would implement a universal basic income.",
    p1: { name: "Member_Prime", avatar: "/images/avatar_2.png", votes: 1200 },
    p2: { name: "Shadow_Minister", avatar: "/images/avatar_1.png", votes: 1150 },
    status: "DIVISION",
    timeLeft: "12:45"
  }
];

export default function Arena() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const doodleX = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section id="arena" ref={sectionRef} style={{ padding: "var(--spacing-xl) 0", backgroundColor: "transparent", position: "relative", overflow: "hidden" }}>
      {/* Background Doodle */}
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          top: "10%", 
          left: "-10%", 
          zIndex: 0, 
          opacity: 0.05, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "10deg", 
          color: "var(--color-accent)",
          x: doodleX
        }}
      >
        <h1 style={{ fontSize: "25rem", margin: 0, lineHeight: 0.8 }}>HOUSE</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <div className="badge badge-live" style={{ marginBottom: "1rem" }}>The House</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>Current Sessions</h2>
          </div>
          <div className="mobile-hide" style={{ textAlign: "right" }}>
            <p className="mono" style={{ opacity: 0.6, fontSize: "0.8rem" }}>OPEN_SESSIONS: 02</p>
            <p className="mono" style={{ opacity: 0.6, fontSize: "0.8rem" }}>TOTAL_MEMBERS: 12.4K</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {MATCHES.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchCard({ match }: { match: typeof MATCHES[0] }) {
  const totalVotes = match.p1.votes + match.p2.votes;
  const p1Percent = (match.p1.votes / totalVotes) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="game-card"
      style={{ padding: "1.5rem", backgroundColor: "#ebdbb2", color: "#1d2021", border: "4px solid #1d2021", boxShadow: "8px 8px 0px #3c3836" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div className="badge" style={{ borderColor: "#1d2021", color: "#1d2021", fontWeight: 900 }}>
          {match.status === "IN SESSION" ? <Timer size={12} /> : <TrendingUp size={12} />}
          {match.status} {match.timeLeft}
        </div>
        <div className="mono" style={{ fontSize: "0.7rem", opacity: 0.7, color: "#1d2021", fontWeight: 700 }}>#SESSION_{match.id.toString().padStart(3, '0')}</div>
      </div>

      <h3 style={{ fontSize: "1.25rem", marginBottom: "2rem", height: "4.5rem", overflow: "hidden", lineHeight: 1.2, fontWeight: 900 }}>{match.topic}</h3>

      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        {/* VS Divider */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 2, backgroundColor: "#1d2021", color: "#ebdbb2", padding: "0.25rem 0.5rem", fontWeight: 900, fontSize: "0.8rem", border: "2px solid #ebdbb2" }}>
          VS
        </div>

        <div style={{ textAlign: "center", flex: 1 }}>
          <img src={match.p1.avatar} alt={match.p1.name} style={{ width: 80, height: 80, borderRadius: "50%", border: "4px solid var(--color-primary)", margin: "0 auto 0.5rem" }} />
          <div className="mono" style={{ fontSize: "0.8rem", fontWeight: 900 }}>{match.p1.name}</div>
        </div>

        <div style={{ textAlign: "center", flex: 1 }}>
          <img src={match.p2.avatar} alt={match.p2.name} style={{ width: 80, height: 80, borderRadius: "50%", border: "4px solid var(--color-secondary)", margin: "0 auto 0.5rem" }} />
          <div className="mono" style={{ fontSize: "0.8rem", fontWeight: 900 }}>{match.p2.name}</div>
        </div>
      </div>

      {/* Vote Bar */}
      <div style={{ height: 16, backgroundColor: "transparent", border: "3px solid #1d2021", position: "relative", marginBottom: "1rem" }}>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${p1Percent}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ height: "100%", backgroundColor: "var(--color-primary)" }} 
        />
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }} className="mono">
        <span style={{ color: "var(--color-primary)", fontWeight: 900 }}>{match.p1.votes} AYES</span>
        <span style={{ color: "var(--color-secondary)", fontWeight: 900 }}>{match.p2.votes} NOES</span>
      </div>

      <motion.button
        whileHover={{ backgroundColor: "#1d2021", color: "#ebdbb2", scale: 1.02 }}
        style={{ width: "100%", marginTop: "1.5rem", padding: "0.75rem", backgroundColor: "transparent", border: "3px solid #1d2021", color: "#1d2021", fontWeight: 900, textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
      >
        Audit Session
      </motion.button>
    </motion.div>
  );
}
