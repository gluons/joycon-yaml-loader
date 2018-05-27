import JoyCon from 'joycon';
import { resolve } from 'path';

import JoyConYAMLLoader from '../dist';

const joycon = new JoyCon({
	files: ['config.yaml'],
	cwd: resolve(__dirname, './fixture'),
	stopDir: __dirname
});

joycon.addLoader(JoyConYAMLLoader);

describe('Load YAML config', () => {
	it('should load YAML config successfully', async () => {
		const { data } = await joycon.load();
		expect(data).toEqual({
			a: 1,
			b: '2',
			c: [3, 4, 5]
		});
	});
});
