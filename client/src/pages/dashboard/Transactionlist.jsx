import React from "react";
import Transactionitem from "./Transactionitem";

export default function TransactionList({ transactions, onDelete }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        No transactions found.
      </div>
    );
  }

  return (
    <div>
      {transactions.map((tx) => (
        <Transactionitem
          key={tx.id}
          title={tx.title}
          amount={tx.amount}
          type={tx.type}
          category={tx.category}
          date={tx.date}
          onDelete={() => onDelete(tx.id)}
        />
      ))}
    </div>
  );
}