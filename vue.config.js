module.exports = {
  devServer: {
    headers: { "Access-Controll-Allow-Origin": "*" },
    proxy: "https://api.deezer.com/",
  },
  publicPath: "./",
};
