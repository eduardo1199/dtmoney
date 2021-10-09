import { useState } from 'react';

import Modal from 'react-modal';

import { createServer } from 'miragejs';
import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { transactionsData } from './data/transactionsData';
import { NewTransaction } from './components/NewTransaction/NewTransaction';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => transactionsData);
  },
});

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModaOpen, setIsNewTransactionModaOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModaOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModaOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransaction
        isOpen={isNewTransactionModaOpen}
        handleCloseModal={handleCloseNewTransactionModal}
      />
    </>
  );
}
