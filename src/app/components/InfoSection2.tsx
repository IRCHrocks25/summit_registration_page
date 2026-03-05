import { ArrowRight } from "lucide-react";

const transformations = [
  {
    before: "Charging hourly with an income ceiling",
    after: "Selling high-ticket $15K–$50K project packages",
  },
  {
    before: "Competing on price with hundreds of freelancers",
    after: "Commanding premium fees as a certified AI specialist",
  },
  {
    before: "Working 60+ hours a week to hit your income goals",
    after: "Working with fewer, better clients at 3–5x your current rate",
  },
  {
    before: "Feeling anxious about AI making your skills obsolete",
    after: "Becoming the go-to expert businesses desperately need",
  },
  {
    before: "Building someone else's dream on their schedule",
    after: "Running your own consulting practice on your own terms",
  },
];

export function InfoSection2() {
  return (
    <section
      className="py-20 px-4"
      style={{ background: "#FAF6EF", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(201,149,42,0.1)",
              border: "1px solid rgba(201,149,42,0.3)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              fontWeight: 600,
              color: "#C9952A",
            }}
          >
            ✦ YOUR NEW REALITY AFTER THIS SUMMIT
          </div>
          <h2
            className="mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.25,
              maxWidth: 700,
            }}
          >
            Imagine Where You Could Be{" "}
            <span style={{ color: "#C9952A", fontStyle: "italic" }}>
              90 Days From Now
            </span>
          </h2>
          <p
            className="mt-3 mx-auto"
            style={{
              fontSize: "1rem",
              color: "#6b6b82",
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            This isn't about learning technology. It's about strategically
            repositioning your expertise to capture one of the biggest
            professional opportunities of our generation.
          </p>
        </div>

        {/* Before / After table */}
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(11,29,58,0.1)" }}>
          {/* Headers */}
          <div className="grid grid-cols-2">
            <div
              className="py-4 text-center"
              style={{ background: "#e8e0d5" }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  color: "#888",
                  textTransform: "uppercase",
                }}
              >
                Where You Are Now
              </span>
            </div>
            <div
              className="py-4 text-center"
              style={{
                background: "linear-gradient(90deg, #C9952A, #D4A843)",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  color: "#0B1D3A",
                  textTransform: "uppercase",
                }}
              >
                Where You'll Be After ✓
              </span>
            </div>
          </div>

          {/* Rows */}
          {transformations.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-2"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.06)",
                background: i % 2 === 0 ? "white" : "#FEFCF8",
              }}
            >
              <div
                className="p-5 flex items-center gap-3"
                style={{ borderRight: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#f0e8e0" }}
                >
                  <span style={{ fontSize: "0.65rem", color: "#aaa" }}>✗</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#888", lineHeight: 1.5 }}>
                  {t.before}
                </p>
              </div>
              <div className="p-5 flex items-center gap-3">
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,149,42,0.15)" }}
                >
                  <span style={{ fontSize: "0.65rem", color: "#C9952A" }}>✓</span>
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#0B1D3A",
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  {t.after}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-10">
          <p
            className="mb-5"
            style={{ fontSize: "1rem", color: "#6b6b82", lineHeight: 1.7 }}
          >
            This transformation is available to you — and it starts with a
            single decision.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl hover:scale-105 transition-transform"
            style={{
              background: "linear-gradient(135deg, #C9952A, #E8C060)",
              color: "#0B1D3A",
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 8px 30px rgba(201,149,42,0.35)",
              letterSpacing: "0.03em",
            }}
          >
            CLAIM MY FREE SEAT NOW <ArrowRight size={18} />
          </button>
          <p
            className="mt-3"
            style={{ fontSize: "0.78rem", color: "#aaa" }}
          >
            Free registration · Limited seats available
          </p>
        </div>
      </div>
    </section>
  );
}
