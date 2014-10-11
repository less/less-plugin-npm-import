var getNpmFileManager = require("./npm-file-manager"),
    usage = require("./usage");

module.exports = {
    install: function(less, pluginManager) {
        var NpmFileManager = getNpmFileManager(less);
        pluginManager.addFileManager(new NpmFileManager());
    },
    printUsage: function () {
        usage.printUsage();
    },
    minVersion: [2, 0, 0]
};
