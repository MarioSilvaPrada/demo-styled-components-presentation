import styled from 'styled-components';

export const Button = styled.button`
width: auto;
height: 60px;
color: black;
cursor: pointer;
border-radius: 5px;
background: orange
transition: .5s;
font-size: 14px;
padding: 10px 15px;
margin:10px;
border: none;

&:hover {
  color: orange;
  background: black;
}
`;