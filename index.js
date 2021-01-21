require('electron-reload')(__dirname);

const { app, screen } = require('electron');
const glasstron = require('glasstron');
const os = require('os');
const fs = require('fs').promises;
const hjson = require('hjson');
const { BrowserWindow } = require('electron-acrylic-window');

async function getConfig() {
    let result = await fs.readFile('./config.hjson', 'utf8');
    result = hjson.parse(result);

    return result;
}

app.commandLine.appendSwitch('enable-transparent-visuals');

const createWindow = async () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const config = await getConfig();

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
    }

    window.openDevTools();

    window.loadFile('public/index.html');
};

let window = null;

app.on('ready', () => {
    setTimeout(createWindow, os.platform === 'linux' ? 1000 : 0);
});
app.on('window-all-closed', () => app.quit());
