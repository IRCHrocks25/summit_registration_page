const topics = [
  "The Secret AI Tools To Build a WORLD-CLASS Brand In No Time",
  "3 INCREDIBLE Ways You Can Make 7-Figures a Year With AI right now",
  "Create Mind Blowing Content in 1 Hour That Normally Takes Weeks.",
  "How to Easily Open up New Markets From Your Home Office.",
  "Using AI Tools to Write Books, Blogs and Copy (Ethically and Quickly)",
  "Generate Irresistible Hooks and Offers With AI (Like a Pro Copywriter)",
  "How to Make Money Helping Others Implement AI (Become an AI consultant!)",
  "How to use AI tools Ethically and as a force for Good in the world!",
];

export function ExclusiveTopics() {
  return (
    <section
      style={{
        background: "#EEF2FF",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{
              background: "rgba(214,51,132,0.12)",
              border: "1px solid rgba(214,51,132,0.35)",
              color: "#A01F6A",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              fontWeight: 700,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#A01F6A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            EXCLUSIVE ACCESS
          </div>
        </div>

        {/* Headline */}
        <h2
          className="text-center mb-14"
          style={{
            fontSize: "clamp(1.7rem, 3.5vw, 2.7rem)",
            fontWeight: 800,
            color: "#0B1D3A",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}
        >
          Plus, You'll Get Exclusive and{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #D63384, #A01F6A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            In-Depth Access
          </span>{" "}
          To Topics Including:
        </h2>

        {/* Topics list */}
        <div className="flex flex-col gap-4 mb-16">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl px-6 py-5 group transition-all hover:-translate-y-0.5"
              style={{
                background: "white",
                border: "1.5px solid rgba(214,51,132,0.15)",
                boxShadow: "0 2px 16px rgba(11,29,58,0.05)",
              }}
            >
              {/* Pink checkmark */}
              <div
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #D63384, #F272B6)",
                  boxShadow: "0 3px 10px rgba(214,51,132,0.3)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#1a2a44",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {topic}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="rounded-2xl px-8 py-10 text-center"
          style={{
            background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
            border: "1.5px solid rgba(214,51,132,0.25)",
            boxShadow: "0 20px 60px rgba(11,29,58,0.15)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            …And, To Ensure This 1-Day Summit Offers Insights and Strategies{" "}
            <strong style={{ color: "white" }}>You Won't Find ANYWHERE Else</strong>,
            You'll Be Learning From{" "}
            <strong
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              One-Of-A-Kind Experts.
            </strong>
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "linear-gradient(90deg, transparent, rgba(214,51,132,0.5))",
              }}
            />
            <p
              style={{
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.06em",
                fontStyle: "italic",
              }}
            >
              Scroll on to meet your mentors!
            </p>
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "linear-gradient(90deg, rgba(214,51,132,0.5), transparent)",
              }}
            />
          </div>

          <div className="flex justify-center mt-5">
            <div className="flex flex-col items-center gap-1" style={{ opacity: 0.4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D63384" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D63384" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "-10px" }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
