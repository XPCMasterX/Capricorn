import fs from 'fs';

function getFiles(directory) {
    fs.readdir('file', (err, files) => {
        if (err) throw err;

        return files;
    });
}

export { getFiles };
