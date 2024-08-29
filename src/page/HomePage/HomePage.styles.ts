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
  padding: 0 1.25rem 1.875rem;

  @media (max-width: 1024px) {
    background: ${({ theme }) => theme.colors.bgPrimary};
    padding: 0 0 1.875rem;
  }
`;

export const Content = styled.div`
  background-color: #1c1d1f;
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
  border-radius: 0.9375rem;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const Container__Searcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`;

export const Description__Found__Countries = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.size.medium};
  white-space: nowrap;

  @media (max-width: 780px) {
    font-size: ${({ theme }) => theme.size.small};
  }
`;

export const Input__Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 30px;
  max-width: 300px;
  min-width: 50px;
  width: 100%;
  border-radius: 0.4375rem;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  div {
    height: 20px;
    width: 20px;
  }

  input {
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 100%;
    width: 100%;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  input::placeholder {
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Info__Countries__Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  gap: 1.875rem;

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
  gap: 1.25rem;

  h4 {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.size.small};
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Sort__By__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Selected = styled.div``;

export const Input__Selected = styled.div`
  height: 40px;
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Region__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Content__Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const Status__Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Status__Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.medium};

  input {
    display: none;
  }

  input + span::before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: 3px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  input:checked + span::before {
    background-color: ${({ theme }) => theme.colors.action};
    border-color: ${({ theme }) => theme.colors.action};
    background-image: url('/Done_round.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  span {
    font-size: ${({ theme }) => theme.size.medium};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Table = styled.table`
  flex: 1;
  text-align: center;
  border-collapse: collapse;
  width: 100%;

  thead {
    padding-bottom: 0.625rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  thead th {
    padding-bottom: 1.25rem;
  }

  tbody td {
    padding: 0.625rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100px;
    color: ${({ theme }) => theme.colors.textPrimary};
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
