import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { formatCurrency } from '../../utils/format';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

export const BalanceCard = () => {
  const { totals } = useContext(TransactionContext);

  return (
    <div className="bg-gradient-to-br from-primary to-indigo-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
      <div className="absolute -right-10 -top-10 bg-white/10 w-40 h-40 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
      <div className="absolute -left-10 -bottom-10 bg-primary/30 w-40 h-40 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end z-10 relative space-y-6 md:space-y-0">
        <div>
          <p className="text-white/70 font-medium text-lg flex items-center gap-2 mb-2">
            <Wallet className="h-5 w-5" />
            Total Balance
          </p>
          <h2 className="text-5xl font-bold tracking-tight">
            {formatCurrency(totals?.balance || 0)}
          </h2>
        </div>
        
        <div className="flex gap-4 md:gap-6 w-full md:w-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex-1 md:flex-none border border-white/20 hover:bg-white/20 transition-colors">
            <div className="flex items-center gap-2 text-white/80 mb-1">
              <div className="bg-green-400/20 p-1 rounded-full">
                <ArrowUpRight className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-sm font-medium">Income</span>
            </div>
            <p className="text-xl font-bold">{formatCurrency(totals?.income || 0)}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex-1 md:flex-none border border-white/20 hover:bg-white/20 transition-colors">
            <div className="flex items-center gap-2 text-white/80 mb-1">
              <div className="bg-red-400/20 p-1 rounded-full">
                <ArrowDownRight className="h-4 w-4 text-red-400" />
              </div>
              <span className="text-sm font-medium">Expenses</span>
            </div>
            <p className="text-xl font-bold">{formatCurrency(totals?.expenses || 0)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
