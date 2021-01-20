require('electron-reload')(__dirname);

const { app, BrowserWindow, screen } = require('electron');
const glasstron = require('glasstron');
const os = require('os');

app.commandLine.appendSwitch('enable-transparent-visuals');

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    window = new glasstron.BrowserWindow({
        width: width / 1.25,
        height: height / 1.25,
        backgroundColor: '#00000000',
        frame: false,
        blur: true,
        blurType: 'blurbehind',
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
        },
    });

    window.loadFile('public/index.html');
};

let window = null;

app.on('ready', () => {
    setTimeout(createWindow, os.platform === 'linux' ? 1000 : 0);
});
app.on('window-all-closed', () => app.quit());
