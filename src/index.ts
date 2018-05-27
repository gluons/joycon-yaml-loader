import { readFile, readFileSync } from 'fs';
import yaml from 'js-yaml';
import pify from 'pify';

import { MultiLoader } from 'joycon';

function load(filepath: string): Promise<any> {
	return pify(readFile)(filepath, 'utf8')
		.then((content: string) => yaml.safeLoad(content, { filename: filepath}));
}

function loadSync(filepath: string): any {
	const content = readFileSync(filepath, 'utf8');
	return yaml.safeLoad(content, {
		filename: filepath
	});
}

const loader: MultiLoader = {
	test: /\.ya?ml$/,
	load,
	loadSync
};

export default loader;
module.exports = loader;
