import { breakpoint, styled } from 'styles';

export const Container = styled.header`
  line-height: 1;
  padding: 25px 25px 15px;

  ${breakpoint('sm')`
    padding: 35px 35px 25px;
  `}
`;

export const LogoWrapper = styled.div`
  h1 {
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: inherit;
    }
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: flex-end;

  ${breakpoint('md')`
    margin-bottom: 15px;
    margin-top: 0;
  `}
`;
