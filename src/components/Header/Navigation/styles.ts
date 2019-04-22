import { breakpoint, styled } from 'styles';

export const Container = styled.div`
  ul {
    display: none;
    position: absolute;
    top: 45px;
    right: 0;
    background: #000;
    border-radius: 5px;
    z-index: 1;

    &.open {
      display: inline-block;
    }

    li {
      display: block;

      + li {
        border-top: 1px solid #222;
      }
    }

    ${breakpoint('sm')`
      display: block;
      position: relative;
      background: none;
      top: 0;
      margin-right: -5px;

      li {
        display: inline-block;

        + li {
          border: 0;
          margin-left: 5px;
        }
      }
    `}
  }

  button {
    position: relative;
    z-index: 1;
    border: 0;
    outline: 0;
    background: 0;
    line-height: 1;
    cursor: pointer;
    margin-top: -4px;
    padding: 0;

    img {
      width: 36px;
      height: 36px;

      @media (max-width: 355px) {
        width: 34px;
        height: 34px;
      }

      @media (max-width: 345px) {
        width: 32px;
        height: 32px;
      }
    }

    ${breakpoint('sm')`
      display: none;
    `}
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 15px 25px;
    display: block;

    ${breakpoint('sm')`
      padding: 5px;
      color: #666;
    `}

    &:active,
    &:focus,
    &.active,
    &:hover {
      color: #686de0;
    }
  }

  &:hover a.active {
    color: #fff;

    ${breakpoint('sm')`
      color: #666;
    `}

    &:hover {
      color: #686de0;
    }
  }
`;
