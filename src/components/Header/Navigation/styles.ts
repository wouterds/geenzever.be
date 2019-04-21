import { styled } from 'styles';

export const Container = styled.nav`
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

  &:hover a.active {
    color: #666;

    &:hover {
      color: #686de0;
    }
  }
`;
