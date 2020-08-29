import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const StyledInput = styled.input`
  display: block;
  border: #efefef;
  padding: 8px;
  border-radius: 5px;
  background-color: #efefef;
  outline: none;
  width: 95%;
`;

interface Props {
  name: string;
  placeholder: string;
};

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function Input({ name, ...rest }: React.FC<InputProps>) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
