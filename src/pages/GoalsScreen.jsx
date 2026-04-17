import GoalCard from "../components/GoalCard";
import "./GoalsScreen.css";

const goals = [
  {
    id: 1,
    icon: <img width="25" height="25" src="https://img.icons8.com/sf-regular/48/siren.png" alt="siren"/>,
    name: "Reserva de emergência",
    current: 8200,
    target: 10000,
    color: "var(--clr-green)",
  },
  {
    id: 2,
    icon: <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/airplane-mode-on.png" alt="airplane-mode-on"/>,
    name: "Viagem Nordeste",
    current: 2750,
    target: 5000,
    color: "var(--clr-blue)",
  },
  {
    id: 3,
    icon: <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/laptop.png" alt="laptop"/>,
    name: "Notebook novo",
    current: 750,
    target: 2500,
    color: "var(--clr-purple)",
  },
];

const stats = [
  { value: "68%",    label: "Progresso geral" },
  { value: "R$ 11,7k", label: "Já guardado" },
  { value: "2 meses",  label: "Projeção" },
];

export default function GoalsScreen() {
  return (
    <div className="goals">
      <div className="goals-header">
        <h1 className="goals-title">Metas</h1>
        <p className="goals-sub">Abril 2026 — {goals.length} ativas</p>
      </div>

      <div className="stats-row">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="goals-list">
        {goals.map((g, i) => (
          <div key={g.id} style={{ animationDelay: `${i * 0.07}s` }}>
            <GoalCard {...g} />
          </div>
        ))}
      </div>

      <div className="goals-add-wrap">
        <button className="add-goal-btn">
          <span>+</span> Nova meta
        </button>
      </div>
    </div>
  );
}
