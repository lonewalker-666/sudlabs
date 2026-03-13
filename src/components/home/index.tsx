import BuildTrust from "./components/buildTrust";
import FloatingForm from "./components/floatingForm";
import HeroSection from "./components/hero";
import MeetingDiverse from "./components/meetingDiverse";
import OurInnovations from "./components/ourInnovations";
import WhatWeDo from "./components/whatWeDo";


const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <WhatWeDo />
      <OurInnovations />
      <BuildTrust/>
      <MeetingDiverse/>
      <FloatingForm/>
    </div>
  );
};

export default Home;