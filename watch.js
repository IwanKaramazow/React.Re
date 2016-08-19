const { exec } = require('child_process');
const sane = require('sane');

const src = `${__dirname}/src`;
const compile_command = '`npm bin`/bsc -pp refmt -impl src/bstest.re';
//'node_modules/.bin/compile';


const watcher = sane(src);

watcher.on('change', (filepath, root, stat) => {
    exec(compile_command, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
 });
