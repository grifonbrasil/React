import styled from 'styled-components';

const CloseButton = styled.span`
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
`;

export default CloseButton;
