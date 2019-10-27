import React from 'react';
import './App.css';

import styled from 'styled-components'

// 01. Styling Elements
import { Button } from './01.Styling_Elements/Button';

// 02. Styling based on Props
import { PropsButton } from './02.Styling_based_on_props/PropsButton';

// 03. Extending Style
import { OtherButton } from './03.Extending_Styles/OtherButton';

// 04. Theming
import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';

function App() {
  const Title = styled.h1`
  color: ${(props) => props.theme.darkTheme.text};
  background: ${(props) => props.theme.darkTheme.background};
  border-radius: 10px;
  padding: 10px 20px;
  `;

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Button> Portugal Coding </Button>

        <PropsButton>Portugal Coding</PropsButton>
        <PropsButton lime>Portugal Coding</PropsButton>
        <PropsButton orangered>Portugal Coding</PropsButton>

        <OtherButton orangered>Portugal Coding</OtherButton>
        <Title>test</Title>
      </ThemeProvider>
    </div>
  );
}

export default App;
