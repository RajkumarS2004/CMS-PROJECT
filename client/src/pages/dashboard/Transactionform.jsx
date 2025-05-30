import  { useState, useContext } from 'react';
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

  // Category options based on type
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
      date
    };
    addTransaction(newTransaction);
    // Reset form
    setAmount('');
    setAccountType('cash');
    setCategory(type === 'income' ? 'Salary' : 'Food');
    setCustomCategory('');
    setNotes('');
    setDate('');
  };

  return (
     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add Transaction</h2>

      {/* Transaction Type */}
      <div className="flex gap-4 justify-center">
        <label className="flex items-center">
          <input
            type="radio"
            value="income"
            checked={type === 'income'}
            onChange={() => setType('income')}
            className="mr-2"
          />
          Income
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
            className="mr-2"
          />
          Expense
        </label>
      </div>

      {/* Amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Account Type (only for expense) */}
      {type === 'expense' && (
        <select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none"
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
        className="w-full border rounded p-2 focus:outline-none"
      >
        {(type === 'income' ? incomeCategories : expenseCategories).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Custom Category if 'Other' selected */}
      {category === 'Other' && (
        <input
          type="text"
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          placeholder="Enter custom category"
          className="w-full border rounded p-2 focus:outline-none"
        />
      )}

      {/* Notes */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add a note (optional)"
        className="w-full border rounded p-2 focus:outline-none"
      ></textarea>

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded p-2 focus:outline-none"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Transaction
      </button>
    </form>
  );
};
