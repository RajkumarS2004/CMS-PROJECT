import React from "react";
import Swal from "sweetalert2";

export default function Transactionitem({ title, amount, type, category, date, onDelete }) {
  const handleDelete = () => {
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
        onDelete();
        Swal.fire("Deleted!", "Your transaction has been deleted.", "success");
      }
    });
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3 shadow">
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-gray-400">{category} • {new Date(date).toLocaleDateString()}</div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`font-bold ${type === "income" ? "text-green-400" : "text-red-400"}`}>
          {type === "income" ? "+" : "-"}₹{amount}
        </span>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 transition-colors"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}