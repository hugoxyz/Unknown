import os from 'os';
import path from 'path';
import {
    create
} from './window';

export function init(opt) {
    const win = create(opt);
    win.loadURL(`file://${path.join(__dirname, '..', 'pages')}/index.html`);

    return win;
}
