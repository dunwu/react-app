const chalk = require('chalk');
const ghpages = require('gh-pages');
const path = require('path');
const paths = require('../config/paths');

console.log(chalk.bold.cyan('Publish to gh-pages...'));

const version = require(paths.appPackageJson).version;
console.log(chalk.bold('Version：%s'), version);

ghpages.publish('build', {
  dest: 'demos/',
  message: 'Publish demo v' + version,
  user: {
    name: 'Zhang Peng',
    email: 'atlantis1024@163.com'
  }
}, function (err) {
  if (err) {
    console.log(chalk.bold.red('Failed to publish demo v%s.'), version);
    console.log(chalk.bold.red(err));
    throw err;
  }
  console.log(chalk.bold.yellow('Site has been published to \n\t https://zp1024.github.io/react-app/demos/'));
});
