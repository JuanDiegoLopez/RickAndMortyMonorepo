import fs from 'fs';
import path from 'path';

export default function () {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  document.documentElement.innerHTML = html.toString();
}
