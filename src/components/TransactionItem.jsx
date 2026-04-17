import "./TransactionItem.css";

export default function TransactionItem({ icon, name, date, amount, type }) {
  return (
    <div className="tx-item">
      <div className="tx-icon">{icon}</div>
      <div className="tx-info">
        <span className="tx-name">{name}</span>
        <span className="tx-date">{date}</span>
      </div>
      <span className={`tx-amount ${type}`}>{amount}</span>
    </div>
  );
}
