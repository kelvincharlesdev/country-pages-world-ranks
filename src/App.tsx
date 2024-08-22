import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globals';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Title>Testando</Title>
        <img src="/Done_round.svg" alt="" />
        <img src="/Expand_down.svg" alt="" />
        <img src="/hero-image-wr.jpg" alt="" />
        <img src="/Logo.svg" alt="" />
        <img src="/Search.svg" alt="" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
