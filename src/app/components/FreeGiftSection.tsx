import { Gift, Zap, Clock, Star } from "lucide-react";
import summitPhoto from "figma:asset/293d15ce4546177ba2eb6b975c9824860324ed96.png";

export function FreeGiftSection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #070F22 0%, #0B1D3A 60%, #0D2248 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(214,51,132,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D63384' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — copy */}
          <div>
            {/* FREE GIFT FOR ATTENDING pill — left aligned above headline */}
            <div className="flex justify-start mb-5">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
                style={{
                  background: "rgba(214,51,132,0.15)",
                  border: "1.5px solid rgba(214,51,132,0.5)",
                  color: "#FFADD6",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                }}
              >
                <Gift size={14} color="#F272B6" />
                FREE GIFT FOR ATTENDING
              </div>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              A 100% Free Summit —{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #D63384, #FFADD6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Plus an Exclusive Gift
              </span>{" "}
              Just for Showing Up
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Join us for a comprehensive and{" "}
              <strong style={{ color: "white" }}>100% FREE Summit</strong> featuring
              leading Silicon Valley advisors, recognized globally as top authorities in
              technology and AI for driving profit. All you need is the desire to launch
              or grow your income, business, or revenue.{" "}
              <strong style={{ color: "white" }}>
                No prior AI knowledge or experience required.
              </strong>
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              At this summit, we'll guide you through every step. Plus,{" "}
              <strong style={{ color: "#F272B6" }}>
                just for attending, you'll receive a free gift
              </strong>{" "}
              of{" "}
              <strong style={{ color: "white" }}>
                10 essential tools designed to make you more productive
              </strong>{" "}
              and{" "}
              <strong style={{ color: "white" }}>save you one day a week</strong>.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              Don't miss this opportunity to{" "}
              <strong style={{ color: "white" }}>
                transform your financial future.
              </strong>
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-5 mb-10">
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                className="cta-btn px-8 py-4"
                style={{
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                }}
              >
                REGISTER FREE NOW! →
              </button>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }}
                />
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", letterSpacing: "0.05em" }}>
                  Live &amp; Interactive
                </span>
              </div>
            </div>
          </div>

          {/* Right — gift image */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={summitPhoto}
                alt="AI Unleashed Summit — Kane & Alessia on stage with global audience"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}