FROM node:alpine
WORKDIR /
RUN npm init -y && npm i \
  webpack webpack-dev-server webpack-sources @types/webpack \
# babel
  babel-loader@^8.0.0-beta \
  @babel/core \
  @babel/cli \
  @babel/register \
  @babel/runtime \
  @babel/polyfill \
  @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx \
  @babel/plugin-transform-runtime \
  @babel/preset-env @babel/preset-stage-0 @babel/preset-stage-1 @babel/preset-stage-2 @babel/preset-stage-3 \
  @babel/preset-react \
  @babel/preset-flow \
  @babel/preset-typescript \
# buble
  buble buble-loader \
# typescript
  typescript ts-loader \
# plugins
  uglify-js compression-webpack-plugin \
  html-webpack-plugin \
# loaders
  file-loader raw-loader \
  json-loader hson-loader \
  yaml-loader yaml-ts-loader yamljs \
  css-loader  style-loader typings-for-css-modules-loader \
  svgo svg-sprite-loader \
# lib bundler
  rollup \
  rollup-plugin-babel-minify \
  rollup-plugin-buble \
  rollup-plugin-babel@beta \
  rollup-plugin-commonjs \
  rollup-plugin-livereload \
  rollup-plugin-node-resolve \
  rollup-plugin-postcss \
  rollup-plugin-replace \
  rollup-plugin-serve \
  rollup-plugin-typescript2 \
  rollup-watch \
# framework
  react@canary        @types/react \
  react-dom           @types/react-dom \
  react-hot-loader    @types/react-hot-loader \
  react-redux         @types/react-redux \
  react-router        @types/react-router \
  react-router-dom    @types/react-router-dom \
  react-router-redux  @types/react-router-redux \
  history             @types/history \
  redux               @types/redux \
  redux-logger        @types/redux-logger \
  redux-multi \
  redux-devtools-extension \
  preact \
  preact-compat \
  preact-router \
## CSS
  autoprefixer \
  csso csso-webpack-plugin \
  postcss-color-function \
  postcss-custom-properties \
  postcss-define-property \
  postcss-import \
  postcss-loader \
  postcss-nested \
  postcss-simple-vars \
  postcss-flex \
  postcss-flexbox \
  postcss-flexbugs-fixes \
## code quality
  eslint babel-eslint \
  eslint-config-airbnb \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  prettier eslint-plugin-prettier \
  flow flow-bin flow-status-webpack-plugin eslint-plugin-flowtype \
  tslint tslint-eslint-rules \
  stylelint \
## testing
  jest jest-cli babel-jest @types/jest \
  ava @ava/babel-preset-stage-4 \
  mocha @types/mocha mocha-loader  \
  tape @types/tape tap-browser-console-color
# utils
RUN npm i \
  raf @types/mock-raf \
  browser-cookies \
  lodash @types/lodash \
  decko \
  material-ui@next @material-ui/icons @types/material-ui \
  @types/grecaptcha \
  react-text-mask \
  webpack-cli
RUN npm i extract-text-webpack-plugin@next
ENV PATH $PATH:/node_modules/.bin
WORKDIR /app
CMD ["npm", "start"]
