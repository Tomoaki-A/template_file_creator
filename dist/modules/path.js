"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathName = void 0;
var getPathName = function (_a) {
    var path = _a.path;
    if (path.includes("src")) {
        return excludeFilePath(path);
    }
    return excludeFilePath("src/".concat(path));
};
exports.getPathName = getPathName;
var excludeFilePath = function (path) {
    var splitPath = path.split("/");
    var newPath = splitPath.flatMap(function (path) { return (path.includes(".") ? [] : path); });
    return newPath.join("/");
};
