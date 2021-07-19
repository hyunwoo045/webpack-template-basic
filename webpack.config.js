// nodejs 가 제공하는 전역 모듈
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // resolve 는 첫째 인자와 둘 째 인자를 합쳐주고, __dirname 은 현재 파일의 경로를 나타낸다.
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },

  // test에 설정된 형식의 파일을 가져와서 use에 추가한 module이 동작하는 형식
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"], // 순서 중요함
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      // static 안에 있는 내용들이 복사되서 dist 로 들어갈 수 있도록 명시해주는 것. 여러 경로를 설정할 수 있다.
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
