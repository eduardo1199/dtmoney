import { createContext, useEffect, useState } from 'react';
import { TransactionsType, TransactionProviderProps } from './types';
import { api } from '../services/api';

export const TransactionContext = createContext<TransactionsType[] | undefined>([]);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<TransactionsType[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => setTransaction(response.data));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}
