import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { formatDate, formatCurrency } from '../../utils/format';
import { Trash2, ArrowUpRight, ArrowDownRight, Frown } from 'lucide-react';
import clsx from 'clsx';

export const TransactionList = () => {
  const { transactions, loading, deleteTransaction } = useContext(TransactionContext);

  if (loading) {
    return (
      <div className="bg-card border border-border shadow-sm rounded-2xl p-6 min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <h3 className="text-xl font-bold">Recent Transactions</h3>
      </div>
      
      {transactions.length === 0 ? (
        <div className="p-12 text-center flex flex-col items-center">
          <div className="bg-secondary/50 p-4 rounded-full mb-4">
            <Frown className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">No transactions found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/30 text-muted-foreground text-sm border-b border-border/50">
                <th className="font-medium p-4 font-normal">Transaction</th>
                <th className="font-medium p-4 font-normal">Category</th>
                <th className="font-medium p-4 font-normal">Date</th>
                <th className="font-medium p-4 font-normal">Amount</th>
                <th className="font-medium p-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-secondary/20 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={clsx(
                        "p-2 rounded-xl",
                        txn.type === 'income' ? "bg-green-500/10" : "bg-red-500/10"
                      )}>
                        {txn.type === 'income' 
                          ? <ArrowUpRight className="h-4 w-4 text-green-500" />
                          : <ArrowDownRight className="h-4 w-4 text-red-500" />
                        }
                      </div>
                      <span className="font-medium text-foreground">{txn.description}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-secondary px-3 py-1 rounded-full text-xs font-medium text-secondary-foreground border border-border">
                      {txn.category}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground text-sm">
                    {formatDate(txn.date)}
                  </td>
                  <td className="p-4">
                    <span className={clsx(
                      "font-semibold",
                      txn.type === 'income' ? "text-green-500" : "text-foreground"
                    )}>
                      {txn.type === 'income' ? '+' : '-'}{formatCurrency(txn.amount)}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => deleteTransaction(txn.id)}
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                      title="Delete Transaction"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
