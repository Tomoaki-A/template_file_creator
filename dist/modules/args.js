"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandArgs = void 0;
var args = process.argv.slice(2);
var type = args[0];
var name = args[1];
var path = args[2];
exports.commandArgs = {
    type: type,
    name: name,
    path: path,
};
