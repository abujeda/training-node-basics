const fs = require('fs');
const path = require('path');

const filesToDelete = ['.DS_Store', '.thumb', 'Thumbs.db'];

var starDir = '.';

if (process.argv.length > 2) {
  starDir = process.argv[2];
}

console.log(`photo-cleanup: starDir: ${starDir}`);

function readDirectory(dirPath){
  console.log(`photo-cleanup: checking: ${dirPath}`);
  fs.readdir(dirPath, function(err, items){
    items.forEach(file => {
      const filePath = path.resolve(dirPath, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      const toDelete = filesToDelete.indexOf(file) > -1;
      console.log(`${filePath} toDelete=${toDelete} isDirectory=${isDirectory}`);

      if (isDirectory){
        //readDirectory(filePath);
      }

    })
  });
}

readDirectory(starDir);
