import imgKane from "figma:asset/f85193f3c9694f7950bbebddad3c7904838c8f87.png";
import imgAlessia from "figma:asset/b6ebf600b3575babfcfd03375e9501ca658397b5.png";

const stats = [
  { value: "50,000+", label: "Business Owners\nTrained Monthly" },
  { value: "5M+",     label: "Professionals Impacted\nover 20 years" },
  { value: "5,500+",  label: "Online/In-Person\nPresentations in 80 Countries" },
  { value: "20+",     label: "Portfolio Companies\nServing Owners Globally" },
  { value: "30+",     label: "Company Portfolio\nValued at $500M" },
];

export function KaneAlessiaSection() {
  return (
    <section
      style={{
        background: "linear-gradient(170deg, #070F22 0%, #0B1D3A 55%, #070F22 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D63384' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "20%",
          width: "600px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content (constrained) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0"
          style={{ paddingTop: "80px" }}
        >
          {/* LEFT: text */}
          <div className="flex-1 flex flex-col gap-6 lg:pr-8 z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start"
              style={{
                background: "rgba(214,51,132,0.1)",
                border: "1px solid rgba(214,51,132,0.35)",
                color: "#F272B6",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                fontWeight: 700,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#F272B6">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              WORLD'S #1 BUSINESS MENTORS
            </div>

            {/* Name */}
            <h2
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Kane &amp; Alessia{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #D63384 0%, #FFADD6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontStyle: "italic",
                }}
              >
                Minkus
              </span>
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "white",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "480px",
              }}
            >
              Award-winning serial entrepreneurs, International bestselling authors, and{" "}
              <span style={{ color: "#F272B6", fontWeight: 600 }}>
                world-renowned business mentors.
              </span>
            </p>

            {/* Decorative divider */}
            <div
              style={{
                height: "2px",
                width: "60px",
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* RIGHT: portraits */}
          <div
            className="relative shrink-0 self-end"
            style={{ width: "clamp(340px, 48%, 560px)", height: "clamp(300px, 40vw, 480px)" }}
          >
            {/* Pink glow behind portraits */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                height: "70%",
                background: "radial-gradient(ellipse, rgba(214,51,132,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Kane */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "56%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={imgKane}
                alt="Kane Minkus"
                style={{
                  position: "absolute",
                  height: "156%",
                  left: "-128%",
                  top: "-27%",
                  maxWidth: "none",
                  width: "316%",
                  objectFit: "cover",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                }}
              />
            </div>

            {/* Alessia */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "54%",
                height: "96%",
                overflow: "hidden",
              }}
            >
              <img
                src={imgAlessia}
                alt="Alessia Minkus"
                style={{
                  position: "absolute",
                  height: "117%",
                  left: "-0.5%",
                  top: "-0.01%",
                  maxWidth: "none",
                  width: "101%",
                  objectFit: "cover",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar — full width, no top border, reduced padding ── */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px relative"
        style={{ background: "rgba(214,51,132,0.18)" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              padding: "16px 12px",
              textAlign: "center",
              background: "rgba(7,15,34,0.85)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                fontWeight: 300,
                lineHeight: 1,
                background: "linear-gradient(135deg, #D63384 0%, #FFADD6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.04em",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.4,
                whiteSpace: "pre-line",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
