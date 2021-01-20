require('electron-reload')(__dirname);

const config = require('./config.json');
console.log(typeof config.blurType);
const { app, screen } = require('electron');
const glasstron = require('glasstron');
const os = require('os');
const { BrowserWindow } = require('electron-acrylic-window');

app.commandLine.appendSwitch('enable-transparent-visuals');

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    if (config.blurType === 'acrylic') {
        window = new BrowserWindow({
            width: width / 1.25,
            height: height / 1.25,
            backgroundColor: config.backgroundColor,
            frame: false,
            resizable: true,
            webPreferences: {
                enableRemoteModule: true,
                nodeIntegration: true,
            },
            vibrancy: {
                theme: config.acrylicOptions.theme,
                effect: config.acrylicOptions.effect,
            },
        });

        console.log('acrylic');
    } else {
        window = new glasstron.BrowserWindow({
            width: width / 1.25,
            height: height / 1.25,
            backgroundColor: config.backgroundColor,
            frame: false,
            resizable: true,
            blur: true,
            blurType: 'blurbehind',
            webPreferences: {
                enableRemoteModule: true,
                nodeIntegration: true,
            },
        });

        console.log('blurbehind');
    }

    window.loadFile('public/index.html');
};

let window = null;

app.on('ready', () => {
    setTimeout(createWindow, os.platform === 'linux' ? 1000 : 0);
});
app.on('window-all-closed', () => app.quit());
