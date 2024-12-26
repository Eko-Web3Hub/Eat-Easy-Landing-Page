import fs from 'fs';
import path from 'path';

// Get the directory of the current file
const componentsDir = path.resolve('./');

// Read all files in the directory
fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Error reading components directory:', err);
    return;
  }

  // Filter only .jsx files
  const componentFiles = files.filter((file) => file.endsWith('.jsx'));

  // Create export statements
  const exports = componentFiles
    .map((file) => {
      const componentName = path.basename(file, '.jsx');
      return `export { default as ${componentName} } from './${componentName}.jsx';`;
    })
    .join('\n');

  // Write to index.js
  const indexPath = path.join(componentsDir, 'index.js');
  fs.writeFile(indexPath, exports, (writeErr) => {
    if (writeErr) {
      console.error('Error writing index.js:', writeErr);
    } else {
      console.log('index.js has been successfully generated.');
    }
  });
});
