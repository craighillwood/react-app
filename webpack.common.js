module.exports = {
  // The home directory for webpack, the entry and module.rules.loader option
  // is resolved relative to this directory.
  // Ref: https://webpack.js.org/configuration/entry-context/#context
  context: __dirname,
  // Ref: https://webpack.js.org/concepts/entry-points/
  entry: {
    main: './src/index.js',
  },
  output: {
    // The url to the output directory resolved relative to the HTML page.
    publicPath: '/',
  },
};
