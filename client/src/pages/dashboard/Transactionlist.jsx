import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Swal from "sweetalert2";

export default function Transactionlist() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this transaction?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = transactions.filter((tx) => tx.id !== id);
        localStorage.setItem("transactions", JSON.stringify(updated));
        typeof setTransactions === 'function' ? setTransactions(updated) : window.location.reload();
        Swal.fire("Deleted!", "Your transaction has been deleted.", "success");
      }
    });
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400 text-lg font-semibold py-8">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="p-2 md:p-6 min-h-screen text-white bg-gradient-to-br from-[#18181b] via-[#232323] to-[#1a2e1a]">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-400 drop-shadow-lg">Transaction History</h2>
      <div className="space-y-5 max-w-4xl mx-auto">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-green-700/30 shadow-xl hover:scale-[1.015] hover:border-green-400/60 transition-all duration-200"
          >
            <div>
              <div className="font-semibold text-lg text-white">{tx.notes || tx.category}</div>
              <div className="text-sm text-green-300 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {tx.category} • {new Date(tx.date).toLocaleDateString()}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className={`font-bold text-lg ${tx.type === "income" ? "text-green-400" : "text-red-400"}`}>
                {tx.type === "income" ? "+" : "-"}₹{tx.amount}
              </span>
              <button
                onClick={() => handleDelete(tx.id)}
                className="p-2 rounded-full bg-green-400/10 hover:bg-green-400/30 text-green-400 hover:text-green-500 border border-green-400/20 hover:border-green-400/50 transition-colors"
                title="Delete"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
