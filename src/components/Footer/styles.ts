import { breakpoint, styled } from 'styles';

export const Container = styled.footer`
  padding: 30px 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #aaa;

  ${breakpoint('sm')`
    padding: 50px 35px 30px;
  `}
`;
