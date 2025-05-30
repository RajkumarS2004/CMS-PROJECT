import  { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';



export default function Summarycard() {
    const { incomeTotal, expenseTotal, balance } = useContext(TransactionContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
      <div className="bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-white tracking-wide">Income</h3>
        <p className="text-3xl font-extrabold">₹{incomeTotal.toFixed(2)}</p>
      </div>
      <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-white tracking-wide">Expense</h3>
        <p className="text-3xl font-extrabold">₹{expenseTotal.toFixed(2)}</p>
      </div>
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-white tracking-wide">Balance</h3>
        <p className="text-3xl font-extrabold">₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
}
