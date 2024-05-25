const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

var path = require("path");
const glob = require("glob");

const PATHS = {
  src: path.join(__dirname, "src"),
};


// change these variables to fit your project
const jsPath = "./_App";
const cssPath = "./_App";
const outputPath = "static";
const localDomain = "http://sophie-kate-photography.local/";
const entryPoints = {
  // 'app' is the output name, people commonly use 'bundle'
  // you can have more than 1 entry point
  App: jsPath + "/App.js",
};

module.exports = { 
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "[name].js",
    publicPath: "",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    
    new PurgeCSSPlugin({
      paths: glob.sync(outputPath + "/*.css", { nodir: true }),
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
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      }
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js'],
  // },
};