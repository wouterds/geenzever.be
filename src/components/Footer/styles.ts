import { Container as BootstrapContainer } from 'styled-bootstrap-grid';
import { breakpoint, styled } from 'styles';

export const Container = styled(BootstrapContainer)`
  font-size: 1rem;
  line-height: 1;
  padding: 30px 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.3;

  ${breakpoint('sm')`
    padding: 50px 35px 30px;
  `}
`;
