import React from 'react';
import styled from 'styled-components';

const Message = styled.span`
  color: #FF315A;
  font-size: 12px;
`;

interface Props {
  children: string;
}

export default function ErrorMessage({ children }: Props) {
  return <Message>{children}</Message>;
}
