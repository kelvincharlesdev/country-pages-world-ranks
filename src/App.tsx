import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globals';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.main};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Title>Testando</Title>
      </div>
    </ThemeProvider>
  );
}

export default App;
