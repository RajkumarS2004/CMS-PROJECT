import  { useContext } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { TransactionContext } from '../../context/TransactionContext';
const COLORS = ['#EF4444', '#F97316', '#EAB308', '#10B981', '#3B82F6', '#8B5CF6'];

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

    return (
        <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-xl shadow space-y-8">
            <h2 className="text-xl font-semibold text-center mb-4">Income vs Expense</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={incomeVsExpenseData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                    >
                        {incomeVsExpenseData.map((_, index) => (
                            <Cell key={`cell-income-expense-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>

            <h2 className="text-xl font-semibold text-center mb-4">Expense Breakdown by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={expenseData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                    >
                        {expenseData.map((_, index) => (
                            <Cell key={`cell-category-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
