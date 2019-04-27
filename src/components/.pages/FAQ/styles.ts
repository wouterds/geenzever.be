import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Container = styled.div`
  max-width: ${breakpoints.md}px;
`;

export const Question = styled.div`
  margin-top: 25px;

  em {
    font-weight: 500;
    font-size: 1.2em;
    font-style: normal;
  }

  p:first-child {
    margin-bottom: 0.4em;
  }
`;
