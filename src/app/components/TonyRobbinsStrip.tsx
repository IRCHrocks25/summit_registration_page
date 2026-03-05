export function TonyRobbinsStrip() {
  return (
    <section
      style={{
        background: "linear-gradient(100deg, #080E1E 0%, #0F1E3A 50%, #080E1E 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(214,51,132,0.15)",
        borderBottom: "1px solid rgba(214,51,132,0.15)",
      }}
    >
      {/* Pink top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #D63384 30%, #F272B6 50%, #D63384 70%, transparent)",
        }}
      />
      {/* Pink bottom line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #D63384 30%, #F272B6 50%, #D63384 70%, transparent)",
        }}
      />

      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-14 md:py-16 relative">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* Avatar */}
          <div className="shrink-0 flex flex-col items-center gap-3">
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: "110px",
                height: "110px",
                border: "3px solid #D63384",
                boxShadow: "0 0 0 6px rgba(214,51,132,0.12), 0 12px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1a2f58, #0B1D3A)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#F272B6",
                  letterSpacing: "-0.03em",
                }}
              >
                TR
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#D63384">
                  <path d="M10 1l2.39 5.26L18 7.27l-4 3.9.94 5.5L10 14.27l-4.94 2.4.94-5.5-4-3.9 5.61-.01z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="flex-1 text-center md:text-left">
            <div
              style={{
                fontSize: "5rem",
                lineHeight: 0.7,
                color: "#D63384",
                opacity: 0.35,
                fontFamily: "Georgia, serif",
                marginBottom: "12px",
                display: "block",
              }}
              aria-hidden
            >
              &ldquo;
            </div>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.8,
                fontStyle: "italic",
                marginBottom: "20px",
              }}
            >
              Kane and Alessia crushed it on my stage at Business Mastery and{" "}
              <strong style={{ color: "white", fontStyle: "normal" }}>
                set the Audience on fire
              </strong>{" "}
              with how to use AI tech to launch and grow their businesses! We even asked
              them to make a{" "}
              <strong style={{ color: "white", fontStyle: "normal" }}>
                special product for our Business Mastery bundle!
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, #D63384, #F272B6)",
                  borderRadius: "2px",
                  flexShrink: 0,
                  marginTop: "10px",
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: 800,
                    color: "#F272B6",
                    fontSize: "1.05rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Tony Robbins
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  The World's Leading Transformational Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
