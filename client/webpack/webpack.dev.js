const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Development"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
