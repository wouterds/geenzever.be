import styled from 'styled-components';
import { breakpoint, breakpoints } from 'styles';

export const Container = styled.div`
  max-width: ${breakpoints.md}px;

  p br {
    content: ' ';
    width: 4px;
    display: inline-block;

    ${breakpoint('md')`
      display: block;
      width: auto;
      content: none;
    `}
  }
`;

export const PayPalButtonAndQRCode = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-direction: column;
  max-width: 200px;

  > img {
    width: 100%;
    max-width: 200px;
    margin-top: 10px;
  }

  ${breakpoint('sm')`
    margin-top: 0;
    flex-direction: row;
    max-width: auto;

    > img {
      margin-left: 50px;
      margin-top: 0;
    }
  `}
`;
