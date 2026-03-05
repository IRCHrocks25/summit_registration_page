const checkItems = [
  {
    heading: "Business Opportunist or Entrepreneur",
    body: "If you're a business opportunist, a professional aiming to boost productivity, or seeking to future-proof your income — this is built for you.",
  },
  {
    heading: "Affiliate Marketer or Agency Builder",
    body: "An affiliate marketer, or planning to run an agency — this opportunity is tailored precisely to your needs.",
  },
  {
    heading: "Fired Up About AI",
    body: "You are excited about the potential of AI and ready to unleash the latest tools to get ahead and STAY AHEAD of your competition.",
  },
  {
    heading: "Leader Driving Organisational Growth",
    body: "Gain valuable insights on integrating AI into your organisation's strategy to drive growth and improve decision-making.",
  },
  {
    heading: "Strategic Business Builder",
    body: "You want to build a bullet-proof bank of AI tools to help run the most productive, profitable and enjoyable business possible.",
  },
  {
    heading: "Predictable Lead Generation",
    body: "You want to drive predictable lead generation knowing your marketing, social media, messaging and branding are all funnelling prospects.",
  },
];

export function WhoIsThisFor() {
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
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          opacity: 0.45,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-16">
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
            ✦ IS THIS FOR YOU?
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            Who It's For The Free{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              1-Day AI Unleashed Summit…
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#5a5a72",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Whether you're an expert, an entrepreneur, a leader, or simply someone looking to make money —{" "}
            <strong style={{ color: "#0B1D3A" }}>this is for you.</strong>
          </p>
        </div>

        {/* Check items grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {checkItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl px-6 py-5 transition-all hover:-translate-y-0.5"
              style={{
                background: "white",
                border: "1.5px solid rgba(214,51,132,0.13)",
                boxShadow: "0 2px 16px rgba(11,29,58,0.05)",
              }}
            >
              {/* Pink check */}
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

              <div>
                <p
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "#0B1D3A",
                    marginBottom: "5px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.heading}
                </p>
                <p style={{ fontSize: "0.88rem", color: "#5a5a72", lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
