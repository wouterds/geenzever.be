import { styled } from 'styles';

export const Container = styled.nav`
  &:hover a.active {
    color: #666;

    &:hover {
      color: #686de0;
    }
  }

  a {
    color: #666;
    text-decoration: none;
    padding: 5px;
    display: inline-block;

    + a {
      margin-left: 5px;
    }

    &.active,
    &:hover {
      color: #686de0;
    }
  }
`;
