import "./NavBar.css";

const tabs = [
  { id: "home",     icon: <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/home.png" alt="home"/>, label: "Home" },
  { id: "goals",    icon: <img width="20" height="20" src="https://img.icons8.com/ios/20/final-state.png" alt="final-state"/>, label: "Metas" },
  { id: "insights", icon: <img width="16" height="16" src="https://img.icons8.com/ios-filled/50/up-right-arrow.png" alt="up-right-arrow"/>, label: "Insights" },
];

export default function NavBar({ activeTab, onTabChange }) {
  return (
    <nav className="nav-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
          {activeTab === tab.id && <span className="nav-dot" />}
        </button>
      ))}
    </nav>
  );
}
