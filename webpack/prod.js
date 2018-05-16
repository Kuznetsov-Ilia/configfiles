const webpack = require('webpack');
const conf = require('./config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rules = conf.module.rules.filter(m => !'.css'.match(m.test));
const extractCss = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1, //how many loaders before css-loader should be applied to @imported resources
        modules: true,
        context: '/src',
        localIdentName: '[hash:base64:4]',
      },
    },
    {
      loader: 'postcss-loader',
      options: { config: { path: '.postcssrc.yml' } },
    },
  ],
});

module.exports = {
  ...conf,
  cache: false,
  devtool: 'source-map',
  bail: true,
  plugins: conf.plugins.concat([
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]),
  module: {
    rules: rules.concat([
      {
        test: /\.css$/,
        use: extractCss,
      },
    ]),
  },
};
