# joycon-yaml-loader
[![npm](https://img.shields.io/npm/v/joycon-yaml-loader.svg?style=flat-square)](https://www.npmjs.com/package/joycon-yaml-loader)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/joycon-yaml-loader.svg?style=flat-square)](https://travis-ci.com/gluons/joycon-yaml-loader)

A [YAML](http://yaml.org/) loader for [JoyCon](https://github.com/egoist/joycon).

## Installation

```bash
npm install joycon-yaml-loader
# or #
yarn add joycon-yaml-loader
```

## Usage

```js
const JoyCon = require('joycon');
const JoyConYAMLLoader = require('joycon-yaml-loader');

const joycon = new JoyCon();
joycon.addLoader(JoyConYAMLLoader);

joycon.load([/* file... */]);
```
