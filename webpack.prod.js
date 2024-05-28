const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const PATHS = require("./paths"); // Import PATHS

const jsPath = "./_App";
const cssPath = "./_App";
const outputPath = "static";
const localDomain = "http://sophie-kate-photography.local/";
const entryPoints = {
  AppJS: jsPath + "/App.js",
  AppCSS: cssPath + "/App.scss",
  Blocks: cssPath + "/Blocks.scss",
};

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "[name].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new BrowserSyncPlugin(
      {
        proxy: localDomain,
        files: [outputPath + "/*.css", "_App/modules/**/**/*.js", "_App/modules/**/**/*.twig", "_App/modules/**/**/*.php"],
        injectCss: true,
      },
      { reload: true }
    ),
  ],
};