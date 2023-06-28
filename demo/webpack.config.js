// const path = require('path');

// module.exports = {
//   entry: path.join(__dirname, 'index.js'),
//   mode: 'production',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'index.js',
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     compress: false,
//     port: 4000,
//   }
// };


const path = require("path");
const webpack = require("webpack");
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "index.ts"),
    // main: path.resolve(__dirname, "index.js"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin({
      failOnError: true,
      exclude: /node_modules/,
      cwd: process.cwd(),
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
};
