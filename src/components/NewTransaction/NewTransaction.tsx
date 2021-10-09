import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionProps } from './types';

import {
  Form, ButtonClose, TransactionContainer, RadioButton,
} from './styles';

import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

export function NewTransaction({ handleCloseModal, isOpen }: NewTransactionProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      type,
      category,
      value,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => handleCloseModal()}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ButtonClose
        type="button"
        onClick={handleCloseModal}
      >
        <img src={closeImg} alt="close" />
      </ButtonClose>
      <Form onSubmit={handleCreateTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="valor"
          type="number"
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionContainer>
          <RadioButton
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            radioColor="green"
          >
            <img src={income} alt="income" />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            radioColor="red"
          >
            <img src={outcome} alt="outcome" />
            <span>Saída</span>
          </RadioButton>
        </TransactionContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  );
}
