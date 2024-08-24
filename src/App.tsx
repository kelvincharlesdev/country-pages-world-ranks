import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globals';
import { HomePage } from './page';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
