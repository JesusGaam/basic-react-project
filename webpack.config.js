const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const getEnvKeys = (env) => {
  const mode = env.WEBPACK_BUILD ? "production" : "development"; //{ WEBPACK_BUILD: true, WEBPACK_SERVE: true}
  const fileEnv = dotenv.config({ path: `./.env.${getEnvType(env)}` }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  envKeys["process.env.MODE"] = JSON.stringify(getEnvType(env));
  envKeys["process.env.NODE_ENV"] = JSON.stringify(mode);
  console.log("VARIABLES DE ENTORNO", envKeys);

  return envKeys;
};

const getEnvType = (env) => {
  return env.PROD ? "production" : env.DEV ? "development" : "qa";
};

module.exports = (env) => ({
  entry: {
    app: ["./src/index.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    port: 3000,
    open: false,
    host: "0.0.0.0",
    historyApiFallback: true,
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      img: path.resolve(__dirname, "src/assets/img/"),
      svg: path.resolve(__dirname, "src/assets/img/svg/"),
      fonts: path.resolve(__dirname, "src/assets/fonts/"),
      atoms: path.resolve(__dirname, "src/components/atoms/"),
      molecules: path.resolve(__dirname, "src/components/molecules/"),
      organisms: path.resolve(__dirname, "src/components/organisms/"),
      pages: path.resolve(__dirname, "src/components/pages/"),
      constants: path.resolve(__dirname, "src/constants/"),
      context: path.resolve(__dirname, "src/context/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      interfaces: path.resolve(__dirname, "src/interfaces/"),
      services: path.resolve(__dirname, "src/services/"),
      theme: path.resolve(__dirname, "src/theme/"),
      utils: path.resolve(__dirname, "src/utils/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
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
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        loader: "file-loader",
        test: /\.(png|jpe?g|gif)$/i,
        options: {
          outputPath: "resources/img",
        },
      },
      {
        loader: "file-loader",
        test: /\.(pdf)$/i,
        options: {
          outputPath: "resources/docs",
        },
      },
      {
        loader: "file-loader",
        test: /\.(ttf|eot|otf|woff|woff2)$/i,
        options: {
          outputPath: "resources/fonts",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.ejs",
    }),
    new webpack.DefinePlugin(getEnvKeys(env)),
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json" },
        { from: "public/browserconfig.xml" },
        { from: "src/assets/favicon", to: "resources/favicon" },
      ],
    }),
  ],
});
