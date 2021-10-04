import logo from '../../assets/logo.svg';

import { HeaderContainer, Content } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </HeaderContainer>
  );
}
