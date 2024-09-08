import styled from 'styled-components';

export const Country__Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Main = styled.main`
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

export const Content__Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  background-color: #1c1d1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.9375rem;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  max-width: 740px;
  width: 100%;

  box-shadow: 0px 0.25rem 3.125rem #131313;
  margin-top: -60px;
`;

export const Country__Content = styled.div`
  background-color: red;
`;

export const Content__Image = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: -3.125rem;
`;

export const Content__Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 30px;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.size.xLarge};
  }

  p {
    font-size: ${({ theme }) => theme.size.large};
  }
`;
export const Content__Info = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const Info_Population__Area = styled.div`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 60px;
  width: 100%;
  border-radius: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.9375rem 1.625rem;
  gap: 1.25rem;
  margin-top: 2.8125rem;

  span {
    height: 80%;
    width: 1.5px;
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Content__Info__Additional = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2.1875rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.25rem;
    border-top: 1px solid ${({ theme }) => theme.colors.bgSecondary};

    span {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: ${({ theme }) => theme.size.small};
    }

    p {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: ${({ theme }) => theme.size.medium};
    }
  }
`;
