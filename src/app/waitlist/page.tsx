"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, User, Mail } from "lucide-react";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <main style={{ 
      backgroundColor: "var(--color-bg)", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "4rem 0.5rem",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Decorative Elements */}
      <motion.div 
        className="mobile-hide"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.1, scale: 1, rotate: -15 }}
        transition={{ duration: 1.5 }}
        style={{ 
          position: "absolute", 
          top: "10%", 
          right: "-5%", 
          zIndex: 0, 
          color: "var(--color-primary)",
          pointerEvents: "none"
        }}
      >
        <h1 style={{ fontSize: "20rem", margin: 0 }}>WAIT</h1>
      </motion.div>

      <motion.div 
        className="mobile-hide"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 0.1, scale: 1, rotate: 10 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ 
          position: "absolute", 
          bottom: "5%", 
          left: "-5%", 
          zIndex: 0, 
          color: "var(--color-accent)",
          pointerEvents: "none"
        }}
      >
        <h1 style={{ fontSize: "20rem", margin: 0 }}>LIST</h1>
      </motion.div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "650px", margin: "0 auto", width: "100%" }}
        >
          <Link href="/" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            color: "var(--color-text)", 
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            fontWeight: 900,
            fontSize: "0.75rem",
            letterSpacing: "1px"
          }} className="mono hover-lift">
            <ArrowLeft size={14} /> Back to the House
          </Link>

          <div className="game-card" style={{ 
            padding: "clamp(1.5rem, 6vw, 5rem)", 
            backgroundColor: "var(--color-surface)",
            border: "4px solid var(--color-text)",
            boxShadow: "12px 12px 0px var(--color-primary)",
            margin: "15px auto",
            width: "100%"
          }}>
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div style={{ 
                    marginBottom: "clamp(3rem, 10vw, 5rem)", 
                    textAlign: "center",
                    marginInline: "calc(-1 * clamp(0.5rem, 3vw, 2rem))"
                  }}>
                    <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)", lineHeight: 1, marginBottom: "2rem"}}>RESERVE YOUR SEAT</h2>
                    <p className="mono" style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)", opacity: 0.6, maxWidth: "550px", margin: "0 auto", lineHeight: 1.5 }}>
                      Entries are processed in the order they are received. Parliamentary decorum is expected at all times.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "clamp(1.5rem, 5vw, 2.5rem)", 
                    maxWidth: "500px", 
                    margin: "0 auto" 
                  }}>
                    <div style={{ position: "relative" }}>
                      <label className="mono" style={{ display: "block", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "0.8rem", color: "var(--color-accent)", letterSpacing: "1px" }}>
                        Member Name
                      </label>
                      <div style={{ position: "relative" }}>
                        <User size={16} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", opacity: 0.3, color: "var(--color-accent)" }} />
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{ 
                            width: "100%", 
                            padding: "1.2rem 1.2rem 1.2rem 3.2rem", 
                            backgroundColor: "rgba(0,0,0,0.3)", 
                            border: "2px solid var(--color-text)", 
                            color: "var(--color-text)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.9rem",
                            outline: "none",
                            transition: "all 0.2s ease"
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <label className="mono" style={{ display: "block", fontSize: "0.65rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "0.8rem", color: "var(--color-secondary)", letterSpacing: "1px" }}>
                        Digital Post (Email)
                      </label>
                      <div style={{ position: "relative" }}>
                        <Mail size={16} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", opacity: 0.3, color: "var(--color-secondary)" }} />
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ 
                            width: "100%", 
                            padding: "1.2rem 1.2rem 1.2rem 3.2rem", 
                            backgroundColor: "rgba(0,0,0,0.3)", 
                            border: "2px solid var(--color-text)", 
                            color: "var(--color-text)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.9rem",
                            outline: "none",
                            transition: "all 0.2s ease"
                          }}
                        />
                      </div>
                    </div>

                    <motion.button
                      disabled={status === "submitting"}
                      whileHover={{ scale: 1.02, backgroundColor: "var(--color-text)", color: "var(--color-bg)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      style={{ 
                        marginTop: "1.5rem",
                        padding: "1.3rem", 
                        backgroundColor: "var(--color-primary)", 
                        color: "var(--color-bg)", 
                        fontWeight: 900, 
                        fontSize: "1rem", 
                        textTransform: "uppercase",
                        border: "none",
                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.75rem",
                        boxShadow: "6px 6px 0px var(--color-text)"
                      }}
                    >
                      {status === "submitting" ? "Processing..." : <>Enroll for Waitlist <Send size={18} /></>}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "4rem 0" }}
                >
                  <div style={{ marginBottom: "2rem", color: "var(--color-success)" }}>
                    <CheckCircle size={100} strokeWidth={1.5} />
                  </div>
                  <h2 style={{ 
                    fontSize: "clamp(2rem, 5vw, 4rem)", 
                    marginBottom: "1.5rem",
                    marginInline: "calc(-1 * clamp(0.5rem, 3vw, 2rem))"
                  }}>ORDER RECEIVED</h2>
                  <p className="mono" style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)", opacity: 0.8, marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
                    Your petition for enrollment has been filed. We will contact you at <strong>{formData.email}</strong> when a seat becomes available.
                  </p>
                  <Link href="/" className="game-card" style={{ 
                    display: "inline-block",
                    padding: "1rem 2.5rem", 
                    backgroundColor: "var(--color-text)", 
                    color: "var(--color-bg)", 
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "1.1rem"
                  }}>
                    Return to Lobby
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* <div style={{ marginTop: "4rem", opacity: 0.4, textAlign: "center" }} className="mono">
        <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px" }}>
          Debattle Waitlist System v1.0 • All Rights Reserved
        </p>
      </div> */}
    </main>
  );
}
