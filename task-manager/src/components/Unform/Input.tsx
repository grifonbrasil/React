import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  border: 1px solid black;
  padding: 8px;
  `;

// todo
export default function Input({ name, ...rest }: any) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
