import React from 'react';
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import getClassName from './getClassName';
const withMui = (Comp, theme, seed) => props => (React.createElement(StylesProvider, { generateClassName: getClassName(seed) },
    React.createElement(ThemeProvider, { theme: createMuiTheme(theme) },
        React.createElement(Comp, Object.assign({}, props)))));
export default withMui;
