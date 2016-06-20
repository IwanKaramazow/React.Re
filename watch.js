const { exec } = require('child_process');
const sane = require('sane');

const src = `${__dirname}/src`;
const compile_command = 'node ./node_modules/CommonML/build.js --forDebug=true --jsCompile=true';

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
