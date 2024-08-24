import styled from 'styled-components';
export const Header = styled.header`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(public/hero-image-wr.jpg);
  background-repeat: no-repeat;
  background-size: '1280px  300px';
  background-position: center;
  background-color: ${({ theme }) => theme.colors.bgHeader};
`;

export const ContentImage = styled.div`
  max-width: 240px;
`;
