// Preload scripts are attached to, and are run by, renderers
// The preload script runs before the renderer process is loaded
// It has access to web APIs as well as Electron's renderer process modules (document, window) and node polyfills (process)
// The preload script provides access to (a subset of) Node.js from the renderer

window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for(const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
})