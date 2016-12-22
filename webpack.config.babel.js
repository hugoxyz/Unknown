import path from 'path';
import webpack from 'webpack';

const dest_dir = path.join(__dirname, 'app', 'dist');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

export default (function() {
  let config = [{
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
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    },
    plugins: []
  }, {
    target: 'electron-renderer',
    entry: {
      renderer: './src/renderer/index'
    },
    output: {
      path: dest_dir,
      filename: '[name].js',
      publicPath: '/app/dist/', //编译好的文件，在服务器的路径,域名会自动添加到前面
      chunkFilename: '[name].[chunkhash:5].min.js',
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['jsx-loader', 'babel-loader']
      }]
    },
    plugins: []
  }];

  if (isProd) {
    for (let i in config) {
      let c = config[i];
      c.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }));
    }
  }

  return config;
}());
