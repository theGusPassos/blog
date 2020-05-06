module.exports = {
  publicPath: "/blog/",
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: "raw-loader",
        },
      ],
    },
  },
};
