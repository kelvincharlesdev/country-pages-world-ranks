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
  min-height: 700px;
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

export const Wrapper__Table = styled.div`
  overflow-x: auto;
  flex: 1;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content__Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Error = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
