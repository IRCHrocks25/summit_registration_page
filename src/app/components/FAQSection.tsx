import { useState } from "react";

const faqs = [
  {
    question: "What are The Times and Dates?",
    answer: (
      <>
        <p>The training is <strong>LIVE!</strong> 19th of February 2026</p>
        <p className="mt-3">The AI Unleashed Summit will start:</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {[
            { time: "9 A.M.", zone: "PACIFIC TIME" },
            { time: "12 P.M.", zone: "EASTERN TIME" },
            { time: "6 P.M.", zone: "CENTRAL EUROPEAN TIME" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-5 py-3 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
                border: "1px solid rgba(214,51,132,0.25)",
                minWidth: "120px",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #D63384, #FFADD6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                }}
              >
                {t.time}
              </span>
              <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", fontWeight: 600 }}>
                {t.zone}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3" style={{ color: "#5a5a72" }}>Runs for approximately <strong style={{ color: "#0B1D3A" }}>6 hours</strong>.</p>
      </>
    ),
  },
  {
    question: "Is The 1-Day AI Unleashed Summit Really Free?",
    answer: (
      <p>Yes. The only investment required is a serious commitment to discover little-known AI tools and the skills to use them to automate your business and build a seven or eight-figure business that supports your mission and life.</p>
    ),
  },
  {
    question: "How Long Does The AI Unleashed Summit Go For?",
    answer: (
      <p>We recommend allocating the whole day so you're not distracted. The Summit is packed with interactive learning and strategies for over <strong style={{ color: "#0B1D3A" }}>6 hours</strong> with time allocated for breaks.</p>
    ),
  },
  {
    question: "Can I Miss Certain Sections and Attend When I'm Free?",
    answer: (
      <p>We highly recommend you attend the whole event as this will transform your business and we don't want you to miss out on valuable tools or knowledge to build your dream business (and life).</p>
    ),
  },
  {
    question: "Do I Need Any Experience With AI?",
    answer: (
      <p>No. You'll benefit from our training no matter what level of AI experience you have. This training is tailored for entrepreneurs and business owners in <strong style={{ color: "#0B1D3A" }}>ALL niches and industries</strong>. If you sell a product or service, this training is perfect for you.</p>
    ),
  },
  {
    question: "Do I Need To Be Tech-Savvy?",
    answer: (
      <p>No. This event is based around how to use AI as a tool to create assets, increase productivity and save time. We'll show you how to implement AI tools in your business even if you've never used an AI tool before.</p>
    ),
  },
  {
    question: "I'm Just Starting Out, Is This Training Still For Me?",
    answer: (
      <p>Yes. About <strong style={{ color: "#0B1D3A" }}>50% of our students</strong> are just starting something or looking for opportunities to use technology and AI tools to make money and launch something brand new, and about 50% are already in businesses that are selling something in the marketplace. If you are a coach, consultant, expert, contractor, speaker, digital course creator or someone interested in having a business that can generate money online using cutting edge tech tools, or if you are a practitioner or agency looking to expand your business — this summit will be amazing for you!</p>
    ),
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        background: "white",
        border: isOpen
          ? "1.5px solid rgba(214,51,132,0.35)"
          : "1.5px solid rgba(214,51,132,0.1)",
        boxShadow: isOpen
          ? "0 8px 32px rgba(11,29,58,0.08)"
          : "0 2px 12px rgba(11,29,58,0.04)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-all"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span
          style={{
            fontSize: "0.97rem",
            fontWeight: 700,
            color: isOpen ? "#0B1D3A" : "#1a2e4a",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{
            background: isOpen
              ? "linear-gradient(135deg, #D63384, #F272B6)"
              : "rgba(214,51,132,0.1)",
            boxShadow: isOpen ? "0 4px 12px rgba(214,51,132,0.3)" : "none",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease, background 0.2s ease",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "white" : "#A01F6A"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div
          className="px-7 pb-6"
          style={{
            fontSize: "0.93rem",
            color: "#5a5a72",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            borderTop: "1px solid rgba(214,51,132,0.1)",
            paddingTop: "16px",
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-14">
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
            ✦ GOT QUESTIONS?
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "560px",
              margin: "0 auto 14px",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "#5a5a72",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Everything you need to know about the free 1-Day AI Unleashed Summit.
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            className="cta-btn px-12 py-4 block mx-auto mb-4"
            style={{
              fontSize: "0.92rem",
            }}
          >
            REGISTER FREE NOW →
          </button>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#A01F6A",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Claim your FREE ticket for a limited time
          </p>
        </div>

      </div>
    </section>
  );
}