import "./InsightsScreen.css";

const categories = [
  { name: "Alimentação", value: 890,  color: "var(--clr-green)",  pct: 85 },
  { name: "Transporte",  value: 420,  color: "var(--clr-blue)",   pct: 40 },
  { name: "Lazer",       value: 310,  color: "var(--clr-purple)", pct: 30 },
  { name: "Assinaturas", value: 180,  color: "var(--clr-text-2)", pct: 17 },
  { name: "Outros",      value: 130,  color: "var(--clr-red)",    pct: 12 },
];

const months = ["Jan", "Fev", "Mar", "Abr"];
const barData = [
  { income: 45, expense: 28 },
  { income: 52, expense: 34 },
  { income: 40, expense: 30 },
  { income: 58, expense: 36 },
];

const fmt = (val) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(val);

export default function InsightsScreen() {
  const total = categories.reduce((s, c) => s + c.value, 0);

  return (
    <div className="insights">
      <div className="insights-header">
        <h1 className="insights-title">Insights</h1>
        <p className="insights-sub">Comparativo — Mar vs Abr</p>
      </div>

      {/* Bar chart */}
      <div className="chart-wrap">
        <div className="chart-bars">
          {barData.map((d, i) => (
            <div key={i} className="chart-group">
              <div className="bar-pair">
                <div className="bar income" style={{ height: `${d.income}%` }} />
                <div className="bar expense" style={{ height: `${d.expense}%` }} />
              </div>
              <span className="bar-label">{months[i]}</span>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <span className="legend-item"><span className="dot income-dot" />Receita</span>
          <span className="legend-item"><span className="dot expense-dot" />Gasto</span>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="section-header">
        <h2 className="section-title">Por categoria</h2>
        <span className="total-label">{fmt(total)} total</span>
      </div>

      <div className="cat-list">
        {categories.map((c, i) => (
          <div
            key={c.name}
            className="cat-item"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="cat-dot" style={{ background: c.color }} />
            <span className="cat-name">{c.name}</span>
            <div className="cat-right">
              <span className="cat-value">{fmt(c.value)}</span>
              <div className="cat-bar-track">
                <div
                  className="cat-bar-fill"
                  style={{ width: `${c.pct}%`, background: c.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
