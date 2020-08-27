import React from 'react';
import styled from 'styled-components';
import CloseButton from 'components/Buttons/CloseButton';

const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 24px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  background-color: #f44336;
`;

interface Props {
  title: string;
  // todo
  onClose: () => void;
  // todo
  onConfirm?: () => void;
  children: any
}

export default function Modal({ title, onClose, onConfirm, children,  }: Props) {
  return (
    <Container>
      <Content>
        <Header>
          <h1>{title}</h1>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <div>
          {children}
        </div>
        {onConfirm && (
          <Footer>
            <Button onClick={onConfirm}>Confirmar</Button>
          </Footer>
        )}
      </Content>
    </Container>
  );
}
