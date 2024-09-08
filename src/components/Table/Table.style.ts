import styled from 'styled-components';

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
    text-align: start;
  }

  tbody td {
    padding: 0.625rem;
    text-overflow: ellipsis;
    text-align: start;
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

  .col1 {
    width: 10%;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    width: 100%;
  }
`;

export const ContentImage = styled.div`
  width: 40px;
  height: 30px;
`;
