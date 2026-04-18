import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend 
} from 'recharts';

const COLORS = ['#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#22c55e', '#0ea5e9', '#3b82f6'];

const Analytics = () => {
  const { transactions, loading } = useContext(TransactionContext);

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Calculate expenses by category for Pie Chart
  const expenseTransactions = transactions.filter(t => t.type === 'expense');
  
  const expensesByCategory = expenseTransactions.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
    return acc;
  }, {});

  const pieData = Object.keys(expensesByCategory).map(key => ({
    name: key,
    value: expensesByCategory[key]
  })).sort((a, b) => b.value - a.value);

  // Calculate income vs expense by month for Bar Chart
  const monthlyDataMap = transactions.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const month = date.toLocaleString('default', { month: 'short', year: 'numeric' });
    
    if (!acc[month]) {
      acc[month] = { name: month, Income: 0, Expense: 0 };
    }
    
    if (curr.type === 'income') {
      acc[month].Income += Number(curr.amount);
    } else {
      acc[month].Expense += Number(curr.amount);
    }
    return acc;
  }, {});

  const barData = Object.values(monthlyDataMap).reverse();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">Visualize your financial habits and trends.</p>
      </header>

      {transactions.length === 0 ? (
        <div className="bg-card border border-border shadow-sm rounded-2xl p-12 text-center">
          <p className="text-muted-foreground">Not enough data to display analytics.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border shadow-sm rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-6">Expenses by Category</h3>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    formatter={(value) => `${value.toFixed(2)} FCFA`}
                    contentStyle={{ borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-6">Income vs Expenses</h3>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <RechartsTooltip 
                    formatter={(value) => `${value.toFixed(2)} FCFA`}
                    cursor={{fill: 'var(--secondary)'}}
                    contentStyle={{ borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)' }}
                  />
                  <Legend />
                  <Bar dataKey="Income" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  <Bar dataKey="Expense" fill="#f43f5e" radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
