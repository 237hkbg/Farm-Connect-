import React from 'react';
import { BalanceCard } from '../components/dashboard/BalanceCard';
import { TransactionList } from '../components/dashboard/TransactionList';
import { TransactionForm } from '../components/forms/TransactionForm';

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your financial overview.</p>
      </header>

      <BalanceCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TransactionList />
        </div>
        <div>
          <TransactionForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
