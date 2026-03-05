import { AlertCircle, TrendingUp } from "lucide-react";
import img1 from "figma:asset/783fe7facd665fca93acc79aeb750cfbec7910f6.png";
import img2 from "figma:asset/51e7d94806b0317ed23024759a1563f0fbbf942d.png";
import img3 from "figma:asset/485d655c97e8425d4bd56595cf8ccbc4910c8d3b.png";
import img4 from "figma:asset/175b91143f9c73ecf294de26273617a162b7969d.png";
import img5 from "figma:asset/031f9e9ce5653b08e951072698a97d01589ef5e3.png";

export function InfoSection1() {
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
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.08) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header — full width above grid */}
        <div className="text-center mb-12">
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
            <AlertCircle size={12} /> DOES THIS SOUND FAMILIAR?
          </div>

          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.22,
              letterSpacing: "-0.025em",
              maxWidth: "720px",
              margin: "0 auto 12px",
            }}
          >
            Imagine Being Able to Hit Fast-Forward on Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              Productivity, Growth, Revenue and Income…
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#5a5a72",
              lineHeight: 1.7,
            }}
          >
            …While Investing <strong style={{ color: "#0B1D3A" }}>LESS</strong> Time, Energy &amp; Resources
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-start">

          {/* Left — stacked images */}
          <div className="relative flex flex-col gap-3">
            {/* Image 1 */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: "0 30px 80px rgba(11,29,58,0.18), 0 0 0 1.5px rgba(214,51,132,0.2)",
              }}
            >
              <img
                src={img1}
                alt="Summit audience engaged in learning"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(0deg, rgba(11,29,58,0.65) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Caption badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="px-4 py-2.5 rounded-xl inline-block"
                  style={{
                    background: "rgba(11,29,58,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(214,51,132,0.3)",
                  }}
                >
                  <p style={{ color: "#F272B6", fontSize: "0.65rem", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 2 }}>
                    AI UNLEASHED SUMMIT
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", fontWeight: 600 }}>
                    300K+ Professionals Trained Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px rgba(11,29,58,0.13), 0 0 0 1.5px rgba(214,51,132,0.15)",
              }}
            >
              <img
                src={img2}
                alt="Be Heard Be Seen event attendees"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            {/* Image 3 */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px rgba(11,29,58,0.13), 0 0 0 1.5px rgba(214,51,132,0.15)",
              }}
            >
              <img
                src={img3}
                alt="Alessia Minkus presenting on stage"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            {/* Image 4 */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px rgba(11,29,58,0.13), 0 0 0 1.5px rgba(214,51,132,0.15)",
              }}
            >
              <img
                src={img4}
                alt="Kane and Alessia Minkus on stage at Global Disruptors Conference"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            {/* Image 5 */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px rgba(11,29,58,0.13), 0 0 0 1.5px rgba(214,51,132,0.15)",
              }}
            >
              <img
                src={img5}
                alt="Alessia Minkus with Richard Branson at event"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-6 rounded-2xl px-5 py-4 hidden sm:block"
              style={{
                background: "linear-gradient(135deg, #D63384, #A01F6A)",
                boxShadow: "0 12px 40px rgba(214,51,132,0.4)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.62rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 4 }}>
                SUMMIT ATTENDEES
              </p>
              <p style={{ color: "white", fontSize: "1.7rem", fontWeight: 800, lineHeight: 1 }}>300K+</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", marginTop: 2 }}>This year alone</p>
            </div>
          </div>

          {/* Right — letter card */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl px-7 sm:px-9 py-9 space-y-5"
              style={{
                background: "white",
                border: "1.5px solid rgba(214,51,132,0.13)",
                boxShadow: "0 4px 40px rgba(11,29,58,0.06)",
              }}
            >
              <p style={{ fontSize: "1.05rem", color: "#3a3a50", lineHeight: 1.85 }}>
                <strong>Dear Ambitious Entrepreneur,</strong>
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                Imagine knowing that Netflix would be the next big disruptor before it happened. That digital cameras would completely change our way of life. Or that Apple would become the world's #1 brand before they rose to the top.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                AI offers the same industry-shaking potential… but only for those with the <strong style={{ color: "#0B1D3A" }}>skills, knowledge and foresight to get in on the ground floor.</strong>
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                Right now, you have a desire to grow your income or automate a highly profitable business. You have a vision to create something successful, meaningful and long-lasting that provides total freedom for you and your family while impacting millions worldwide.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                But a lack of AI knowledge and experience can leave you spending hours, weeks, or months trying to crack an impossible code. Right now, your competitors are using AI to skyrocket their productivity, turn their businesses into cash printing machines, and build the dream business (and life) you want for yourself.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                If you've got a burning desire to create more financial and time freedom, here's the truth…
              </p>

              {/* Callout block */}
              <div
                className="rounded-xl px-6 py-5"
                style={{
                  background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
                  border: "1px solid rgba(214,51,132,0.25)",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  You Either Get In The Game{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #D63384, #FFADD6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    NOW
                  </span>{" "}
                  Or Stay On The Sidelines Permanently
                </p>
              </div>

              {/* Bullet list */}
              <div className="flex flex-col gap-3">
                {[
                  "AI is the future of entrepreneurship.",
                  "It's NOT a fad.",
                  "It's NOT on the horizon.",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    <TrendingUp size={15} color="#D63384" className="shrink-0" />
                    <p style={{ fontSize: "1rem", color: "#0B1D3A", fontWeight: 700 }}>{line}</p>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                AI is completely changing the landscape of how the "every day" Entrepreneur can compete with the biggest brands and companies for the first time in history! It has totally changed the game for professionals, entrepreneurs and business owners.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                If you have not already mastered integrating these tools into your business, career and life you are now late to the game. You need to catch up <strong style={{ color: "#0B1D3A" }}>IMMEDIATELY</strong> and <strong style={{ color: "#0B1D3A" }}>MASTER AI tools</strong> to avoid being left behind. Your competitors are already using these tools to get ahead and every forward-thinking professional (and organization) in the world is racing to implement AI tools into their workflow.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                This <strong style={{ color: "#0B1D3A" }}>FREE 1-Day AI UNLEASHED™ SUMMIT</strong> (which has already been attended by world renowned business Entrepreneurs and over 300K professionals in just the last year) is designed to fast-track your knowledge, focus and abilities, so you can master AI and launch, grow and run a business with a <strong style={{ color: "#D63384" }}>seven figure income stream… in just hours.</strong>
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                This is your chance to get in on AI and start towards mastery so you don't miss out. We've waived all fees and covered the cost of your ticket. All we ask is that you take action <strong style={{ color: "#0B1D3A" }}>NOW</strong> and give yourself the business (and life) you deserve.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                If you want to use AI to grow a business and make money, but don't know how to get started, join us to discover how to <strong style={{ color: "#0B1D3A" }}>20X your productivity</strong>, create a <strong style={{ color: "#D63384" }}>7-figure revenue stream</strong> that gives you total financial freedom &amp; go from total AI beginner to <strong style={{ color: "#0B1D3A" }}>AI Assisted™ entrepreneur in hours.</strong>
              </p>

              {/* Signature */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(214,51,132,0.1)" }}
              >
                <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0B1D3A" }}>
                  Sincerely,
                </p>
                <p style={{ fontSize: "0.8rem", color: "#A01F6A", marginTop: 2, letterSpacing: "0.04em", fontWeight: 600 }}>
                  Kane &amp; Alessia Minkus · World's #1 Business Mentors
                </p>
              </div>
            </div>

            {/* CTA block */}
            <div className="text-center">
              <button
                className="cta-btn px-12 py-4 block mx-auto mb-3"
                style={{
                  fontSize: "0.92rem",
                }}
              >
                REGISTER FREE NOW!
              </button>
              <p style={{ fontSize: "0.82rem", color: "#A01F6A", fontWeight: 600, letterSpacing: "0.04em" }}>
                Claim your FREE ticket for a limited time
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}