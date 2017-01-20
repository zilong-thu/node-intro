var fs = require('fs');


var dive = function dive(dir, action) {
  if (typeof action !== 'function')
    action = function (error, file) { };

  fs.readdir(dir, function (err, list) {
    if (err) {
      return action(err);
    }

    list.forEach(function (file) {
      if (file === 'node_modules' || file[0] === '.') {
        return;
      }
      var path = dir + '/' + file;
      fs.stat(path, function (err, stat) {
        if (stat && stat.isDirectory()) {
          dive(path, action);
        } else {
          const reg = /\.js$/;
          // path.indexOf('js') > 0
          if (reg.test(path)) {
            console.log('JS file found: ', path);
            action(null, path);
          }
        }
      });
    });
  });
};

var targetDir = '.';
var fileNum = 0;

dive(targetDir, function(error, path) {
  if (!error) {
    var content = fs.readFileSync(path, {
      encoding: 'utf8'
    });
    fileNum++;
    console.log('files: ', fileNum);
  }
});
