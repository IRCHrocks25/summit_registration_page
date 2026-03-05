import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Former Hospital Administrator → AI Healthcare Consultant",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote:
      "I was 47 years old with 22 years in healthcare management and zero AI background. After this summit, I packaged my operational expertise with AI workflow tools and landed my first $28,000 consulting contract within 8 weeks. I had no idea my experience was this valuable.",
    result: "$28K first contract",
    resultLabel: "in 8 weeks",
    stars: 5,
  },
  {
    name: "Jennifer Torres",
    title: "Ex-Corporate Attorney → AI Legal Strategy Consultant",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1738943892652-5ac88beb6c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote:
      "I kept telling myself I was 'too late' to the AI wave. This summit completely changed my mindset and showed me a concrete roadmap. I now run a boutique AI legal consulting practice with 6 retainer clients. My income has tripled in 14 months.",
    result: "3x income",
    resultLabel: "in 14 months",
    stars: 5,
  },
  {
    name: "Amanda Chen",
    title: "Senior Marketing Executive → AI Marketing Consultant",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1765005204058-10418f5123c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote:
      "The certification framework alone was worth 10x what this summit cost (and it's FREE!). I went from charging $150/hr to packaging a $15,000 AI marketing audit. I've since helped 40+ companies transform their marketing with AI. This is the most impactful thing I've ever attended.",
    result: "$15K packages",
    resultLabel: "per engagement",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #0B1D3A 0%, #0E2244 100%)",
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
            ★ REAL RESULTS FROM REAL WOMEN
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.25,
            }}
          >
            Women Just Like You Are Already{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9952A, #F0D080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transforming Their Careers
            </span>
          </h2>
          <p
            className="mt-3 mx-auto"
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            These are not outliers. These are experienced professionals who
            decided to take action at the right time.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1.5px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Result badge */}
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{
                  background: "linear-gradient(90deg, rgba(201,149,42,0.2), rgba(201,149,42,0.08))",
                  borderBottom: "1px solid rgba(201,149,42,0.15)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#E8C060",
                    }}
                  >
                    {t.result}
                  </span>
                  <span
                    className="ml-2"
                    style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}
                  >
                    {t.resultLabel}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={12} fill="#C9952A" color="#C9952A" />
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <Quote size={20} color="rgba(201,149,42,0.4)" className="mb-3" />
                <p
                  className="flex-1 mb-6"
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ border: "2px solid rgba(201,149,42,0.4)" }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom social proof */}
        <div
          className="mt-10 rounded-2xl py-6 px-8 flex flex-wrap gap-6 justify-center"
          style={{
            background: "rgba(201,149,42,0.08)",
            border: "1px solid rgba(201,149,42,0.2)",
          }}
        >
          {[
            { num: "12,847+", label: "Professionals Registered" },
            { num: "93%", label: "Would Recommend" },
            { num: "$2.4M+", label: "New Revenue Generated by Alumni" },
            { num: "47", label: "Countries Represented" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center px-4">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#E8C060",
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="w-full overflow-hidden mt-16" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, width: "100%" }}>
          <path d="M0,0 Q360,60 720,30 Q1080,0 1440,40 L1440,60 L0,60 Z" fill="#FAF6EF" />
        </svg>
      </div>
    </section>
  );
}
