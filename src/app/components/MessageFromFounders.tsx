import founderImage from "figma:asset/f7001681e551729a1034ae3aea466fe552e98c50.png";

export function MessageFromFounders() {
  return (
    <section
      style={{
        background: "#EEF2FF",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.08) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Eyebrow — full width above the grid */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.32)",
              color: "#A01F6A",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ A MESSAGE FROM KANE &amp; ALESSIA
          </div>

          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.22,
              letterSpacing: "-0.025em",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Why Are We Sharing This Training With You for{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FREE?
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — image */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 30px 80px rgba(11,29,58,0.18), 0 0 0 1.5px rgba(214,51,132,0.2)",
                position: "relative",
              }}
            >
              <img
                src={founderImage}
                alt="Kane & Alessia Minkus on stage"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Pink gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%",
                  background: "linear-gradient(0deg, rgba(11,29,58,0.65) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Caption badge */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3"
              >
                <div
                  className="px-4 py-2.5 rounded-xl"
                  style={{
                    background: "rgba(11,29,58,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(214,51,132,0.3)",
                  }}
                >
                  <p style={{ color: "#F272B6", fontSize: "0.65rem", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 2 }}>
                    KANE &amp; ALESSIA MINKUS
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", fontWeight: 600 }}>
                    World's #1 Business Mentors — Live on Stage
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-6 rounded-2xl px-5 py-4 hidden sm:block"
              style={{
                background: "linear-gradient(135deg, #D63384, #A01F6A)",
                boxShadow: "0 12px 40px rgba(214,51,132,0.4)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.62rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 4 }}>
                TRAINED WORLDWIDE
              </p>
              <p style={{ color: "white", fontSize: "1.7rem", fontWeight: 800, lineHeight: 1 }}>300K+</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", marginTop: 2 }}>Professionals this year</p>
            </div>
          </div>

          {/* Right — letter */}
          <div className="flex flex-col gap-6">
            {/* Letter card */}
            <div
              className="rounded-2xl px-7 sm:px-9 py-9 space-y-5"
              style={{
                background: "white",
                border: "1.5px solid rgba(214,51,132,0.13)",
                boxShadow: "0 4px 40px rgba(11,29,58,0.06)",
              }}
            >
              {[
                "Because we understand how frustrating it can be to picture the business (and lifestyle) you crave but be stuck doing everything yourself, feeling exhausted and unable to live the life you want.",
                "When we first started our very first companies at 19 years old, we sought the help of great mentors, which made a massive difference in helping us leap into a world of success beyond our wildest imagination.",
                "Like you, we had an ambitious vision of where we wanted to go but lacked the knowledge and resources to turn our dreams into reality. As entrepreneurs who have used AI to build over forty multi-million dollar businesses of our own, and having taught over 300,000 professionals this year alone on how to use AI, we know these AI tools and strategies work.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "1rem", color: "#3d3d56", lineHeight: 1.85 }}>
                  {para}
                </p>
              ))}

              {/* Highlighted callout */}
              <div
                className="rounded-xl px-6 py-5"
                style={{
                  background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
                  border: "1px solid rgba(214,51,132,0.25)",
                }}
              >
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.85 }}>
                  The truth is that AI has the potential to transform your business if you know{" "}
                  <strong
                    style={{
                      background: "linear-gradient(90deg, #D63384, #FFADD6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    where, when and how to get started.
                  </strong>{" "}
                  The only obstacle for 1000s of hardworking business owners like you is a lack of knowledge… and we want to change that.
                </p>
              </div>

              <p style={{ fontSize: "1rem", color: "#3d3d56", lineHeight: 1.85 }}>
                This is your invitation to unleash the power of AI in your business and finally wake up to the business success you're capable of.
              </p>

              {/* Signature */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(214,51,132,0.1)" }}
              >
                <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0B1D3A" }}>
                  — Kane &amp; Alessia Minkus
                </p>
                <p style={{ fontSize: "0.8rem", color: "#A01F6A", marginTop: 2, letterSpacing: "0.04em", fontWeight: 600 }}>
                  World's #1 Business Mentors · 3M+ Professionals Trained
                </p>
              </div>
            </div>

            {/* CTA block */}
            <div className="text-center">
              <button
                className="cta-btn px-12 py-4 block mx-auto mb-3"
                style={{
                  fontSize: "0.92rem",
                }}
              >
                REGISTER FREE NOW!
              </button>
              <p style={{ fontSize: "0.82rem", color: "#A01F6A", fontWeight: 600, letterSpacing: "0.04em" }}>
                Claim your FREE ticket for a limited time
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}