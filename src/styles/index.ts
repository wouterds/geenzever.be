import styledComponents, {
  css as styledComponentsCss,
} from 'styled-components';
import styledComponentsBreakpoint from 'styled-components-breakpoint';

export const styled = styledComponents;
export const css = styledComponentsCss;
export const breakpoint = styledComponentsBreakpoint;

export const breakpoints = {
  xs: 480,
  sm: 600,
  md: 840,
  lg: 960,
  xl: 1280,
};

export const theme = {
  breakpoints,
};
