import {app, globalShortcut, BrowserWindow} from 'electron';
import * as window from './services/window';
import * as application from './services/application';

app.on('ready', () => {
    /*
     * register short key
     */
    const ret = globalShortcut.register('f12', () => {
        let win = BrowserWindow.getFocusedWindow();
        if (!win) return;
        win.webContents.toggleDevTools();
    })

    if (!ret) {
        console.log('registration f12 failed')
    }

    console.log('>>>>>>>>> Unknown App Launch <<<<<<<<<');
    application.init();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
    if (0 == window.getCount()) {
        application.init();
    }
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

app.on('quit', () => {
  console.log('>>>>>>>>> Unknown App Exit <<<<<<<<<');
});

global.services = {
  application,
  window,
};

