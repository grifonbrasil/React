import styled from 'styled-components';

const Button = styled.button`
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;

  &.success {
    background-color: #1BB76C;
    &:hover,
    &:focus {
      background-color: #1bb76ce0;
      outline: none;
    }
  }

  &.error {
    background-color: #FF315A;
    &:hover,
    &:focus {
      background-color: #ff315ad9;
      outline: none;
    }
  }

`;

export default Button;
