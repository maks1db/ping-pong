const yargs = require('yargs');
const { copyStatic } = require('./copy-static');

const options = yargs.option('package', {
  describe: 'Имя пакета',
  type: 'string',
}).argv;

copyStatic(options.package);
