import React from 'react';
import './App.css';

// import Styled Components
import styled from 'styled-components';

function App() {
  const Button = styled.button`
    width: auto;
    height: 60px;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    background: ${props => props.purple ? 'purple' : props.red ? 'red' : 'orange'};
    transition: .5s;
    font-size: 14px;
    padding: 10px 15px;

    &:hover {
      color: ${props => props.purple ? 'purple' : props.red ? 'red' : 'orange'};
      background: black;
    }
  `;

  const OtherButton = styled(Button)`
    border-radius: 30px;
  `

  return (
    <div className='App'>
      {/* Styling elements  */}
      <Button purple>Portugal Coding</Button>
      <Button>Styled Components</Button>
      <Button red>Other button</Button>

      <OtherButton red>Portugal</OtherButton>
    </div>
  );
}

export default App;
