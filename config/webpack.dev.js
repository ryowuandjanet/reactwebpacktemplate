const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    // for AWS CLOUD9
    // compress: true,
    // disableHostCheck: true,

    // for PC
    // open: true,             // Automatically open the browser
    // hot: true,              // Automatically refresh the page whenever bundle.js 
    host: process.env.IP,
    port: process.env.PORT,
    contentBase: "../dist",
    open: "chrome",
    hot: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
