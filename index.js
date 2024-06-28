const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const updatedContent = data + 'Hello World!';

  fs.writeFile('file.txt', updatedContent, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('File updated with "Hello World!"');
    }
  });
});