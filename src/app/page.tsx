import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import DebateEngine from "../components/DebateEngine";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <CTA />
      
      <footer style={{ backgroundColor: "var(--color-text)", color: "var(--color-bg)", padding: "2rem 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px" }}>
            © {new Date().getFullYear()} Debattle. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
