import path from 'path'
import { app, ipcMain, shell } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { exec } from 'child_process'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

let mainWindow;

(async () => {
  await app.whenReady()

  mainWindow = createWindow('main', {
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    autoHideMenuBar: true,
    resizable: false,
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

ipcMain.on('open-app', (event, appPath) => {
  // Especifica el directorio de trabajo correcto
  const appDirectory = path.dirname(appPath);

  exec(`"${appPath}"`, { cwd: appDirectory }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al abrir la aplicación: ${error.message}`);
      return;
    }
    console.log(`stdout de la app: ${stdout}`);
    console.error(`stderr de la app: ${stderr}`);

    // Cerrar la ventana principal después de abrir la aplicación
    if (mainWindow) {
      mainWindow.minimize();
    }
  });
});
ipcMain.on('open-url', (event, url) => {
  shell.openExternal(url).then(() => {
    // Cerrar la ventana principal después de abrir la URL
    if (mainWindow) {
      mainWindow.minimize();
    }
  }).catch(err => {
    console.error(`Error al abrir la URL: ${err.message}`);
  });
});
