import { breakpoint, styled } from 'styles';

export const Container = styled.div`
  color: #66758c;
  margin-right: -15px;

  .dropdown-toggle {
    display: inline-block;
    padding: 8px 12px;
    line-height: 1;
    color: inherit;
  }

  .menu {
    z-index: 1;
    position: absolute;
    min-width: 125px;
    left: auto;
    right: 0;
    margin-top: 10px;
  }

  &.is-open .menu {
    display: block;
  }

  ${breakpoint('sm')`
    display: block;
    margin-top: -5px;

    .dropdown-toggle {
      display: none;
    }

    .menu {
      position: relative;
      left: auto;
      right: auto;
      top: auto;
      display: block;
      margin: 0;
      box-shadow: none;
      transform: none;
      animation: none;

      .menu-item > a.active {
        background: none;
      }
    }

    .menu-item {
      display: inline-block;
    }
  `}
`;
