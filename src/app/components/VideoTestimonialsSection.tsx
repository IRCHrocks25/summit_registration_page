import { useEffect } from "react";
import { Star } from "lucide-react";

const VIDEOS = [
  { id: "996432981",  title: "AI Students Testimonials Achievements" },
  { id: "996432970",  title: "Athena Todd" },
  { id: "996433099",  title: "Ben Nordemann" },
  { id: "996433070",  title: "Becky Amble" },
  { id: "996433084",  title: "Claire Hayek" },
  { id: "996432544",  title: "Adriana Vela" },
  { id: "996431439",  title: "Cynthia Fontaine" },
  { id: "996432502",  title: "Cheryl Wilson" },
  { id: "996432529",  title: "Christa Cravenor-Hess" },
  { id: "996432485",  title: "Claret Palmer" },
];

export function VideoTestimonialsSection() {
  useEffect(() => {
    if (document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #071228 0%, #0B1D3A 50%, #071228 100%)",
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
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />
      {/* Top pink glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.35)",
              color: "#F272B6",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ REAL RESULTS FROM REAL ATTENDEES
          </div>

          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.7rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              maxWidth: "640px",
              margin: "0 auto 14px",
            }}
          >
            Hear What Summit{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Attendees Are Saying
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#D63384" color="#D63384" />
              ))}
            </div>
            <span style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
              300,000+ entrepreneurs trained worldwide
            </span>
          </div>
        </div>

        {/* ── Video flex grid — centered including last row ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              style={{
                flex: "0 0 calc(25% - 15px)",
                minWidth: "260px",
                maxWidth: "340px",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(214,51,132,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                background: "#0B1526",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(214,51,132,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.35)";
              }}
            >
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
