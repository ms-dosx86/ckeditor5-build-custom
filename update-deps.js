const fs = require('fs');
const asyncSpawn = require('simple-async-spawn');

const deps = fs
  .readFileSync('package.json', 'utf8')
  .split(' ')
  .filter(s => s.includes('@ckeditor'))
  .map(s => s.replace(/"/g, ''))
  .map(s => s.replace(':', ''))
  .map(s => s.replace(',', ''))
  .map(s => s.replace('\n', ''))
  .map(s => s + '@latest')
  .join(' ');

asyncSpawn(`npm install ${deps} --legacy-peer-deps`);