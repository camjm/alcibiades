// Preload scripts are attached to, and are run by, renderers
// The preload script runs before and has access to web APIs as well as Electron's renderer process modules and node polyfills

window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for(const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
})