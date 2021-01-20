import fs from 'fs';
const files = fs.promises;

async function getFiles(directory) {
    if (!directory) {
        throw "Capricorn: Argument is missing at getFiles(), filepath wasn't given";
    }
    let result = await files.readdir(directory);
    let returnObj = [];

    // Don't use forEach because it suk
    for (var i = 0; i < result.length; i++) {
        let stat = await files.stat(directory + '\\' + result[i]);

        let obj = {
            fileName: result[i],
            type: result[i].split('.')[1],
            size: {
                amount: stat.size,
                unit: 'B',
                full: stat.size + ' B',
            },
        };
        returnObj.push(obj);
    }

    return returnObj;
}

export { getFiles };
