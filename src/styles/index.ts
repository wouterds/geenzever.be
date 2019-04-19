import styledComponents, {
  css as styledComponentsCss,
} from 'styled-components';
import styledComponentsBreakpoint from 'styled-components-breakpoint';

export const styled = styledComponents;
export const css = styledComponentsCss;
export const breakpoint = styledComponentsBreakpoint;

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const theme = {
  breakpoints,
};
