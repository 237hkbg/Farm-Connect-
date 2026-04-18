import React, { createContext, useReducer, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';
import { useAuth } from './AuthContext';

export const TransactionContext = createContext();

const initialState = {
  transactions: [],
  loading: true,
  error: null
};

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...state, transactions: action.payload, loading: false };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'DELETE_TRANSACTION':
      return { 
        ...state, 
        transactions: state.transactions.filter(t => t.id !== action.payload) 
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  const { user } = useAuth();

  const fetchTransactions = useCallback(async () => {
    if (!user) return;
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const data = await apiService.transactions.get();
      dispatch({ type: 'SET_TRANSACTIONS', payload: data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  }, [user]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const addTransaction = async (transactionData) => {
    try {
      const newTxn = await apiService.transactions.insert(transactionData);
      dispatch({ type: 'ADD_TRANSACTION', payload: newTxn });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
      throw err;
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await apiService.transactions.delete(id);
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
      throw err;
    }
  };

  const calculateTotals = () => {
    return state.transactions.reduce((acc, curr) => {
      if (curr.type === 'income') acc.income += Number(curr.amount);
      if (curr.type === 'expense') acc.expenses += Number(curr.amount);
      acc.balance = acc.income - acc.expenses;
      return acc;
    }, { income: 0, expenses: 0, balance: 0 });
  };

  return (
    <TransactionContext.Provider value={{
      transactions: state.transactions,
      loading: state.loading,
      error: state.error,
      totals: calculateTotals(),
      addTransaction,
      deleteTransaction,
      fetchTransactions
    }}>
      {children}
    </TransactionContext.Provider>
  );
};
