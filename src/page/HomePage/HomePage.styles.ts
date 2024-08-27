import styled from 'styled-components';

export const Home__Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Main = styled.main`
  background: linear-gradient(
    0deg,
    rgba(26, 27, 29, 1) 86%,
    rgba(0, 0, 2, 1) 90%
  );
  min-height: calc(100vh - 300px);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px 30px;

  @media (max-width: 1024px) {
    background: #1b1d1f;
    padding: 0 0 30px;
  }
`;

export const Content = styled.div`
  background-color: #1c1d1f;
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #282b30;
`;

export const Container__Searcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Description__Found__Countries = styled.h2`
  color: #6c727f;
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: 780px) {
    font-size: 12px;
  }
`;

export const Input__Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
  max-width: 300px;
  min-width: 50px;
  width: 100%;
  border-radius: 7px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  div {
    height: 20px;
    width: 20px;
  }

  input {
    font-size: 12px;
    color: #d2d5da;
    height: 100%;
    width: 100%;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  input::placeholder {
    font-size: 12px;
    color: #6c727f;
  }
`;

export const Info__Countries__Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  gap: 30px;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Info__Filters__Countries = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    color: #6c727f;
    font-size: 12px;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Sort__By__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Selected = styled.div``;

export const Input__Selected = styled.div`
  height: 40px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #6c727f;
  background-color: transparent;
  color: #d2d5da;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Region__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Content__Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Status__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Status__Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;

  input {
    display: none;
  }

  input + span::before {
    content: '';
    display: inline-block;
    width: 25px; /* Largura do checkbox */
    height: 25px; /* Altura do checkbox */
    background-color: transparent; /* Cor de fundo */
    border: 3px solid #6c727f; /* Borda padrão */
    border-radius: 4px; /* Bordas arredondadas */
    margin-right: 8px; /* Espaço entre o checkbox e o texto */
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  /* Estilos para quando o checkbox é marcado */
  input:checked + span::before {
    background-color: #4e80ee; /* Cor de fundo quando marcado */
    border-color: #4e80ee; /* Cor da borda quando marcado */
    background-image: url('/Done_round.svg'); /* Caminho da imagem */
    background-size: cover; /* Ajusta o tamanho da imagem ao checkbox */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat; /* Evita que a imagem seja repetida */
  }

  /* Ajuste de estilo para o texto ao lado do checkbox */
  span {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #d2d5da;
  }
`;

export const Table = styled.table`
  flex: 1;
  text-align: center;
  border-collapse: collapse;
  width: 100%;

  thead {
    padding-bottom: 10px;
    border-bottom: 1px solid #6c727f;
    color: #6c727f;
  }

  thead th {
    padding-bottom: 20px;
  }

  tbody td {
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100px;
    color: #d2d5da;
  }

  th,
  td {
    min-width: 50px;
    max-width: 100px;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    width: 100%;
  }
`;

export const Wrapper__Table = styled.div`
  overflow-x: auto;
  flex: 1;
  width: 100%;
`;
