import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      onComportList: (callback: (value: any) => void) => void,
      setSelectedComPort: (string) => (string, void) => void
      
    }
  }
}
