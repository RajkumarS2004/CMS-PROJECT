import  { useContext } from "react";
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
      confirmButtonColor: "#fb6a09",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = transactions.filter((tx) => tx.id !== id);
        localStorage.setItem("transactions", JSON.stringify(updated));
        // Use setTransactions if available, otherwise fallback to window.location.reload()
        if (typeof setTransactions === 'function') {
          setTransactions(updated);
        } else {
          window.location.reload();
        }
        Swal.fire("Deleted!", "Your transaction has been deleted.", "success");
      }
    });
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 min-h-screen p-4 rounded-xl">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between bg-white rounded-lg p-4 mb-3 shadow border border-gray-200">
          <div>
            <div className="font-semibold text-black">{tx.notes || tx.category}</div>
            <div className="text-sm text-gray-600">{tx.category} • {new Date(tx.date).toLocaleDateString()}</div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`font-bold ${tx.type === "income" ? "text-green-600" : "text-red-600"}`}>
              {tx.type === "income" ? "+" : "-"}₹{tx.amount}
            </span>
            <button
              onClick={() => handleDelete(tx.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}