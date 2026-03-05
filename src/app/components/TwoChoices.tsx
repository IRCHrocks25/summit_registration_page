import decisionBg from "figma:asset/b235cbe45040abbf4791fdb71709e2bae7d8d18e.png";

export function TwoChoices() {
  return (
    <section
      style={{
        background: "#0B1D3A",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${decisionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(11,29,58,0.7) 0%, rgba(11,29,58,0.55) 50%, rgba(11,29,58,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(214,51,132,0.12)",
              border: "1px solid rgba(214,51,132,0.32)",
              color: "#D63384",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ YOUR MOMENT OF DECISION
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "640px",
              margin: "0 auto 16px",
            }}
          >
            Are You Ready to Become a{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Future-Ready Entrepreneur?
            </span>
          </h2>

          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
            Right now, you have two choices…
          </p>
        </div>

        {/* Two options */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* Option 1 — Stay */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1.5px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                }}
              >
                <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 700 }}>1</span>
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.16em", fontWeight: 700, color: "white" }}>
                OPTION #1
              </span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Stay Where You Are
            </h3>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

            <p style={{ fontSize: "0.95rem", color: "white", lineHeight: 1.85 }}>
              Keep daydreaming about the future but stay stuck in your current reality. Everything remains the same — your revenue, your busy schedule, your endless responsibilities — with a ceiling on the life you could be living if you knew how to discover and use AI tools to create a seven or eight-figure business.
            </p>

            <div className="flex items-center gap-3 mt-auto pt-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(220,60,60,0.12)", border: "1px solid rgba(220,60,60,0.2)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(220,80,80,0.7)" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>
                Same results. Same ceiling.
              </span>
            </div>
          </div>

          {/* Option 2 — Future-Ready */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #1a3060 0%, #0f2245 100%)",
              border: "1.5px solid rgba(214,51,132,0.4)",
              boxShadow: "0 20px 60px rgba(214,51,132,0.12)",
            }}
          >
            {/* Corner glow */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "180px",
                height: "180px",
                background: "radial-gradient(circle, rgba(214,51,132,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #D63384, #F272B6)",
                  boxShadow: "0 4px 14px rgba(214,51,132,0.4)",
                }}
              >
                <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800 }}>2</span>
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.16em", fontWeight: 700, color: "#D63384" }}>
                OPTION #2
              </span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Become Future-Ready
            </h3>

            <div style={{ height: "1px", background: "rgba(214,51,132,0.2)" }} />

            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85 }}>
              Follow in the footsteps of thousands of entrepreneurs using Kane and Alessia's proven AI tools and knowledge to unlock hundreds of hours of free time and generate millions of dollars. With just one free Summit, you can finally see the proven roadmap to the business and life you want.
            </p>

            <div className="flex items-center gap-3 mt-auto pt-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #D63384, #F272B6)",
                  boxShadow: "0 3px 10px rgba(214,51,132,0.35)",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                Proven roadmap. Unlimited potential.
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="cta-btn px-12 py-4 inline-block mb-4"
            style={{
              fontSize: "0.92rem",
            }}
          >
            REGISTER FREE NOW →
          </button>
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(214,51,132,0.7)",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Claim your FREE ticket for a limited time
          </p>
        </div>

      </div>
    </section>
  );
}