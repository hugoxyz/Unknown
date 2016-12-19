import path from 'path';
import webpack from 'webpack';

const dest_dir = path.join(__dirname, 'app', 'dist');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

export default (function () {
  let config = [
    {
      target: 'electron',
      node: {
        __dirname: false
      },
      entry: {
        main: './src/main/main.js'
      },
      output: {
        path: dest_dir,
        filename: '[name].js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }
        ]
      },
      plugins: []
    },
    {
      target: 'electron-renderer',
      entry: {
        renderer: './src/renderer/index.js'
      },
      output: {
        path: dest_dir,
        filename: '[name].js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }
        ]
      },
      plugins: []
    }
  ];

  if (isProd) {
    for (let i in config) {
      let c = config[i];
      c.plugins.push(new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }));
    }
  }

  return config;
}());

