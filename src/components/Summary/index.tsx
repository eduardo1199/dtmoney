import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { useTransaction } from '../../hooks/useTransction';

export function Summary() {
  const { transactionsValue } = useTransaction();

  const sumary = transactionsValue.reduce((sum, value) => {
    if (value.type === 'deposit') {
      sum.deposit += value.amount;
      sum.total += value.amount;
    } else {
      sum.withdraw += value.amount;
      sum.total -= value.amount;
    }
    return sum;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          +
          {' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.withdraw)}
        </strong>
      </div>
      <div className="styled-green">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
}
