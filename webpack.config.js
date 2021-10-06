const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src', 'public', 'js'),
  },
  mode: 'production',
}
