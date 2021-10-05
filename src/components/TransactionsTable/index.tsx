import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$ 12.00</td>
            <td>Desenvolvimento</td>
            <td>04q10q2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="withdraw">- R$ 12.00</td>
            <td>Desenvolvimento</td>
            <td>04q10q2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
