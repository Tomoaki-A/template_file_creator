"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var args_1 = require("./modules/args");
var component_1 = require("./modules/component");
var constants_1 = require("./modules/constants");
var path_1 = require("./modules/path");
var test_1 = require("./modules/test");
if (args_1.commandArgs.type === constants_1.TYPE.COMPONENT) {
    var directoryPath = "".concat((0, path_1.getPathName)({ path: args_1.commandArgs.path }), "/").concat(args_1.commandArgs.name);
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }
    var component = (0, component_1.createReactComponent)({ name: args_1.commandArgs.name });
    var viewModelHooks = (0, component_1.createViewModelHooks)();
    fs.writeFileSync(path.join(directoryPath, "index.tsx"), component);
    fs.writeFileSync(path.join(directoryPath, "useViewModel.ts"), viewModelHooks);
}
if (args_1.commandArgs.type === constants_1.TYPE.TEST) {
    var directoryPath = path.dirname(args_1.commandArgs.path);
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }
    var testFilePath_1 = (0, test_1.getTestFilePath)({ path: args_1.commandArgs.path });
    fs.access(testFilePath_1, fs.constants.F_OK, function (err) {
        if (err) {
            fs.writeFileSync(testFilePath_1, (0, test_1.createUnitTestCode)({ name: args_1.commandArgs.name, isNewCreate: true }));
            return;
        }
        fs.appendFileSync(testFilePath_1, "\n\n".concat((0, test_1.createUnitTestCode)({ name: args_1.commandArgs.name })));
    });
}
// WIP
//if (commandArgs.type === TYPE.STORY) {
//}
