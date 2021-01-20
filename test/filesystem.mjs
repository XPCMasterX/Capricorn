import assert, { AssertionError } from 'assert';
import { getFiles } from '../src/lib/fileSystem/getFiles.mjs';

describe('Filesystem', () => {
    describe('Get Files:', () => {
        it('should return the correct files', () => {
            let dirname =
                'C:\\Users\\shashi\\Documents\\SchoolVarshith\\fileManager\\test\\props\\filesystem';
            let equal = getFiles(dirname);
            let expected = [
                {
                    fileName: 'nice.txt',
                    type: 'text',
                    size: {
                        amount: '1',
                        unit: 'kb',
                        full: '1 KB',
                    },
                },
                {
                    fileName: 'emoji.png',
                    type: 'Image (png)',
                    size: {
                        amount: '139',
                        unit: 'kb',
                        full: '139 KB',
                    },
                },
            ];

            assert.strictEqual(equal, expected);
        });
        it('should throw the correct error when nothing is passed in', () => {
            try {
                getFiles();

                // This part of the code will execute if the above code doesn't throw an error
                assert.fail('Expected Error Not Thrown');
            } catch (e) {
                // So if getFiles() doesn't throw an error, it fails.
                if (e instanceof AssertionError) {
                    throw e;
                }

                assert.strictEqual(
                    e.message,
                    "Capricorn: Argument is missing \n at getFiles(), filepath wasn't given"
                );
            }
        });
    });
});
