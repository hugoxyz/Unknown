import { join } from 'path';
import { create } from './window';

export function init(opt) {
  const win = create(opt);
  win.loadURL(`file://${join(__dirname, '..', 'pages')}/index.html`);

  return win;
}
