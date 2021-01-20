import assert, { AssertionError } from 'assert';
import { getFiles } from '../src/lib/fileSystem/getFiles.mjs';
import path from 'path';

describe('Filesystem', () => {
    describe('Get Files:', () => {
        it('should return the correct files', async () => {
            let equal = await getFiles('./test/props/filesystem/');
            let expected = [
                {
                    fileName: 'emoji.png',
                    type: 'png',
                    size: {
                        amount: 142461,
                        unit: 'B',
                        full: '142461 B',
                    },
                },
                {
                    fileName: 'nice.txt',
                    type: 'txt',
                    size: {
                        amount: 62,
                        unit: 'B',
                        full: '62 B',
                    },
                },
            ];

            assert.deepStrictEqual(equal, expected);
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
                    "Capricorn: Argument is missing at getFiles(), filepath wasn't given"
                );
            }
        });
    });
});
