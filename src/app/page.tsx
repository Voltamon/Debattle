"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import DebateEngine from "../components/DebateEngine";
import AboutUs from "../components/AboutUs";
import CTA from "@/components/CTA";
// import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main style={{ backgroundColor: "#1d2021", minHeight: "100vh" }}>
      <Hero />
      
      <DebateEngine />
      
      {/* <Leaderboard /> */}

      <AboutUs />
      
      <CTA />

      <footer style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "var(--color-text)", padding: "2rem 0", borderTop: "var(--border-weight) solid var(--color-text)" }}>
        <div className="container">
          <div className="grid">
            <div style={{ gridColumn: "1 / span 12", textAlign: "center", marginBottom: "2rem" }} className="desktop-grid-adjust">
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>DEBATTLE<span style={{ color: "var(--color-primary)" }}>.</span></h2>
              <p className="mono" style={{ fontSize: "0.8rem", opacity: 0.6, maxWidth: "600px", margin: "0 auto" }}>
                The world's premier platform for competitive rhetoric and structured parliamentary discourse.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", marginBottom: "2rem" }} className="mono">
            <div>
              <h4 style={{ marginBottom: "1rem", color: "var(--color-accent)" }}>Platform</h4>
              <ul style={{ listStyle: "none", fontSize: "0.75rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><a href="#arena">The House</a></li>
                <li><a href="#leaderboard">Merit</a></li>
                <li><a href="#about">Constitution</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: "1rem", color: "var(--color-primary)" }}>Social</h4>
              <ul style={{ listStyle: "none", fontSize: "0.75rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><a href="#">Twitter/X</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: "1rem", color: "var(--color-secondary)" }}>Legal</h4>
              <ul style={{ listStyle: "none", fontSize: "0.75rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><a href="#">Standing Orders</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(235, 219, 178, 0.1)", textAlign: "center" }}>
            <p className="mono" style={{ fontSize: "0.7rem", opacity: 0.4 }}>
              © {new Date().getFullYear()} DEBATTLE. ELEVATING PUBLIC DISCOURSE.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
