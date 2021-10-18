import {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  TransactionsType,
  TransactionProviderProps,
  TransactionContextValue,
} from './types';
import { api } from '../services/api';

const TransactionContext = createContext<TransactionContextValue>({} as TransactionContextValue);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactionsValue, setTransactionsValue] = useState<TransactionsType[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => {
      const { transactions } = response.data;
      setTransactionsValue(transactions);
    });
  }, []);

  async function createTransaction(transactionInput: any) {
    const response = await api.post('/transactions', { ...transactionInput, createAt: new Date() });
    const { transaction } = response.data;

    setTransactionsValue([...transactionsValue, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactionsValue, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);
  return context;
}
