import "./GoalCard.css";

export default function GoalCard({ icon, name, current, target, color }) {
  const pct = Math.round((current / target) * 100);

  const fmt = (val) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="goal-card">
      <div className="goal-header">
        <span className="goal-name">
          <span className="goal-icon">{icon}</span>
          {name}
        </span>
        <span className="goal-pct">{pct}%</span>
      </div>
      <div className="goal-track">
        <div
          className="goal-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <div className="goal-amounts">
        <span>{fmt(current)} guardados</span>
        <span>Meta: {fmt(target)}</span>
      </div>
    </div>
  );
}
