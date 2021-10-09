export interface NewTransactionProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export interface RadioButtonProps {
  isActive: boolean;
  radioColor: 'red' | 'green';
}
