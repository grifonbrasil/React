import styled from 'styled-components';

export const Body = styled.body`
background-color: #fff;
`;

export const Page = styled.div`
background-color: #8caefd;
`;

export const Title = styled.h1`
text-align: center;
color: #100; 
font-size: ${props =>`${props.fontSize}px`}; 
`;

export const Button = styled.button`
padding: 12px;
border:0;
text-align: center;
display: flex;
align-items: center;
background:#0080ff;
`;

export const Label = styled.label`
color: #100; 
font-size: 15px; 
`;
