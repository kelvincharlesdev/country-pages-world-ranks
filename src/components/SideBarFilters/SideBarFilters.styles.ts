import styled from 'styled-components';

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
    background-image: url('/done_round.svg');
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
