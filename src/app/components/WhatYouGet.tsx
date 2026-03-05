import { BookOpen, Target, Award, Users, Zap, DollarSign, Map, Gift } from "lucide-react";

const deliverables = [
  {
    icon: <BookOpen size={22} />,
    title: "The AI Consultant Certification Framework",
    desc: "A step-by-step system to become a credentialed AI consultant in your specific domain — with a verifiable certification employers and clients recognize.",
    value: "$997 Value",
  },
  {
    icon: <Target size={22} />,
    title: "The High-Ticket Offer Builder Workshop",
    desc: "Live workshop revealing how to package your current expertise into $10K–$50K AI consulting offers — with real examples from 7 different industries.",
    value: "$797 Value",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Premium Pricing Masterclass",
    desc: "Learn the exact language, frameworks, and positioning that lets you charge 3–10x more without feeling pushy or underqualified.",
    value: "$597 Value",
  },
  {
    icon: <Map size={22} />,
    title: "The 90-Day Launch Roadmap",
    desc: "A concrete, week-by-week action plan to go from 'interested in AI' to landing your first certified AI consulting client — even starting from zero.",
    value: "$497 Value",
  },
  {
    icon: <Users size={22} />,
    title: "Access to the Private Community",
    desc: "Join a curated network of 3,000+ AI consultants across 47 countries. Collaboration, referrals, and accountability built in.",
    value: "$397 Value",
  },
  {
    icon: <Zap size={22} />,
    title: "AI Tools Cheat Sheet & Toolkit",
    desc: "Curated list of the 27 AI tools every consultant needs (and how to use them with clients) — no technical background required.",
    value: "$197 Value",
  },
  {
    icon: <Award size={22} />,
    title: "Client Acquisition Scripts & Templates",
    desc: "Proven email scripts, LinkedIn outreach templates, and discovery call frameworks that convert conversations into paying consulting contracts.",
    value: "$297 Value",
  },
  {
    icon: <Gift size={22} />,
    title: "BONUS: Summit Replay Access",
    desc: "Can't attend live? Every registered attendee gets full replay access for 30 days — watch on your own schedule.",
    value: "Priceless",
  },
];

export function WhatYouGet() {
  const totalValue = "$3,779+";

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #0B1D3A 0%, #071428 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(201,149,42,0.12)",
              border: "1px solid rgba(201,149,42,0.35)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              fontWeight: 600,
              color: "#E8C060",
            }}
          >
            ✦ EVERYTHING INCLUDED — 100% FREE
          </div>
          <h2
            className="mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.25,
              maxWidth: 680,
            }}
          >
            What You'll Receive at the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9952A, #F0D080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Free AI Consultant Summit
            </span>
          </h2>
          <div
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full"
            style={{
              background: "rgba(201,149,42,0.12)",
              border: "1px solid rgba(201,149,42,0.25)",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
              Total Value:
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "#E8C060",
              }}
            >
              {totalValue}
            </span>
            <span
              className="px-3 py-0.5 rounded-full"
              style={{
                background: "linear-gradient(90deg, #C9952A, #D4A843)",
                color: "#0B1D3A",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              YOURS FREE
            </span>
          </div>
        </div>

        {/* Deliverables grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {deliverables.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1.5px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(201,149,42,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              {/* Number + Icon */}
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(201,149,42,0.15)",
                    color: "#C9952A",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.2)",
                    fontWeight: 600,
                  }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="shrink-0 px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(201,149,42,0.12)",
                      border: "1px solid rgba(201,149,42,0.2)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "#E8C060",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
                <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl hover:scale-105 transition-transform"
            style={{
              background: "linear-gradient(135deg, #C9952A, #E8C060)",
              color: "#0B1D3A",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 10px 40px rgba(201,149,42,0.4)",
            }}
          >
            GET INSTANT FREE ACCESS →
          </button>
          <p className="mt-3" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            Zero cost · No credit card · Instant confirmation
          </p>
        </div>
      </div>

      {/* Wave */}
      <div className="w-full overflow-hidden mt-16" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, width: "100%" }}>
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,20 L1440,60 L0,60 Z" fill="#FAF6EF" />
        </svg>
      </div>
    </section>
  );
}
