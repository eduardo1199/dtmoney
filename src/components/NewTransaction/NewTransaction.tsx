import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionProps } from './types';

import {
  Form, ButtonClose, TransactionContainer, RadioButton,
} from './styles';

import closeImg from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { useTransaction } from '../../hooks/useTransction';

export function NewTransaction({ handleCloseModal, isOpen }: NewTransactionProps) {
  const { createTransaction } = useTransaction();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      type,
      title,
      category,
      amount,
    });

    setType('deposit');
    setTitle('');
    setCategory('');
    setAmount(0);
    handleCloseModal();
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
          onChange={(event) => setAmount(Number(event.target.value))}
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
