import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, TrendingUp, ShieldCheck } from "lucide-react";

const LEADERS = [
  { rank: 1, name: "Chancellor_Ames", winRate: "92%", xp: "12,450", level: "Speaker of the House", color: "var(--color-accent)" },
  { rank: 2, name: "Minister_Vane", winRate: "88%", xp: "10,200", level: "Prime Minister", color: "var(--color-primary)" },
  { rank: 3, name: "Orator_Brooks", winRate: "85%", xp: "9,800", level: "Senior Member", color: "var(--color-secondary)" },
  { rank: 4, name: "Member_Sterling", winRate: "82%", xp: "8,500", level: "Junior Member", color: "var(--color-text)" },
  { rank: 5, name: "Council_Rhodes", winRate: "79%", xp: "7,200", level: "Apprentice", color: "var(--color-text)" },
];

export default function Leaderboard() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const doodleX = useTransform(scrollYProgress, [0, 1], [-80, 70]);

  return (
    <section id="leaderboard" ref={sectionRef} style={{ padding: "var(--spacing-xl) 0", backgroundColor: "transparent", borderTop: "var(--border-weight) solid var(--color-text)", position: "relative", overflow: "hidden" }}>
      {/* Background Doodle */}
      <motion.div 
        className="mobile-hide" 
        style={{ 
          position: "absolute", 
          bottom: "2%", 
          left: "50%", 
          x: "-50%",
          translateX: doodleX,
          zIndex: 0, 
          opacity: 0.05, 
          pointerEvents: "none", 
          whiteSpace: "nowrap", 
          rotate: "-10deg", 
          color: "var(--color-accent)" 
        }}
      >
        <h1 style={{ fontSize: "25rem", margin: 0, lineHeight: 0.8 }}>MERIT</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="badge" style={{ marginBottom: "1rem" }}>The Order of Merit</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>Distinguished Orators</h2>
          <p className="mono" style={{ opacity: 0.7 }}>The world's most persuasive minds, ranked by their division record and reputation.</p>
        </div>

        <div className="game-card" style={{ padding: "0", overflowX: "auto", backgroundColor: "var(--color-bg)" }}>
          <div style={{ minWidth: "800px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr", padding: "1.5rem", borderBottom: "2px solid var(--color-text)", backgroundColor: "var(--color-bg)", fontWeight: 900, textTransform: "uppercase", fontSize: "0.8rem" }} className="mono">
              <span>Precedence</span>
              <span>Member</span>
              <span>Division Record</span>
              <span>Reputation</span>
              <span>Title</span>
            </div>

            {LEADERS.map((leader, i) => (
              <motion.div 
                key={leader.name}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr", 
                  padding: "1.5rem", 
                  borderBottom: i === LEADERS.length - 1 ? "none" : "1px solid rgba(235, 219, 178, 0.1)",
                  alignItems: "center",
                  transition: "background-color 0.2s"
                }}
                whileHover={{ backgroundColor: "rgba(235, 219, 178, 0.05)" }}
              >
                <span className="mono" style={{ fontSize: "1.2rem", fontWeight: 900, color: leader.rank <= 3 ? leader.color : "inherit" }}>
                  #{leader.rank}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: leader.color, border: "2px solid var(--color-text)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-bg)" }}>
                    {leader.rank === 1 ? <Award size={20} /> : <ShieldCheck size={20} />}
                  </div>
                  <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>{leader.name}</span>
                </div>
                <span className="mono" style={{ color: "var(--color-success)" }}>{leader.winRate}</span>
                <span className="mono">{leader.xp}</span>
                <div className="badge" style={{ fontSize: "0.6rem", borderColor: leader.color, color: leader.color, width: "fit-content" }}>
                  {leader.level}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            style={{ padding: "1rem 2rem", backgroundColor: "var(--color-accent)", color: "var(--color-bg)", border: "var(--border-weight) solid var(--color-text)", boxShadow: "4px 4px 0px var(--color-text)", fontWeight: 900, textTransform: "uppercase", cursor: "pointer" }}
          >
            View the Hansard
          </motion.button>
        </div>
      </div>
    </section>
  );
}
