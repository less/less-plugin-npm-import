var less = require("less"),
    lessTest = require("less/test/less-test"),
    lessTester = lessTest(),
    plugin = require('../lib'),
    stylize = less.lesscHelper.stylize;

console.log("\n" + stylize("LESS - npm import", 'underline') + "\n");

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: [new plugin()] },
    "npm-import/");

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: [new plugin({ prefix: 'npm://'})] },
    "npm-import/");

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: [new plugin({ basedir: __dirname})] },
    "npm-import/");
