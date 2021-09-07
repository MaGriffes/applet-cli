const program = require('commander');
//version 版本号
//name 新项目名称
program
    .version(require('../package').version)  //获取版本号
    .command('init <templateName> <projectName>')

program.parse(process.argv);