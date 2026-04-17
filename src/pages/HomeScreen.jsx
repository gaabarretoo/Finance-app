import TransactionItem from "../components/TransactionItem";
import "./HomeScreen.css";

const transactions = [
  { id: 1, icon: <img width="20" height="20" src="https://img.icons8.com/material-outlined/20/shopping-cart--v1.png" alt="shopping-cart--v1"/>, name: "Mercado Extra",    date: "Hoje, 10:24",  amount: "-R$ 156", type: "expense" },
  { id: 2, icon: <img width="16" height="16" src="https://img.icons8.com/ios-filled/16/business.png" alt="business"/>, name: "Salário",           date: "Ontem",        amount: "+R$ 5.200", type: "income" },
  { id: 3, icon: <img width="20" height="20" src="https://img.icons8.com/material-rounded/20/espresso-cup--v1.png" alt="espresso-cup--v1"/>, name: "Café Amazon",       date: "12 Abr",       amount: "-R$ 18",  type: "expense" },
  { id: 4, icon: <img width="20" height="20" src="https://img.icons8.com/material-rounded/20/bus.png" alt="bus"/>, name: "Transporte",        date: "11 Abr",       amount: "-R$ 9",   type: "expense" },
  { id: 5, icon: <img width="20" height="20" src="https://img.icons8.com/ios-filled/20/netflix--v2.png" alt="netflix--v2"/>, name: "Netflix",           date: "10 Abr",       amount: "-R$ 45",  type: "expense" },
];

const quickActions = [
  { icon: <img width="20" height="20" src="https://img.icons8.com/ios-filled/20/up--v1.png" alt="up--v1"/>, label: "Enviar" },
  { icon: <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/down--v1.png" alt="down--v1"/>, label: "Receber" },
  { icon: <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3"/>, label: "Mais" },
];

export default function HomeScreen() {
  return (
    <div className="home">
      <div className="home-header">
        <p className="greeting">Bom dia,</p>
        <h1 className="username">Gabriely Barreto</h1>
      </div>

      <div className="balance-card">
        <p className="bal-label">Saldo total</p>
        <p className="bal-amount">R$ 12.480</p>
        <div className="bal-row">
          <div className="bal-stat">
            <span className="bal-stat-label">Receitas</span>
            <span className="bal-stat-value income">+R$ 5.200</span>
          </div>
          <div className="bal-stat">
            <span className="bal-stat-label">Despesas</span>
            <span className="bal-stat-value expense">-R$ 2.870</span>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        {quickActions.map((a) => (
          <button key={a.label} className="action-btn">
            <span className="action-icon">{a.icon}</span>
            <span className="action-label">{a.label}</span>
          </button>
        ))}
      </div>

      <div className="section-header">
        <h2 className="section-title">Recentes</h2>
        <button className="see-all">Ver tudo</button>
      </div>

      <div className="tx-list">
        {transactions.map((tx) => (
          <TransactionItem key={tx.id} {...tx} />
        ))}
      </div>
    </div>
  );
}
