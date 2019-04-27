import { breakpoint, styled } from 'styles';

export const Container = styled.header`
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

    @media (max-width: 375px) {
      font-size: 1.9rem;
    }

    @media (max-width: 360px) {
      font-size: 1.8rem;
    }

    @media (max-width: 340px) {
      font-size: 1.6rem;
    }
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
  justify-content: flex-end;
  margin-top: -3px;
`;
