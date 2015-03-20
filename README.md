[![NPM version](https://badge.fury.io/js/less-plugin-npm-import.svg)](http://badge.fury.io/js/less-plugin-npm-import) [![Dependencies](https://david-dm.org/less/less-plugin-npm-import.svg)](https://david-dm.org/less/less-plugin-npm-import) [![devDependency Status](https://david-dm.org/less/less-plugin-npm-import/dev-status.svg)](https://david-dm.org/less/less-plugin-npm-import#info=devDependencies) [![optionalDependency Status](https://david-dm.org/less/less-plugin-npm-import/optional-status.svg)](https://david-dm.org/less/less-plugin-npm-import#info=optionalDependencies)

less-plugin-npm-import
========================

Adds the ability for less to import from npm packages

## lessc usage

Install with npm

```bash
npm install -g less-plugin-npm-import
```

specify plugin in lessc with --npm-import
No options. import with npm://packagename/path..
css/less extensions not necessary

## Programmatic usage

```
var npmImport = require("less-plugin-npm-import"),
    options = { plugins: [npmImport] };
less.render(css, options)
    .then(...
```

## Browser usage

Browser usage is not supported.

Testing
-------

run the tests by running `node test/index.js`
You require the dev dependencies and less v2 in your node_modules (it will be added as a dev dependency once less v2 is released)
