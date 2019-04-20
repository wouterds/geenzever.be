import { breakpoint, css, styled } from 'styles';

export const Button = styled.button<{ disabled: boolean }>`
  background: #000;
  display: block;
  padding: 13px 10px;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: 0;
  outline: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: #222;
    `}

  &:hover {
    background: #222;
    color: #fff;
  }

  ${breakpoint('sm')`
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

export const AnchorButton = (props: any = {}) => <Button {...props} as="a" />;
