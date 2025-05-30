import  { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';



export default function Summarycard() {
    const { incomeTotal, expenseTotal, balance } = useContext(TransactionContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
      <div className="bg-green-500 p-4 rounded-xl shadow">
        <h3 className="text-lg">Income</h3>
        <p className="text-2xl font-bold">₹{incomeTotal.toFixed(2)}</p>
      </div>
      <div className="bg-red-500 p-4 rounded-xl shadow">
        <h3 className="text-lg">Expense</h3>
        <p className="text-2xl font-bold">₹{expenseTotal.toFixed(2)}</p>
      </div>
      <div className="bg-blue-600 p-4 rounded-xl shadow">
        <h3 className="text-lg">Balance</h3>
        <p className="text-2xl font-bold">₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
}
