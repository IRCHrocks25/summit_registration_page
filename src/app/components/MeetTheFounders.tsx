import alessiaImg from "figma:asset/d68d5c917f61cd5903d44082807d0afc1bfaa1a6.png";
import kaneImg from "figma:asset/371862ffbfbd58ef5a0a2eac211c4b2d555631ff.png";

const kaneHighlights = [
  "Tony Robbins' Business Mastery Faculty",
  "Advisor to Richard Branson",
  "Advisor to Robert Kiyosaki",
  "Silicon Valley Technology Trainer",
];

const alessiaHighlights = [
  "9 Companies Founded & Scaled",
  "$180M+ Total Revenue Generated",
  "Thousands of Female Founders Mentored",
  "7 & 8-Figure Business Strategist",
];

export function MeetTheFounders() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0B1D3A 0%, #071228 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(214,51,132,0.12) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">

        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.35)",
              color: "#D63384",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ YOUR SUMMIT HOSTS
          </div>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              maxWidth: "800px",
              margin: "0 auto 20px",
            }}
          >
            Meet The World Renowned, Silicon Valley, Technology Trainers of the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Unleashed Summit
            </span>
          </h2>

        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">

          {/* Kane */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: "transparent",
              border: "none",
            }}
          >
            {/* Photo — full natural image, 80% width centred */}
            <div className="relative flex justify-center" style={{ background: "transparent" }}>
              <img
                src={kaneImg}
                alt="Kane Minkus"
                style={{ width: "80%", height: "auto", display: "block" }}
              />
              {/* Name overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(7,18,40,0.88) 0%, transparent 100%)",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Kane Minkus
                </h3>
                <div
                  className="flex items-center gap-2 mt-2"
                  style={{ color: "#D63384", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#D63384">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  CO-FOUNDER & AI VISIONARY
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
                Kane is renowned as one of the best business coaches in the world, having assisted entrepreneurs and investors in nearly every industry and niche. Kane's extensive knowledge and obsession with transformational technology & AI have led him to dedicate his time to{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                  researching new AI solutions before they become widely known.
                </strong>
              </p>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
                His commitment to AI has made him a sought-after faculty member for{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>Tony Robbins' Business Mastery</strong>{" "}
                events, Richard Branson, Robert Kiyosaki, and dozens of other influential world leaders.
              </p>

              {/* Highlights */}
              <div
                className="mt-auto pt-5 grid grid-cols-1 gap-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                {kaneHighlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #D63384, #F272B6)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alessia */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: "transparent",
              border: "none",
            }}
          >
            {/* Photo — full natural image, 80% width centred */}
            <div className="relative flex justify-center" style={{ background: "transparent" }}>
              <img
                src={alessiaImg}
                alt="Alessia Minkus"
                style={{ width: "80%", height: "auto", display: "block" }}
              />
              {/* Name overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(7,18,40,0.88) 0%, transparent 100%)",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Alessia Minkus
                </h3>
                <div
                  className="flex items-center gap-2 mt-2"
                  style={{ color: "#D63384", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#D63384">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  CO-FOUNDER & ENTREPRENEUR COACH
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
                Alessia is one of the most experienced entrepreneur coaches in the world, having personally advised{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                  thousands of female founders
                </strong>
                , setting them up with seven and eight-figure strategies.
              </p>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
                She is also a serial entrepreneur herself, having personally started and scaled up{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>nine companies generating over $180M in revenue.</strong>{" "}
                Through two decades of building businesses, she has a mission to create a world where female founders have the AI tools to make a global impact.
              </p>

              {/* Stat callout */}
              <div
                className="rounded-xl px-5 py-4 flex items-center gap-4"
                style={{
                  background: "linear-gradient(100deg, rgba(214,51,132,0.1), rgba(214,51,132,0.05))",
                  border: "1px solid rgba(214,51,132,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#F272B6",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  $180M+
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                  Total revenue generated across 9 personally founded & scaled companies
                </div>
              </div>

              {/* Highlights */}
              <div
                className="mt-auto pt-5 grid grid-cols-1 gap-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                {alessiaHighlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #D63384, #F272B6)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-16">
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "white",
              lineHeight: 1.7,
            }}
          >
            Ready to learn directly from the world's #1 business mentors?
          </p>
          <button
            className="mt-6 px-10 py-4 rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #D63384 0%, #F272B6 100%)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 10px 40px rgba(214,51,132,0.35)",
            }}
          >
            CLAIM YOUR FREE SEAT →
          </button>
        </div>
      </div>
    </section>
  );
}