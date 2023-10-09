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

const mainPath = path.resolve(__dirname, "index.ts");
console.log(11, mainPath);

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "index.ts"),
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
    // new CircularDependencyPlugin({
    //   failOnError: true,
    //   exclude: /node_modules/,
    //   cwd: process.cwd(),
    // }),
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
    client: {
      overlay: { warnings: false },
    },
  },
  // ignoreWarnings: [
  //   /Circular dependency between chunks with runtime/
  // ],
};
