import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransaction } from './components/NewTransaction/NewTransaction';

import { TransactionProvider } from './hooks/useTransction';

export function App() {
  const [isNewTransactionModaOpen, setIsNewTransactionModaOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModaOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModaOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransaction
        isOpen={isNewTransactionModaOpen}
        handleCloseModal={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}
