// extension is .cjs to indicate it is a CommonJS module
// package.json has a type of 'module', so all .js files are ESM by default

//Node.js uses CommonJS modules
const { app, BrowserWindow, shell } = require('electron')
const { join } = require('path')

// app module controls the application's event lifecycle.
// BrowserWindow module creates and manages application windows.

if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
}

let win = null

async function createWindow() {
    // __dirname points to the path of the currently executing script (different when in development or packaged mode)
    win = new BrowserWindow({
        title: 'Main Window',
        width: 1024,
        height: 768,
        webPreferences: {
            preload: join(__dirname, '../electron/preload.cjs'),
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

app.whenReady().then(() => {
    // only create window when electron app is ready
    createWindow()

    // windows cannot be created before the ready event, so only listen for activate afer the app is initialized
    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
        const allWindows = BrowserWindow.getAllWindows()
        if (allWindows.length) {
            allWindows[0].focus()
        } else {
            createWindow()
        }
    })
})

// Quite when all windows are closed, except for macOS. There, it's common for apps and their munu bar to stay active until the user quites explicitly with Cmd + Q.
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



// Require other files contains the app's specific main process logic here
//TODO:
