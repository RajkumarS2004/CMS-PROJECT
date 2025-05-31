import { useContext } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { TransactionContext } from '../../context/TransactionContext';

const COLORS = [
    '#EF4444', '#F97316', '#EAB308', '#10B981', '#3B82F6', '#8B5CF6'
];

export default function Expensechart() {
    const { transactions } = useContext(TransactionContext);

    // Pie chart for expense by category
    const expenseData = transactions
        .filter((t) => t.type === 'expense')
        .reduce((acc, curr) => {
            const category = curr.category;
            const existing = acc.find((item) => item.name === category);
            if (existing) {
                existing.value += curr.amount;
            } else {
                acc.push({ name: category, value: curr.amount });
            }
            return acc;
        }, []);

    // Pie chart for income vs expense
    const incomeTotal = transactions
        .filter((t) => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    const expenseTotal = transactions
        .filter((t) => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
    const incomeVsExpenseData = [
        { name: 'Income', value: incomeTotal },
        { name: 'Expense', value: expenseTotal }
    ];

    // Updated color palette for a more modern and vibrant look
    const UPGRADED_COLORS = [
        '#22d3ee', // cyan-400
        '#a78bfa', // purple-400
        '#f472b6', // pink-400
        '#facc15', // yellow-400
        '#34d399', // green-400
        '#60a5fa', // blue-400
        '#fb7185', // rose-400
        '#fbbf24', // amber-400
        '#38bdf8', // sky-400
        '#818cf8', // indigo-400
    ];

    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 bg-gradient-to-br from-[#18181b] via-[#232323] to-[#22223b] rounded-2xl shadow-lg border border-green-900/30 space-y-10">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-4 tracking-wide">
                Income vs Expense
            </h2>
            <div className="flex justify-center items-center bg-gradient-to-tr from-[#232323] to-[#18181b] rounded-xl shadow p-4 mb-8 border border-green-900/20">
                <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                        <Pie
                            data={incomeVsExpenseData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={70}
                            label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                            stroke="#18181b"
                            strokeWidth={2}
                        >
                            {incomeVsExpenseData.map((_, index) => (
                                <Cell key={`cell-income-expense-${index}`} fill={UPGRADED_COLORS[index % UPGRADED_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ background: '#232323', borderRadius: 12, border: '1px solid #22223b', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                            itemStyle={{ color: '#fff', fontWeight: 500 }} // changed to white
                        />
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <h2 className="text-2xl font-bold text-center text-green-800 mb-4 tracking-wide">
                Expense by Category
            </h2>
            <div className="flex justify-center items-center bg-gradient-to-tr from-[#232323] to-[#18181b] rounded-xl shadow p-4 border border-green-900/20">
                <ResponsiveContainer width="100%" height={260}>
                    <PieChart>
                        <Pie
                            data={expenseData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={95}
                            label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                            stroke="#18181b"
                            strokeWidth={2}
                        >
                            {expenseData.map((_, index) => (
                                <Cell key={`cell-category-${index}`} fill={UPGRADED_COLORS[index % UPGRADED_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ background: '#232323', borderRadius: 12, border: '1px solid #22223b', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                            itemStyle={{ color: '#fff', fontWeight: 500 }} // changed to white
                        />
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
