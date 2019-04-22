import { Col, Container as BootstrapContainer } from 'styled-bootstrap-grid';
import { breakpoint, styled } from 'styles';

export const Container = styled(BootstrapContainer)`
  font-size: 1rem;
  line-height: 1;
  padding: 25px 25px 15px;

  ${breakpoint('sm')`
    padding: 35px 35px 25px;
  `}
`;

export const LogoWrapper = styled(Col)`
  h1 {
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    font-size: 3rem;

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }

    @media (max-width: 415px) {
      font-size: 2.2rem;
    }

    @media (max-width: 367px) {
      font-size: 2.1rem;
    }

    @media (max-width: 355px) {
      font-size: 2rem;
    }

    @media (max-width: 345px) {
      font-size: 1.84rem;
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

export const NavigationWrapper = styled(Col)`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: flex-end;

  ${breakpoint('md')`
    margin-bottom: 15px;
    margin-top: 0;
  `}
`;
