import logo from '../../assets/logo.svg';

import { HeaderContainer, Content } from './styles';

import { HeaderProps } from './types';

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </HeaderContainer>
  );
}
