// https://cli.vuejs.org/config/#configuration-reference
const package = require('./package.json');

const repoName = package.repository.url.match(/\/\w+\/(.*?)\.git$/i)[1];

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/'
};
