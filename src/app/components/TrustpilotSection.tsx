import { Star, ChevronRight } from "lucide-react";

const trustpilotReviews = [
  {
    name: "Samantha R.",
    date: "Feb 14, 2025",
    rating: 5,
    title: "Kane is the real deal — changed my life",
    review:
      "I've been through many business programs but nothing compares to what Kane teaches at Industry Rockstar. Within 90 days of completing the program I landed my first AI consulting client at $28,000. His methods work, full stop.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwc21pbGluZ3xlbnwxfHx8fDE3NzE3ODEyMjZ8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Joanne M.",
    date: "Jan 28, 2025",
    rating: 5,
    title: "Incredible ROI on every level",
    review:
      "Industry Rockstar delivered everything it promised and then some. Kane's frameworks for positioning yourself as a high-value consultant are unlike anything I've encountered in 20 years of corporate life. I'm now running my own AI practice.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcxNzg5MTUzfDA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Tricia L.",
    date: "Jan 12, 2025",
    rating: 5,
    title: "Best business mentorship program out there",
    review:
      "I was skeptical about yet another online program, but Kane's track record is undeniable. The Industry Rockstar community is warm, supportive, and full of high achievers. I got my first consulting contract within 5 weeks of finishing the training.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzE3ODkxNTR8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Deborah K.",
    date: "Dec 20, 2024",
    rating: 5,
    title: "Went from stuck to booked solid in 60 days",
    review:
      "After 25 years in corporate HR I had no idea how to package my expertise. Kane's program at Industry Rockstar showed me exactly how to position AI consulting services. I now have a 6-week waitlist. This program is worth every penny.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1752650736215-0130f82db4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHNtaWxpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcxNzg5MTU0fDA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Christine B.",
    date: "Dec 5, 2024",
    rating: 5,
    title: "Kane's genius is making complex things simple",
    review:
      "I'm not technical at all — the thought of 'AI consulting' felt overwhelming. Kane completely demystified it. Industry Rockstar gave me the confidence and the exact playbook I needed. I've already recouped my investment 3x over.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1659353220597-71b8c6a56259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNvbnN1bHRhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE3Njc2ODJ8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Angela T.",
    date: "Nov 18, 2024",
    rating: 5,
    title: "World-class content, world-class community",
    review:
      "The quality of teaching at Industry Rockstar is unmatched. Kane brings real-world examples from his 5M+ student base that make everything immediately applicable. My consulting rates have tripled since joining. I only wish I'd found this sooner.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3N3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTY5OTI5Mnww&ixlib=rb-4.1.0&q=80&w=200",
  },
];

// Duplicate for seamless loop
const doubled = [...trustpilotReviews, ...trustpilotReviews];

const CARD_WIDTH = 320;
const GAP = 24;
const CARD_STRIDE = CARD_WIDTH + GAP;
const TOTAL_WIDTH = CARD_STRIDE * trustpilotReviews.length;
// Duration: ~40 s for one full loop (slow, elegant)
const DURATION = 40;

function ReviewCard({ review }: { review: (typeof trustpilotReviews)[number] }) {
  return (
    <div
      style={{
        flex: `0 0 ${CARD_WIDTH}px`,
        width: `${CARD_WIDTH}px`,
        background: "white",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        userSelect: "none",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "4px" }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              background: i < review.rating ? "#00B67A" : "#ddd",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Star size={12} fill="white" stroke="white" strokeWidth={0} />
          </div>
        ))}
      </div>

      {/* Title */}
      <p
        style={{
          fontWeight: 700,
          fontSize: "0.97rem",
          color: "#0B1D3A",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        {review.title}
      </p>

      {/* Body */}
      <p
        style={{
          fontSize: "0.88rem",
          color: "#4a4a5e",
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {review.review}
      </p>

      {/* Reviewer row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingTop: "12px",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <img
          src={review.avatar}
          alt={review.name}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top center",
            flexShrink: 0,
            border: "2px solid #e8e8e8",
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "#0B1D3A",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {review.name}
          </p>
          <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>{review.date}</p>
        </div>
        {review.verified && (
          <div
            style={{
              background: "#00B67A",
              color: "white",
              fontSize: "0.68rem",
              padding: "3px 8px",
              borderRadius: "4px",
              fontWeight: 700,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ✓ Verified
          </div>
        )}
      </div>
    </div>
  );
}

export function TrustpilotSection() {
  return (
    <section
      className="py-16"
      style={{ background: "#EEF2FF", fontFamily: "'DM Sans', sans-serif", overflow: "hidden" }}
    >
      <style>{`
        @keyframes marqueeSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-${TOTAL_WIDTH}px); }
        }
        .marquee-track {
          animation: marqueeSlide ${DURATION}s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div
            style={{
              background: "#00B67A",
              color: "white",
              padding: "4px 14px",
              borderRadius: "4px",
              fontWeight: 800,
              fontSize: "1.4rem",
              letterSpacing: "-0.5px",
            }}
          >
            Trustpilot
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              style={{
                background: "#00B67A",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Star size={18} fill="white" stroke="white" strokeWidth={0} />
            </div>
          ))}
        </div>

        <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0B1D3A", marginBottom: "4px" }}>
          TrustScore 4.9 out of 5
        </p>
        <p style={{ fontSize: "0.88rem", color: "#888" }}>
          Based on 3,100+ verified reviews on{" "}
          <a
            href="https://www.trustpilot.com/review/industryrockstar.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00B67A", textDecoration: "underline" }}
          >
            industryrockstar.com
          </a>
        </p>
      </div>

      {/* Marquee */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left fade mask */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #EEF2FF 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade mask */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #EEF2FF 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Sliding track */}
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: `${GAP}px`,
            paddingLeft: `${GAP}px`,
            paddingBottom: "8px",
            width: "max-content",
          }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10 px-4">
        <a
          href="https://www.trustpilot.com/review/industryrockstar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
          style={{
            background: "#00B67A",
            color: "white",
            fontSize: "0.95rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,182,122,0.3)",
          }}
        >
          View All Reviews on Trustpilot
          <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
}
