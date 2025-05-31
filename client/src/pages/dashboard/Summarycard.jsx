import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const CARD_STYLES = [
  {
    title: "Income",
    gradient: "from-green-800 via-green-600 to-green-400",
    icon: (
      <svg className="w-8 h-8 text-green-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 19V6M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    valueKey: "incomeTotal",
  },
  {
    title: "Expense",
    gradient: "from-red-800 via-pink-600 to-yellow-500",
    icon: (
      <svg className="w-8 h-8 text-red-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 5v14M19 12H5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    valueKey: "expenseTotal",
  },
  {
    title: "Balance",
    gradient: "from-purple-800 via-pink-600 to-red-500",
    icon: (
      <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    valueKey: "balance",
  },
];

export default function SummaryCard() {
  const { incomeTotal, expenseTotal, balance } = useContext(TransactionContext);
  const values = { incomeTotal, expenseTotal, balance };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 py-6">
      {CARD_STYLES.map((card) => (
        <div
          key={card.title}
          className={`relative p-6 rounded-3xl shadow-xl border border-white/10
            bg-gradient-to-br ${card.gradient} group transform hover:scale-[1.03] transition duration-300
            before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-lg before:rounded-3xl before:z-0`}
        >
          <div className="relative z-10 flex items-center gap-4">
            <div className="bg-white/10 group-hover:bg-white/20 rounded-full p-3 shadow-md border border-white/10 transition-transform duration-300 group-hover:scale-110">
              {card.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white tracking-wider drop-shadow-lg">{card.title}</h3>
              <p className="text-3xl font-bold text-white tracking-tight drop-shadow-md">
                ₹{values[card.valueKey]?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
