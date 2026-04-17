import { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import GoalsScreen from "./pages/GoalsScreen";
import InsightsScreen from "./pages/InsightsScreen";
import NavBar from "./components/NavBar";
import "./styles/global.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":     return <HomeScreen />;
      case "goals":    return <GoalsScreen />;
      case "insights": return <InsightsScreen />;
    }
  };

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <div className="status-bar">
          <span>9:41</span>
          <span className="status-icons">●●●</span>
        </div>
        <div className="screen-content">{renderScreen()}</div>
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}
