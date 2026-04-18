import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { formatCurrency } from '../utils/format';
import { Tags } from 'lucide-react';
import clsx from 'clsx';

const Categories = () => {
  const { transactions } = useContext(TransactionContext);

  const categoryTotals = transactions.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = { expense: 0, income: 0 };
    }
    acc[curr.category][curr.type] += Number(curr.amount);
    return acc;
  }, {});

  const sortedCategories = Object.keys(categoryTotals).sort((a, b) => 
    (categoryTotals[b].expense + categoryTotals[b].income) - 
    (categoryTotals[a].expense + categoryTotals[a].income)
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground mt-1">Breakdown of your transaction volume by category.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCategories.map(cat => (
          <div key={cat} className="bg-card border border-border shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Tags className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{cat}</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Income</span>
                <span className="font-medium text-green-500">{formatCurrency(categoryTotals[cat].income)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Expenses</span>
                <span className="font-medium text-destructive">{formatCurrency(categoryTotals[cat].expense)}</span>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden mt-2 relative">
                <div 
                  className={clsx("h-full absolute left-0 top-0", categoryTotals[cat].expense > categoryTotals[cat].income ? "bg-destructive/80" : "bg-primary/80")}
                  style={{ 
                    width: `${Math.min(100, Math.max(0, (categoryTotals[cat].expense / ((categoryTotals[cat].expense + categoryTotals[cat].income) || 1)) * 100))}%` 
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {sortedCategories.length === 0 && (
          <div className="col-span-full bg-card border border-border shadow-sm rounded-2xl p-12 text-center flex flex-col items-center">
            <div className="bg-secondary/50 p-4 rounded-full mb-4">
              <Tags className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No categories to display.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
