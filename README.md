# [geenzever.be](https://geenzever.be)

[![CircleCI](https://circleci.com/gh/wouterds/geenzever.be.svg?style=shield&circle-token=3f21cbae8f4a5c29d5f68ebce406d45b6fd6c14c)](https://circleci.com/gh/wouterds/geenzever.be)

[![mock--yellow.jpg](resources/static/mock--yellow.jpg?raw=true)](https://geenzever.be)

## Setup

```shell
npm install
```

### VSCode

Install these plugins;

- https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
- https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint
- https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components

And add this to your workspace settings;

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true,
  },
}
```

## Running

```shell
npm run dev
```
