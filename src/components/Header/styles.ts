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
    font-size: 2.5rem;
    margin: 0;

    ${breakpoint('sm')`
      font-size: 3rem;
    `}
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

  ${breakpoint('sm')`
    justify-content: flex-end;
    margin-bottom: 15px;
    margin-top: 0;
  `}
`;
