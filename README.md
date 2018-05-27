# joycon-yaml-loader
[![npm](https://img.shields.io/npm/v/joycon-yaml-loader.svg)](https://www.npmjs.com/package/joycon-yaml-loader)
[![Build Status](https://travis-ci.com/gluons/joycon-yaml-loader.svg?branch=master)](https://travis-ci.com/gluons/joycon-yaml-loader)

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
