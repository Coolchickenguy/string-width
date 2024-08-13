import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const dirPath = dirname(fileURLToPath(import.meta.url));
export default {
    entry: resolve(dirPath, './index.js'),
    output: {
        path: resolve(dirPath, "commonjs"),
        filename: "bundle.cjs"
    },
    experiments: {
        outputModule: true,
    }
}