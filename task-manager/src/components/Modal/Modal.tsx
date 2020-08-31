import React from 'react';
import styled from 'styled-components';
import CloseButton from 'components/Buttons/CloseButton';
import Button from 'components/Buttons/Button';

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
  width: 250px;
  min-width: 25%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title {
    font-size: 24px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface Props {
  title: string;
  onClose: () => void;
  onConfirm?: () => void;
  children: any
}

export default function Confirm({ title, onClose, onConfirm, children }: Props) {
  return (
    <Container>
      <Content>
        <Header>
          <h1 className="title">{title}</h1>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        {children}
        {onConfirm && (
          <Footer>
            <Button className="success" onClick={onClose}>Cancelar</Button>
            <Button className="error ml-10" onClick={onConfirm}>Confirmar</Button>
          </Footer>
        )}
      </Content>
    </Container>
  );
}
