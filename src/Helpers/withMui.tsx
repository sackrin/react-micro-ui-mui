import React from 'react';
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import getClassName from './getClassName';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

type WithMui = (
  Comp: any,
  theme: ThemeOptions,
  seed: string,
) => <P extends {}>(props: P) => JSX.Element;

const withMui: WithMui = (Comp, theme, seed) => props => (
  <StylesProvider generateClassName={getClassName(seed)}>
    <ThemeProvider theme={createMuiTheme(theme)}>
      <Comp {...props} />
    </ThemeProvider>
  </StylesProvider>
);

export default withMui;
