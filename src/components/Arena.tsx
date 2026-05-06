"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Timer, TrendingUp } from "lucide-react";

const MATCHES = [
  {
    id: 1,
    topic: "Should direct democracy replace the current representative parliamentary model?",
    p1: { name: "Advocate_Jae", votes: 423, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jae" },
    p2: { name: "Traditionalist_Vane", votes: 312, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vane" },
    status: "IN SESSION",
    timeLeft: "04:22:12"
  },
  {
    id: 2,
    topic: "The abolition of hereditary peerages in the Upper Chamber: A necessary modernization?",
    p1: { name: "Reformer_Zane", votes: 892, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zane" },
    p2: { name: "Lord_Sterling", votes: 745, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sterling" },
    status: "VOTING OPEN",
    timeLeft: "01:12:05"
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
    <section id="arena" ref={sectionRef} style={{ padding: "var(--spacing-xl) 0", backgroundColor: "transparent", position: "relative", overflow: "hidden", borderTop: "var(--border-weight) solid var(--color-text)" }}>
      {/* Background Doodle */}
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          top: "10%", 
          left: "-5%", 
          zIndex: 0, 
          opacity: 0.15, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "-10deg", 
          color: "var(--color-primary)",
          x: doodleX
        }}
      >
        <h1 style={{ fontSize: "25rem", margin: 0, lineHeight: 0.8 }}>HOUSE</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="badge" style={{ marginBottom: "1rem", "--badge-fill": "var(--color-primary)" } as any}>The Chamber</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>Live Divisions</h2>
          <p className="mono" style={{ fontSize: "1rem", opacity: 0.6, maxWidth: "600px", margin: "1rem auto 0" }}>Real-time asynchronous debates currently in progress. Audit the logic and record your vote.</p>
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

function MatchCard({ match }: { match: any }) {
  const p1Percent = (match.p1.votes / (match.p1.votes + match.p2.votes)) * 100;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="game-card"
      style={{ padding: "1.5rem", backgroundColor: "#ebdbb2", color: "#1d2021", border: "4px solid #1d2021", boxShadow: "8px 8px 0px #3c3836" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div className="badge" style={{ "--badge-fill": "var(--color-primary)" } as any}>
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
