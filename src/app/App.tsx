import { HeroSection } from "./components/HeroSection";
import { KaneAlessiaSection } from "./components/KaneAlessiaSection";
import { LogoStrip } from "./components/LogoStrip";
import { FreeGiftSection } from "./components/FreeGiftSection";
import { CelebsSection } from "./components/CelebsSection";
import { InfoSection1 } from "./components/InfoSection1";
import { TrustpilotSection } from "./components/TrustpilotSection";
import { WhatYouLearn } from "./components/WhatYouLearn";
import { ExclusiveTopics } from "./components/ExclusiveTopics";
import { WhoIsThisFor } from "./components/WhoIsThisFor";
import { MessageFromFounders } from "./components/MessageFromFounders";
import { MeetTheFounders } from "./components/MeetTheFounders";
import { VideoTestimonialsSection } from "./components/VideoTestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { TwoChoices } from "./components/TwoChoices";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroSection />
      <KaneAlessiaSection />
      <LogoStrip />
      <FreeGiftSection />
      <CelebsSection />
      <InfoSection1 />
      <TrustpilotSection />
      <WhatYouLearn />
      <ExclusiveTopics />
      <WhoIsThisFor />
      <MessageFromFounders />
      <MeetTheFounders />
      <VideoTestimonialsSection />
      <FAQSection />
      <TwoChoices />
      <FinalCTA />

      {/* Footer */}
      <footer
        style={{
          background: "#040A15",
          padding: "32px 16px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          borderTop: "1px solid rgba(214,51,132,0.12)",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 8,
          }}
        >
          AI Consultant Summit 2026
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.7 }}>
          © 2026 AI Consultant Academy · All Rights Reserved
          <br />
          <span style={{ fontSize: "0.72rem" }}>
            Privacy Policy · Terms of Service · Disclaimer: Results may vary. Testimonials represent individual experiences.
          </span>
        </p>
      </footer>
    </div>
  );
}