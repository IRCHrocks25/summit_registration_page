const modules = [
  {
    number: "01",
    title: "AI Lead Generation",
    body: "Discover how AI tools generate high-qualified leads, automate personalized outreach, pre-qualify prospects, and book meetings — so you only spend time with the right people.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Productivity Management",
    body: "Learn the top AI tools to 20X your output and reclaim your time. Get a step-by-step breakdown of how to automate the time-consuming tasks draining your week.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Content Strategy",
    body: "Rapidly produce high-volume, brand-building content across every format — social media, video, audio, podcasts, and audiobooks — using the best AI tools available.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Scale Strategy",
    body: "Learn how to launch, grow, and scale a business to 7-figures with AI. From identifying winning ideas to positioning your offer and pricing it right — faster than ever before.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Product Development",
    body: "Use AI to rapidly build digital courses, books, and high-ticket services. Leverage the world's only AI-driven pipeline that takes concepts to fully deployed products at speed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Marketing Funnels",
    body: "Build high-converting funnels in minutes. Optimize ads, automate funnel creation, and design compelling websites and social campaigns — no technical skills required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Automation",
    body: "Master workflows that eliminate repetitive tasks. Automate email responses, social media management, and administrative work so you can focus on what actually moves the needle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Personalization at Scale",
    body: "Deploy AI chatbots and video/audio tools to deliver a customized experience for every customer — at scale — while continuously improving through machine learning.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
  },
];

export function WhatYouLearn() {
  return (
    <section
      style={{
        background: "linear-gradient(170deg, #070F22 0%, #0B1D3A 50%, #070F22 100%)",
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
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.35)",
              color: "#F272B6",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              fontWeight: 700,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F272B6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            THE AI UNLEASHED CURRICULUM
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Here's Exactly What You'll{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Learn at The Summit
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Eight power-packed sessions. One transformational day. Everything you need to go from AI-curious to AI-driven — in hours.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                cursor: "default",
              }}
            >
              {/* Hover gold border shimmer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  border: "1px solid rgba(214,51,132,0.4)",
                  pointerEvents: "none",
                }}
              />

              {/* Icon + Number row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(214,51,132,0.12)",
                    color: "#D63384",
                    border: "1px solid rgba(214,51,132,0.2)",
                  }}
                >
                  {mod.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                }}
              >
                {mod.title}
              </h3>

              {/* Gold rule */}
              <div
                style={{
                  height: "2px",
                  width: "32px",
                  background: "linear-gradient(90deg, #D63384, #FFADD6)",
                  borderRadius: "2px",
                }}
              />

              {/* Body */}
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                {mod.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex justify-center">
          <button
            className="cta-btn shrink-0 px-8 py-4"
            style={{
              fontSize: "0.95rem",
              whiteSpace: "nowrap",
            }}
          >
            REGISTER FREE NOW →
          </button>
        </div>
      </div>
    </section>
  );
}