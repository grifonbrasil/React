import styled from 'styled-components';

const Button = styled.button`
  color: #aaaaaa;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  &.success {
    background-color: green;
  }

  &.red {
    background-color: red;
  }
`;

export default Button;
