import { breakpoint, styled } from 'styles';

export const Container = styled.div`
  height: auto;
  min-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Main = styled.section`
  display: flex;
  padding: 0 25px;
  flex-direction: column;
  flex: 1;

  ${breakpoint('sm')`
    padding: 0 35px;
  `}
`;
