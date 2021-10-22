const path = require("path");
const dotenv = require('dotenv');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const getEnvKeys = env => {
  const mode = env.WEBPACK_BUILD ? 'production' : 'development'; //{ WEBPACK_BUILD: true, WEBPACK_SERVE: true}
  const fileEnv = dotenv.config({ path: `./.env.${getEnvType(env)}` }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  envKeys['process.env.MODE'] = JSON.stringify(getEnvType(env));
  envKeys['process.env.NODE_ENV'] = JSON.stringify(mode);
  console.log("VARIABLES DE ENTORNO", envKeys);

  return envKeys
}

const getEnvType = env => {
  return env.PROD? 'production' : env.DEV? 'development' : 'qa' 
}

module.exports = env => ({
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    open: false,
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.ejs",
    }),
    new webpack.DefinePlugin(getEnvKeys(env)),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
});