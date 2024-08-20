import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value)
  },
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
  openApp: (appPath) => ipcRenderer.send('open-app', appPath),
  openUrl: (url) => ipcRenderer.send('open-url', url),
  windowClose: () => ipcRenderer.send('window-all-closed')
}

contextBridge.exposeInMainWorld('ipc', handler)


export type IpcHandler = typeof handler
