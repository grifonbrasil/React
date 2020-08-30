import React from 'react';
import { Title, Page, Body } from './styles';
import ServiceForm from './components/ServiceForm';
import styled from "styled-components";


export default class ServiceApp extends React.Component {

  render() {
    return (
      <>
        <Body>
          <div class="container z-depth-3" >
            <Title font-size={20} > &nbsp;Cadastro de Tarefas </Title>
            <ServiceForm />
          </div>
        </Body>
      </>
    );
  }
}