less-plugin-npm-import
========================

Adds the ability for less to import from npm packages

1. Install with npm
2. specify plugin in lessc with --npm-import
No options. import with npm://packagename/path..
css/less extensions not necessary

To use programatically, use something like this

```
var npm-import-plugin = require("less-plugin-npm-import"),
    options = { plugins: [npm-import-plugin] };
less.render(css, options)
    .then(...
```


Testing
-------

run the tests by running `node test/index.js`
You require the dev dependencies and less v2 in your node_modules (it will be added as a dev dependency once less v2 is released)
