import { ReactNode } from 'react';

export interface TransactionsType {
  amount: number,
  category: string,
  createAt: string,
  id: string,
  title: string,
  type: string,
}

export interface TransactionProviderProps {
  children: ReactNode;
}
