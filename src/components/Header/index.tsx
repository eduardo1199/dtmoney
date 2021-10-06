import { useState } from 'react';
import { Modal } from '@material-ui/core';
import logo from '../../assets/logo.svg';

import { HeaderContainer, Content } from './styles';

export function Header() {
  const [isNewTransactionModaOpen, SetIsNewTransactionModaOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModaOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModaOpen(false);
  }

  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>
      </Content>
      <Modal
        open={isNewTransactionModaOpen}
        onClose={() => handleCloseNewTransactionModal()}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </HeaderContainer>
  );
}
