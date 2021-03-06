import styled from 'styled-components';
import { darken, transparentize } from 'polished';

import { RadioButtonProps } from './types';

import { Colors } from './utils';

export const Form = styled.form`
 h2 {
  color: var(--text-color);
  font-size: 1.5rem !important;
  margin-bottom: 2rem;
 }

 input {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;

    
  border: 1px solid #e7e7e7;
  background: #e7e9ee;

  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 1rem;
 
    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9)
    }
  }

`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.8)
  }
`;

export const TransactionContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`;

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid #e7e7e7;
  border-radius: 0.25rem;

  background: ${(props) => (props.isActive ? transparentize(0.9, Colors[props.radioColor]) : '')};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#e7e7e7')};

  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`;
