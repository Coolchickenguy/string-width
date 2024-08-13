import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const dirPath = dirname(fileURLToPath(import.meta.url));
const config = {
	entry: resolve(dirPath, './index.js'),
	output: {
		path: resolve(dirPath, 'dist'),
		filename: 'bundle.cjs',
		library: {
			type: 'commonjs',
		},
	},
	experiments: {
		outputModule: true,
	},
};
export default config;
