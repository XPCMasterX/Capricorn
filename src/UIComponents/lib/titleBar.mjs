const { remote } = window.require('electron');

function closeWindow() {
    let window = remote.getCurrentWindow();
    window.close();
}
function minimizeWindow() {
    let window = remote.getCurrentWindow();
    window.minimize();
}
function makeWindowFullScreen() {
    let window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
}

export { closeWindow, minimizeWindow, makeWindowFullScreen };
