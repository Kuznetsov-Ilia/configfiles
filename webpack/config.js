// https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const YAML = require('yamljs');
const rules = YAML.load('./webpack/rules.yaml').map(createRegEx);
const {WEBPACK_PORT=3000} = process.env;
module.exports = {
  devtool: 'cheap-module-source-map',
  output: { pathinfo: false },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
  },
  module: { rules },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: true,
      debug: 'console.debug',
      info: 'console.info',
      log: 'console.log',
      dir: 'console.dir',
      warn: 'console.warn',
      assert: 'console.assert',
      error: 'console.error',
      group: 'console.group',
      groupEnd: 'console.groupEnd',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
      manifest: './webpack/vendor.json',
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: WEBPACK_PORT,
    proxy: {
      '/rest': 'http://0.0.0.0:10000'
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};

function createRegEx(rule) {
  rule.test = new RegExp(`\\.${rule.test}$`);
  if (rule.include) {
    rule.include = new RegExp(`${rule.include}`);
  }
  return rule;
}
