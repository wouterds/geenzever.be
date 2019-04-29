import { breakpoint, styled } from 'styles';

export const Container = styled.div`
  background: #f1c40f;
  color: #000;
  font-weight: 500;
  padding: 10px 25px;

  a {
    color: #000;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  i {
    margin-right: 0.35rem;
  }

  ${breakpoint('sm')`
    padding: 12px 35px;
  `}
`;
