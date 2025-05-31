import { useState, useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';

export default function Transactionform() {
  const { addTransaction } = useContext(TransactionContext);

  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [accountType, setAccountType] = useState('cash');
  const [category, setCategory] = useState('Salary');
  const [customCategory, setCustomCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');

  const incomeCategories = ['Salary', 'Saving'];
  const expenseCategories = ['Food', 'Travel', 'Rent', 'Shopping', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      accountType: type === 'expense' ? accountType : null,
      category: category === 'Other' ? customCategory : category,
      notes,
      date,
    };
    addTransaction(newTransaction);
    setAmount('');
    setAccountType('cash');
    setCategory(type === 'income' ? 'Salary' : 'Food');
    setCustomCategory('');
    setNotes('');
    setDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] rounded-3xl shadow-2xl border border-blue-700/80"
    >
      <h2 className="text-3xl font-extrabold text-blue-400 text-center mb-6 tracking-widest">
        Add Transaction
      </h2>

      {/* Transaction Type */}
      <div className="flex gap-12 justify-center mb-6">
        <label className="flex items-center cursor-pointer select-none">
          <input
            type="radio"
            value="income"
            checked={type === 'income'}
            onChange={() => setType('income')}
            className="accent-blue-400 mr-3"
          />
          <span className="text-blue-300 font-semibold">Income</span>
        </label>
        <label className="flex items-center cursor-pointer select-none">
          <input
            type="radio"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
            className="accent-red-500 mr-3"
          />
          <span className="text-red-400 font-semibold">Expense</span>
        </label>
      </div>

      {/* Amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="w-full bg-[#0f172a] text-blue-300 placeholder-blue-600 border border-blue-600 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      {/* Account Type (only for expense) */}
      {type === 'expense' && (
        <select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="w-full bg-[#0f172a] text-blue-300 border border-blue-600 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
        </select>
      )}

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full bg-[#0f172a] text-blue-300 border border-blue-600 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        {(type === 'income' ? incomeCategories : expenseCategories).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Custom Category if 'Other' */}
      {category === 'Other' && (
        <input
          type="text"
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          placeholder="Enter custom category"
          className="w-full bg-[#0f172a] text-blue-300 placeholder-blue-600 border border-blue-600 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      )}

      {/* Notes */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add a note (optional)"
        className="w-full bg-[#0f172a] text-blue-300 placeholder-blue-600 border border-blue-600 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        rows={3}
      ></textarea>

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full bg-[#0f172a] text-blue-300 border border-blue-600 rounded-3xl px-6 py-4 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 rounded-3xl font-extrabold shadow-lg hover:from-blue-900 hover:to-blue-700 transition-all tracking-wide"
      >
        Add Transaction
      </button>
    </form>
  );
}
