import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HerbsHomepage from "./Pages/HerbsHomePage";
import FarmerPanel from "./Pages/FarmerBegin";
import NewPage from "./Pages/FarmerStage"
import FarmerSignupForm from "./Components/FarmerLogin";
import HerbalSupplyChainMiddleman from "./Pages/MiddleManStage";
import GovernmentPortal from "./Pages/HeroSection";
import PanelSection from "./Components/Panels";
import HerbalLabPanel from "./Pages/AyushPanel";
import HerbalManufacturerPanel from "./Pages/ManuPanel";
import AshwagandhaTraceability from "./Pages/ProductMap";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GovernmentPortal />} />
        <Route path="/login" element={<PanelSection />} />
        <Route path="/ayushPanel" element={<HerbalLabPanel />} />
        <Route path="/manufacturerPanel" element={<HerbalManufacturerPanel />} />
        <Route path="/about" element={<HerbsHomepage />} />
        <Route path="/farmerPanel" element={<FarmerPanel />} />
        <Route path="/farmerPanel/login" element={<FarmerSignupForm />} />
        <Route path="/farmerPanel/farmerStage" element={<NewPage />} />
        <Route path="/middlemanPanel" element={<HerbalSupplyChainMiddleman />} />
        <Route path="/342er3" element={<AshwagandhaTraceability />} />
      </Routes>
    </Router>
  );
}

export default App