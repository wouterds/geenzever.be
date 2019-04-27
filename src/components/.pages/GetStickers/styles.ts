import styled from 'styled-components';
import { breakpoint, breakpoints } from 'styles';

export const Container = styled.div`
  max-width: ${breakpoints.md}px;

  .form-group {
    margin-bottom: 0.4rem;
  }

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
