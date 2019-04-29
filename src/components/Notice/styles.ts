import { breakpoint, styled } from 'styles';

export const Container = styled.div`
  background: #f1c40f;
  color: #000;
  font-weight: 500;
  padding: 10px 25px;

  i {
    display: none;
    margin-right: 10px;
  }

  ${breakpoint('sm')`
    padding: 12px 35px;

    i {
      display: inline-block;
    }
  `}
`;
