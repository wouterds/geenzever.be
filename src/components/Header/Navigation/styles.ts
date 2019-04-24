import { breakpoint, styled } from 'styles';

export const Container = styled.div`
  ul {
    display: none;
    position: absolute;
    top: 52px;
    right: 0;
    background: #000;
    border-radius: 5px;
    z-index: 1;

    @media (max-width: 340px) {
      top: 38px;
    }

    @media (max-width: 360px) {
      top: 40px;
    }

    @media (max-width: 430px) {
      top: 44px;
    }

    &.open {
      display: inline-block;
    }

    li {
      display: block;

      + li {
        border-top: 1px solid #222;
      }
    }

    ${breakpoint('md')`
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
      height: 36px;

      @media (max-width: 475px) {
        height: 32px;
      }

      @media (max-width: 400px) {
        height: 30px;
      }

      @media (max-width: 360px) {
        height: 28px;
      }

      @media (max-width: 340px) {
        height: 26px;
      }
    }

    ${breakpoint('md')`
      display: none;
    `}
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 15px 25px;
    display: block;

    ${breakpoint('md')`
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

    ${breakpoint('md')`
      color: #666;
    `}

    &:hover {
      color: #686de0;
    }
  }
`;
