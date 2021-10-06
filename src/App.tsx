import { createServer } from 'miragejs';
import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { transactionsData } from './data/transactionsData';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => transactionsData);
  },
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
