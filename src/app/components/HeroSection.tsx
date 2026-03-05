import { useState, useEffect } from "react";
import { CheckCircle, Gift } from "lucide-react";
import Cred from "../../imports/Cred";

function CountdownTimer() {
  const targetDate = new Date("2026-02-19T09:00:00-08:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) { setExpired(true); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  if (expired) return null;

  return (
    <div className="flex gap-3 justify-center">
      {[
        { label: "DAYS", value: pad(timeLeft.days) },
        { label: "HOURS", value: pad(timeLeft.hours) },
        { label: "MINS", value: pad(timeLeft.minutes) },
        { label: "SECS", value: pad(timeLeft.seconds) },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(214,51,132,0.15)",
              border: "1.5px solid rgba(214,51,132,0.5)",
              fontSize: "1.8rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              color: "#D63384",
            }}
          >
            {value}
          </div>
          <span
            className="mt-1"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #070F22 0%, #0B1D3A 50%, #0D2248 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(214,51,132,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(100,130,200,0.06) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D63384' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Top ribbon */}
      <div
        className="w-full py-2.5 text-center"
        style={{
          background: "linear-gradient(90deg, #D63384, #F272B6, #D63384)",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          fontWeight: 600,
          color: "white",
        }}
      >
        FREE 1-DAY VIRTUAL SUMMIT &nbsp;|&nbsp; FEBRUARY 19, 2026 &nbsp;|&nbsp; REGISTER NOW - SEATS ARE LIMITED
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">

        {/* Headline */}
        <div className="text-center mb-4">
          <p
            style={{
              fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
              letterSpacing: "0.25em",
              color: "#D63384",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            AI UNLEASHED &nbsp;·&nbsp; ONE DAY AI SUMMIT
          </p>
          <h1
            className="mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.9rem, 4.5vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#FFFFFF",
              maxWidth: "900px",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Learn the Little-Known{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Secrets
            </span>{" "}
            Used to Grow{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              7-Figure Businesses
            </span>{" "}
            in Hours?
          </h1>

          <p
            className="mx-auto mt-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "800px",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Join The World's{" "}
            <strong style={{ color: "white" }}>#1 Business Mentors, Kane &amp; Alessia Minkus</strong>{" "}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>(Trained More Than 3 Million Professionals Over 20 Years)</span>,
            for a{" "}
            <strong style={{ color: "#F272B6" }}>FREE 1-Day Virtual Event</strong> and Walk Away With
            a Step-by-Step Blueprint on How to Use AI To{" "}
            <strong style={{ color: "white" }}>
              Launch, Grow and Automate a Business or Income Stream to Seven Figures.
            </strong>
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-10 mt-8">
          <CountdownTimer />
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Video */}
          <div className="order-2 md:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#000",
                border: "1.5px solid rgba(214,51,132,0.3)",
                aspectRatio: "16/9",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(214,51,132,0.9)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                PREVIEW
              </div>
              <iframe
                src="https://drive.google.com/file/d/1ZVzIxJjkxazV5ZQhv3DJTwlrmdZZEIqb/preview"
                title="Summit Preview"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <p
              className="mt-5"
              style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}
            >
              Whether you're starting a business, aiming to boost your income, or already an experienced entrepreneur,
              learn to harness little-known AI tools, prompts, and skills to achieve your goals.{" "}
              <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                All without needing any technical skills or prior experience.
              </strong>
            </p>
          </div>

          {/* Registration form */}
          <div className="order-1 md:order-2">
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1.5px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Save the date */}
              <div
                className="flex items-center gap-2 mb-5 pb-5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #D63384, #F272B6)" }}
                >
                  <span style={{ fontSize: "1.2rem" }}>📅</span>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      color: "#D63384",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    Save the Date
                  </p>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>
                    February 19, 2026 &nbsp;·&nbsp; FREE Online Training
                  </p>
                </div>
              </div>

              {/* Times */}
              <div className="flex flex-col gap-1.5 mb-5">
                {[
                  { tz: "Pacific Time", time: "9:00 A.M." },
                  { tz: "Eastern Time", time: "12:00 P.M." },
                  { tz: "Central European Time", time: "6:00 P.M." },
                ].map(({ tz, time }) => (
                  <div key={tz} className="flex items-center justify-between">
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>{tz}</span>
                    <span style={{ color: "#F272B6", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em" }}>
                      {time}
                    </span>
                  </div>
                ))}
                <p className="mt-1" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>
                  This live event lasts for about 6 hours
                </p>
              </div>

              {/* Credibility */}
              <p
                className="mb-5"
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Join The World's{" "}
                <strong style={{ color: "white" }}>#1 Business Mentors, Kane &amp; Alessia Minkus</strong>,
                who've trained more than{" "}
                <strong style={{ color: "white" }}>3 Million Professionals over 20 Years</strong>, for a{" "}
                <strong style={{ color: "#F272B6" }}>FREE 1-Day Virtual Event</strong> and walk away with a
                Step-by-Step Blueprint on how to use AI to{" "}
                <strong style={{ color: "white" }}>
                  Launch, Grow and Automate a Business or Income Stream to Seven Figures.
                </strong>
              </p>

              {/* Form */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "0.95rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Best Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl outline-none"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "0.95rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <button
                  className="cta-btn w-full py-4"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  REGISTER FREE NOW! →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* As Seen In logos */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "22px",
            paddingBottom: "26px",
          }}
        >
          <p
            className="text-center mb-4"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            As Seen In
          </p>
          <div className="max-w-4xl mx-auto overflow-hidden" style={{ height: 64 }}>
            <Cred />
          </div>
        </div>

      </div>
    </section>
  );
}