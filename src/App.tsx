import { useState } from 'react';

import Modal from 'react-modal';

import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { NewTransaction } from './components/NewTransaction/NewTransaction';

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
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
