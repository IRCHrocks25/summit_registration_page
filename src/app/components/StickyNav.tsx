import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        background: "rgba(7, 15, 34, 0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,149,42,0.2)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "white",
            }}
          >
            AI Consultant Summit
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
            March 15–17, 2026 · Free Virtual Event
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(201,149,42,0.12)",
              border: "1px solid rgba(201,149,42,0.25)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#C9952A" }}
            />
            <span style={{ fontSize: "0.75rem", color: "#E8C060", fontWeight: 600 }}>
              847 seats left
            </span>
          </div>

          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl hover:scale-105 transition-transform"
            style={{
              background: "linear-gradient(135deg, #C9952A, #E8C060)",
              color: "#0B1D3A",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
            }}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          >
            Save My Seat <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
