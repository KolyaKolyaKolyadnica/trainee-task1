import "./App.css";
import StartSection from "./sections/StartSection/StartSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import PartnersSection from "./sections/PartnersSection/PartnersSection";
import IpdcSection from "./sections/IpdcSection/IpdcSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ResultsSection from "./sections/ResultsSection/ResultsSection";
import Newsletter from "./sections/Newsletter/Newsletter";
import FooterSection from "./sections/FooterSection/FooterSection";

function App() {
  return (
    <div className="App">
      <StartSection />
      <SkillsSection />
      <PartnersSection />
      <IpdcSection />
      <ServicesSection />
      <ResultsSection />
      <Newsletter />
      <FooterSection />
    </div>
  );
}

export default App;
