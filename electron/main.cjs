// extension is .cjs to indicate it is a CommonJS module
// package.json has a type of 'module', so all .js files are ESM by default

const { app, BrowserWindow, shell } = require('electron')
const { join } = require('path')

if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
}

let win = null

async function createWindow() {
    win = new BrowserWindow({
        title: 'Main Window',
        width: 1024,
        height: 768,
        webPreferences: {
            // preload: join(__dirname, '../electron/preload.cjs'),
            // contextIsolation: false,
            nodeIntegration: true
        }
    })

    if (app.isPackaged) {
        win.loadFile(join(__dirname, '../dist/index.html'))
    } else {
        // Vite's dev server (by default port is 5173, but can be changed in config)
        win.loadURL('http://localhost:5173')
        win.webContents.openDevTools()
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    win = null
    if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
    if (win) {
        // Focus on the main window if the user tried to open another
        if (win.isMinimized()) win.restore()
        win.focus()
    }
})

app.on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows()
    if (allWindows.length) {
        allWindows[0].focus()
    } else {
        createWindow()
    }
})
