import { ReactNode } from 'react';

export interface TransactionsType {
  amount: number,
  category: string,
  createAt: string,
  id: string,
  title: string,
  type: string,
}

// export type TransactionInput = Omit<TransactionsType, 'id' | 'createAt'> /*traga todas as propriedades de TransactionsType para TransactionInput
// menos o id e createAt

export interface TransactionProviderProps {
  children: ReactNode;
}

export interface TransactionContextValue {
  transactionsValue: TransactionsType[],
  createTransaction: (value: any) => Promise<void>;
}

export interface TransactionReponse {
  transaction: {
    amount: number,
    category: string,
    createAt: string,
    id: string,
    title: string,
    type: string,
  }
}
