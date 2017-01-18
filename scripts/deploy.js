const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.join(__dirname, '../build'), {
  repo: 'https://github.com/jeongsd/react-intl-example',
}, error => (console.log(error || '')));
