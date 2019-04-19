import { styled } from 'styles';

export const Container = styled.nav`
  a {
    color: #666;

    + a {
      margin-left: 15px;
    }

    &:hover {
      color: #000;
    }
  }
`;
