## React Micro UI Material UI

Helpers and components to add material UI to react micro ui components

### Installation

This library can be installed using the following command

```npm i -s @sackrin/react-micro-ui-mui```

## Example Usage

```js
import React from 'react';
import { withMui } from '@sackrin/react-micro-ui-mui';

const Example = (props) => (<div>Example Component</div>);

export const hasMui = withMui(Example, { ...CustomMUITheme } , 'addSomeUniqueCssClassPrefix');

export default hasMui;
```
