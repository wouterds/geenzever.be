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

  > img {
    width: 100%;
    max-width: 200px;
    margin-left: 50px;
    display: none;
  }

  ${breakpoint('sm')`
    > img {
      display: block;
    }
  `}
`;
