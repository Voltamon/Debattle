"use client";
import { motion } from "framer-motion";
import { Zap, Trophy, Users, PlayCircle } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="container"
      style={{
        position: "fixed",
        top: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        pointerEvents: "none"
      }}
    >
      <div 
        style={{
          backgroundColor: "var(--color-bg)",
          border: "var(--border-weight) solid var(--color-text)",
          boxShadow: "var(--shadow-offset) var(--shadow-offset) 0px var(--color-text)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1.5rem",
          pointerEvents: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontWeight: 900, fontSize: "1.5rem", letterSpacing: "-1px", fontFamily: "var(--font-display)" }}>
              DEBATTLE<span style={{ color: "var(--color-primary)" }}>.</span>
            </span>
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <nav style={{ display: "flex", gap: "1.5rem" }} className="mono">
            <NavLink icon={<Zap size={14} />} label="Sessions" href="#arena" />
            <NavLink icon={<Trophy size={14} />} label="Merit" href="#leaderboard" />
            <NavLink icon={<Users size={14} />} label="Orators" href="#about" />
          </nav>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg)",
              border: "2px solid var(--color-text)",
              padding: "0.5rem 1rem",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer"
            }}
          >
            <PlayCircle size={16} />
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ color: "var(--color-primary)" }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.85rem",
        fontWeight: 700,
        textTransform: "uppercase",
        transition: "color 0.2s"
      }}
    >
      {icon}
      <span className="mobile-hide">{label}</span>
    </motion.a>
  );
}
