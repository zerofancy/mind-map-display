const fs = require('fs');
const path = require('path');

const files = [];

function traverseFolder(folderPath) {
  const items = fs.readdirSync(folderPath);
  items.forEach(item => {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      traverseFolder(itemPath);
    } else if (stats.isFile()) {
      files.push(item);
    }
  });
}

const folderPath = path.join(__dirname, 'meta');
traverseFolder(folderPath)
console.log(files)