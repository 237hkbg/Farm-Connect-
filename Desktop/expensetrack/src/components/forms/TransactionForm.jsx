import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TransactionContext } from '../../context/TransactionContext';
import { PlusCircle } from 'lucide-react';
import clsx from 'clsx';

const categories = [
  'Housing', 'Food', 'Transportation', 'Utilities',
  'Entertainment', 'Healthcare', 'Shopping', 'Education', 'Salary', 'Freelance', 'Other'
];

export const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    }
  });

  const onSubmit = async (data) => {
    try {
      await addTransaction({
        ...data,
        amount: Number(data.amount)
      });
      reset({
        type: 'expense',
        date: new Date().toISOString().split('T')[0],
        category: '',
        description: '',
        amount: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
        <PlusCircle className="h-5 w-5 text-primary" />
        New Transaction
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">Type</label>
          <div className="grid grid-cols-2 gap-2">
            {['expense', 'income'].map((type) => (
              <label
                key={type}
                className={clsx(
                  "cursor-pointer text-center px-4 py-2 rounded-xl border text-sm font-medium capitalize transition-all",
                  "has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary hover:bg-secondary border-border text-foreground"
                )}
              >
                <input
                  type="radio"
                  value={type}
                  {...register('type')}
                  className="sr-only"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">FCFA</span>
            <input
              type="number"
              step="0.01"
              className={clsx(
                "w-full pl-14 pr-4 py-2 bg-background border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all text-foreground",
                errors.amount ? "border-destructive focus:ring-destructive" : "border-border"
              )}
              placeholder="0.00"
              {...register('amount', { required: 'Amount is required', min: { value: 0.01, message: 'Must be greater than 0' } })}
            />
          </div>
          {errors.amount && <p className="text-destructive text-xs mt-1">{errors.amount.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">Category</label>
          <select
            className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none text-foreground"
            {...register('category', { required: 'Category is required' })}
          >
            <option value="">Select a category...</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="text-destructive text-xs mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all text-foreground"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <p className="text-destructive text-xs mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">Description</label>
          <textarea
            rows="2"
            className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none text-foreground"
            placeholder="What was this for?"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && <p className="text-destructive text-xs mt-1">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-70 mt-4"
        >
          {isSubmitting ? 'Adding...' : 'Add Transaction'}
        </button>
      </form>
    </div>
  );
};
