const path = require("path");

module.exports = {
  entry: "./src/index.js", // Точка входа
  output: {
    path: path.resolve(__dirname, "dist"), // Директория сборки
    filename: "index.js", // Имя выходного файла
    library: "ajs", // Имя библиотеки
    libraryTarget: "umd", // Формат модуля
    globalObject: "this", // Глобальный объект для UMD
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JavaScript файлов
        exclude: /node_modules/, // Исключение node_modules
        use: {
          loader: "babel-loader", // Транспиляция через Babel
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Расширения для импорта
  },
};
