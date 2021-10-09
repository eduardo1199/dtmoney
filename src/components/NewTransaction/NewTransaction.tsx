import Modal from 'react-modal';

import { NewTransactionProps } from './types';

import { Form } from './styles';

export function NewTransaction({ handleCloseModal, isOpen }: NewTransactionProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => handleCloseModal()}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Form>
        <h2>Cadastrar Transação</h2>

        <input placeholder="título" />

        <input placeholder="valor" type="number" />

        <input placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  );
}
