import { Award, Star, Mic, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  { number: "2,300+", label: "Consultants Certified" },
  { number: "$47M+", label: "Client Revenue Generated" },
  { number: "14", label: "Years in AI Strategy" },
  { number: "28", label: "Industry Awards" },
];

const awards = [
  { emoji: "🏆", title: "Forbes 40 Under 40", year: "2021" },
  { emoji: "🌟", title: "Inc. Most Innovative Leader", year: "2022" },
  { emoji: "🎯", title: "Fast Company AI Pioneer", year: "2023" },
  { emoji: "💡", title: "Entrepreneur Magazine Top AI Expert", year: "2024" },
  { emoji: "🔬", title: "MIT Technology Review Innovator", year: "2023" },
  { emoji: "📚", title: "WSJ Bestselling Author", year: "2022" },
];

const speaking = [
  "Google", "Microsoft", "Davos", "TED", "Harvard Business School", "MIT", "Stanford GSB",
];

export function MeetTheFounder() {
  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #FAF6EF 0%, #F0E8D8 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
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
            ✦ YOUR HOST & GUIDE
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.25,
            }}
          >
            Meet{" "}
            <span style={{ color: "#C9952A", fontStyle: "italic" }}>
              Dr. Elena Vasquez
            </span>
          </h2>
          <p
            className="mt-2"
            style={{ fontSize: "1rem", color: "#888" }}
          >
            Founder & CEO · The AI Consultant Academy
          </p>
        </div>

        {/* Main bio section */}
        <div className="grid md:grid-cols-5 gap-10 items-start mb-14">
          {/* Images column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(11,29,58,0.15)",
                border: "3px solid rgba(201,149,42,0.2)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1700651691401-b6775c93f5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Dr. Elena Vasquez speaking on stage"
                className="w-full object-cover"
                style={{ aspectRatio: "4/5" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,29,58,0.9), transparent)",
                }}
              >
                <p style={{ color: "white", fontSize: "0.8rem", fontStyle: "italic" }}>
                  Keynote at MIT AI Leadership Summit
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ number, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "linear-gradient(135deg, #0B1D3A, #142d57)",
                    boxShadow: "0 8px 24px rgba(11,29,58,0.2)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#E8C060",
                      lineHeight: 1,
                    }}
                  >
                    {number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.55)",
                      marginTop: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div className="md:col-span-3">
            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "#0B1D3A",
                  lineHeight: 1.7,
                }}
              >
                "I know exactly how it feels to be an accomplished professional
                watching the world shift beneath your feet — and feeling like
                you're running out of time."
              </p>

              <p style={{ fontSize: "0.93rem", color: "#5a5a72", lineHeight: 1.8 }}>
                Dr. Elena Vasquez spent the first 15 years of her career as a
                senior strategy consultant at McKinsey, advising Fortune 500
                companies on organizational transformation. When AI began
                reshaping the business landscape, she didn't run from it — she
                ran toward it.
              </p>
              <p style={{ fontSize: "0.93rem", color: "#5a5a72", lineHeight: 1.8 }}>
                In 2018, she founded the AI Consultant Academy to help
                experienced professionals like you translate their expertise into
                the most in-demand skill set of our generation. To date, she has
                certified over{" "}
                <strong style={{ color: "#0B1D3A" }}>
                  2,300+ AI consultants across 47 countries
                </strong>
                , with alumni collectively generating over{" "}
                <strong style={{ color: "#0B1D3A" }}>$47 million in new revenue</strong>.
              </p>
              <p style={{ fontSize: "0.93rem", color: "#5a5a72", lineHeight: 1.8 }}>
                She's a WSJ bestselling author, a sought-after keynote speaker
                at Google, Microsoft, and Davos, and has been named one of the
                top AI educators in the world by MIT Technology Review.
              </p>

              {/* Credentials row */}
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "PhD, AI Strategy (MIT)",
                  "MBA (Harvard Business School)",
                  "15 Years McKinsey",
                  "WSJ Bestselling Author",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(201,149,42,0.1)",
                      border: "1px solid rgba(201,149,42,0.25)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#8B6914",
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Awards section */}
        <div
          className="rounded-2xl p-7 mb-10"
          style={{
            background: "white",
            border: "1.5px solid rgba(201,149,42,0.15)",
            boxShadow: "0 10px 40px rgba(11,29,58,0.06)",
          }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={18} color="#C9952A" />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#0B1D3A",
              }}
            >
              Recognition & Awards
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {awards.map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: "#FAF6EF" }}
              >
                <span style={{ fontSize: "1.3rem" }}>{a.emoji}</span>
                <div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#0B1D3A",
                      lineHeight: 1.3,
                    }}
                  >
                    {a.title}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "#888" }}>{a.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking section */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, #0B1D3A, #142d57)",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Mic size={18} color="#C9952A" />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: "white",
              }}
            >
              Featured Speaker At
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {speaking.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
