import imgImage8 from "figma:asset/87e57092f5f9a12633bbb6f9482925dcba0ab0a0.png";
import imgImage9 from "figma:asset/d82cc823335b5853f9f3c37b55a5ef60133b7992.png";
import imgImage10 from "figma:asset/ec550a92dc68d32173df67fa84b33ac07928f926.png";
import imgImage11 from "figma:asset/be6e24638ed7208d7279ecf4ca3def171ceea365.png";
import imgImage12 from "figma:asset/7951e57ef52334520be555091a82fbb848d7b722.png";
import imgImage13 from "figma:asset/b82e70a92ad87e470ccf3e299585d499527959d2.png";
import imgImage5 from "figma:asset/875f0af8bbadde55208c45a97c471fd3bc6d4ce6.png";
import imgImage6 from "figma:asset/8228f282afb01697417dd127d20c1ab154449cfd.png";
import imgImage7 from "figma:asset/4a4fe79758b4019625451668303b3408f390de9b.png";

// Right column: 2×2 grid
const rightCelebs = [
  { img: imgImage7,  name: "Lisa Nichols",    title: "World-Renowned Motivational Speaker" },
  { img: imgImage8,  name: "Tony Robbins",    title: "Entrepreneur, #1 NY Times Bestselling Author" },
  { img: imgImage9,  name: "Bill Clinton",    title: "Former President of the USA" },
  { img: imgImage13, name: "Bob Proctor",     title: "Actor, Author & Motivational Speaker" },
];

// Bottom full-width row: 4 cards
const bottomCelebs = [
  { img: imgImage6,  name: "Les Brown",       title: "Rated World's #1 Motivational Speaker" },
  { img: imgImage12, name: "Frank Kern",      title: "Consultant & #1 Internet Marketer" },
  { img: imgImage10, name: "Vishen Lakhiani", title: "Founder & CEO of Mindvalley" },
  { img: imgImage11, name: "Tim Ferriss",     title: "Entrepreneur, Author & Speaker" },
];

function CelebCard({ img, name, title }: { img: string; name: string; title: string }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        background: "#0D1F35",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(4,10,21,0.88))",
          padding: "24px 12px 12px",
        }}
      >
        <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.78rem", margin: 0, lineHeight: 1.3 }}>
          {name}
        </p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem", margin: "3px 0 0", lineHeight: 1.35 }}>
          {title}
        </p>
      </div>
    </div>
  );
}

export function CelebsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #05101F 0%, #071628 100%)",
        padding: "80px 24px 88px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold glow top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "20px",
              padding: "6px 18px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#C9A84C", fontSize: "0.72rem", letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase" }}>
              ✦ Their Inner Circle
            </span>
          </div>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Kane & Alessia Have Shared the Stage &<br />
            <span style={{ color: "#C9A84C" }}>Broken Bread With the World's Best</span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            When you learn from mentors in this inner circle, you're getting access to the same wisdom that shapes global leaders.
          </p>
        </div>

        {/* ── Top section: Branson large left + 2×2 right ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            alignItems: "stretch",
            maxWidth: "860px",
            margin: "0 auto 14px",
          }}
        >
          {/* Left: Large feature image */}
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <img
              src={imgImage5}
              alt="Sir Richard Branson with Kane & Alessia"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                minHeight: "240px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(4,10,21,0.92))",
                padding: "32px 20px 20px",
              }}
            >
              <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1rem", margin: 0 }}>Sir Richard Branson</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", margin: "4px 0 0" }}>
                Businessman, Investor & Founder of Virgin Group
              </p>
            </div>
          </div>

          {/* Right: 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {rightCelebs.map((celeb, i) => (
              <CelebCard key={i} {...celeb} />
            ))}
          </div>
        </div>

        {/* ── Bottom row: 4 cards full width ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {bottomCelebs.map((celeb, i) => (
            <CelebCard key={i} {...celeb} />
          ))}
        </div>
      </div>

      {/* Subtle gold glow bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />
    </section>
  );
}
