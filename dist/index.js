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
    var directoryPath = (0, path_1.getPathName)({ path: args_1.commandArgs.path });
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
        throw new Error("Directory does not exist");
    }
    fs.access(args_1.commandArgs.path, fs.constants.F_OK, function (err) {
        if (err) {
            fs.writeFileSync(args_1.commandArgs.path, (0, test_1.createUnitTestCode)({ name: args_1.commandArgs.name, isNewCreate: true }));
            return;
        }
        fs.appendFileSync(args_1.commandArgs.path, "\n\n".concat((0, test_1.createUnitTestCode)({ name: args_1.commandArgs.name })));
    });
}
// WIP
//if (commandArgs.type === TYPE.STORY) {
//}