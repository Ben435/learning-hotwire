const path = require('path')

module.exports = {
  entry: './app/index.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src', 'public', 'js'),
  },
  resolve: {
    extensions: ['js', 'mjs'],
  },
  mode: 'production',
}
