/* eslint-disable global-require */
const { resolve } = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [resolve(__dirname, 'src/components')],
    }),
    require('postcss-cssnext')(),
  ],
};
