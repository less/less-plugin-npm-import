@nerdwallet/less-plugin-npm-import
========================

Adds the ability for less to import from npm packages

## NerdWallet Fork

This package, `@nerdwallet/less-plugin-npm-import` is a fork of
[less-plugin-npm-import][] to fix an issue with less in synchronous
mode. See [less/less-plugin-npm-import#25][pr].

[pr]: https://github.com/less/less-plugin-npm-import/pull/25
[less-plugin-npm-import]: https://github.com/less/less-plugin-npm-import

## lessc usage

Install with npm

```bash
npm install -g less-plugin-npm-import
```

In less file:

```
@import "npm://packagename/path/to/file.less";
```

or if importing a css file an [import option](http://lesscss.org/features/#import-options) is required:

```
@import (less) "npm://packagename/path/to/file.css";
```

css/less extensions not necessary

Options:  
prefix - default: npm://

## Command line usage

```
lessc --npm-import file.less file.css
lessc --npm-import="prefix=~" file.less file.css
```

## Programmatic usage

```
var NpmImportPlugin = require("less-plugin-npm-import"),
    options = { plugins: [new NpmImportPlugin({prefix: '~'})] };
less.render(css, options)
    .then(...
```

## Browser usage

Browser usage is not supported.

Testing
-------

run the tests by running `node test`
You require the dev dependencies installed (which includes less)
