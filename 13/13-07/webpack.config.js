var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js", // "./src/js/index.js",
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  devServer: {
    contentBase: "./",
    port: "8080",
    hot: true, // 热加载,需要HotModuleReplacementPlugin插件
    inline: true, // 实时刷新
    open: true,
    stats: { colors: true },
    historyApiFallback: true, // 是否可以回退
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'],
        }
      },
      //下面是使用 ant-design 的配置文件
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins: debug ? [ // 开发环境
    new webpack.HotModuleReplacementPlugin(), //全局开启自动编译和热替换，不用刷新页面
  ] : [  // 生产环境
    // 有些JS库有自己的依赖树，并且这些库可能有交叉的依赖，DedupePlugin可以找出他们并删除重复的依赖
    new webpack.optimize.DedupePlugin(),
    // webpack为每个模块指定唯一的id，通过该插件，webpack会分析和为模块按优先级排序，为最经常使用的分配一个最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    // 解析/压缩/美化所有的js
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
