import imgKaneopgn2 from "figma:asset/f85193f3c9694f7950bbebddad3c7904838c8f87.png";
import imgAlesss2 from "figma:asset/b6ebf600b3575babfcfd03375e9501ca658397b5.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative">
      <p className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#0d1353] text-[0px] tracking-[-2.5223px] w-full whitespace-pre-wrap">
        <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[normal] text-[63.056px]">{`Kane & Alessia  `}</span>
        <span className="leading-[normal] text-[66px]">Minkus</span>
      </p>
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[38.657px] text-[transparent] tracking-[-1.5463px] w-full" style={{ backgroundImage: "linear-gradient(147.642deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)" }}>
        Award-winning serial entrepreneurs, International bestselling authors, and world-renowned business mentors.
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[547.117px] ml-0 mt-0 relative row-1 w-[407.871px]" data-name="kaneopgn 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[156.45%] left-[-128.47%] max-w-none top-[-26.54%] w-[315.54%]" src={imgKaneopgn2} />
        </div>
      </div>
      <div className="col-1 h-[547.117px] ml-[239.78px] mt-0 relative row-1 w-[357.983px]" data-name="alesss 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.54%] left-[-0.35%] max-w-none top-[-0.01%] w-[100.65%]" src={imgAlesss2} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[114px] items-center relative shrink-0 w-[1364.061px]">
      <Frame />
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.7px] text-[transparent] text-center tracking-[-1.988px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(139.172deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-8.84734deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)" }}>
        50,000+
      </p>
    </div>
  );
}

function Stat() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Stat">
      <Frame1 />
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#0d1353] text-[16.57px] text-center tracking-[-0.1657px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Business Owners `}</p>
        <p>Trained Monthly</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[205px]">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.7px] text-[transparent] text-center tracking-[-1.988px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(118.954deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-18.0354deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)" }}>
        5M+
      </p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Stat">
      <Frame5 />
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#0d1353] text-[16.57px] text-center tracking-[-0.1657px] w-[min-content]">
        <p className="mb-0">Professionals Impacted</p>
        <p>over 20 years</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[205px]">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.7px] text-[transparent] text-center tracking-[-1.988px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(131.188deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-11.6327deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)" }}>
        5500+
      </p>
    </div>
  );
}

function Stat2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Stat">
      <Frame2 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#0d1353] text-[16.57px] text-center tracking-[-0.1657px] w-[min-content]">Online/In Person Presentations in 80 Countries</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[205px]">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.7px] text-[transparent] text-center tracking-[-1.988px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(117.447deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-19.1285deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)" }}>
        20+
      </p>
    </div>
  );
}

function Stat3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Stat">
      <Frame3 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#0d1353] text-[16.57px] text-center tracking-[-0.1657px] w-[min-content]">Portfolio companies dedicated to serving business owners globally</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[205px]">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.7px] text-[transparent] text-center tracking-[-1.988px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(117.447deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-19.1285deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)" }}>
        30+
      </p>
    </div>
  );
}

function Stat4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Stat">
      <Frame4 />
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#0d1353] text-[16.57px] text-center tracking-[-0.1657px] w-[min-content]">
        <p className="mb-0">Company Portfolio</p>
        <p>Valued at $500M</p>
      </div>
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="bg-[#f5f4fc] h-[251px] relative shrink-0 w-full" data-name="Stats container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[53px] items-start justify-center px-[200px] py-[44px] relative size-full">
          <Stat />
          <Stat1 />
          <Stat2 />
          <Stat3 />
          <Stat4 />
        </div>
      </div>
    </div>
  );
}

export default function KaneAndAlessia() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-end pt-[100px] relative size-full" data-name="kane and alessia">
      <Frame6 />
      <StatsContainer />
    </div>
  );
}