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
      className="max-w-xl mx-auto p-8 bg-gradient-to-br from-[#18181b] via-[#22223b] to-[#27272a] rounded-3xl shadow-2xl border border-green-700/80"
    >
      <h2 className="text-3xl font-extrabold text-green-400 text-center mb-6 tracking-widest">
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
            className="accent-green-400 mr-3"
          />
          <span className="text-green-300 font-semibold">Income</span>
        </label>
        <label className="flex items-center cursor-pointer select-none">
          <input
            type="radio"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
            className="accent-red-400 mr-3"
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
        className="w-full bg-[#18181b] text-green-300 placeholder-green-600 border border-green-700 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        required
      />

      {/* Account Type (only for expense) */}
      {type === 'expense' && (
        <select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="w-full bg-[#18181b] text-green-300 border border-green-700 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
        className="w-full bg-[#18181b] text-green-300 border border-green-700 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
          className="w-full bg-[#18181b] text-green-300 placeholder-green-600 border border-green-700 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      )}

      {/* Notes */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add a note (optional)"
        className="w-full bg-[#18181b] text-green-300 placeholder-green-600 border border-green-700 rounded-3xl px-6 py-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
        rows={3}
      ></textarea>

      {/* Date with Custom Icon */}
      <div className="relative mb-8">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-[#18181b] text-green-300 border border-green-700 rounded-3xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-green-500 transition appearance-none"
          required
        />
        <svg
          className="w-6 h-6 absolute right-5 top-1/2 transform -translate-y-1/2 text-green-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white py-4 rounded-3xl font-extrabold shadow-lg hover:from-green-900 hover:to-green-700 transition-all tracking-wide"
      >
        Add Transaction
      </button>
    </form>
  );
}
