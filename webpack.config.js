import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const dirPath = dirname(fileURLToPath(import.meta.url));
export default {
	entry: resolve(dirPath, './index.js'),
	output: {
		path: resolve(dirPath, 'commonjs'),
		filename: 'bundle.cjs',
	},
	experiments: {
		outputModule: true,
	}
};