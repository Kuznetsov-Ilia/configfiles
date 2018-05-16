const webpack = require('webpack');
module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'react-router-dom',
      'react-router-redux',
      'redux-multi',
      'history',
    ],
  },
  output: {
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: '[name].json',
    }),
  ],
};
