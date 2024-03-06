"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestFilePath = exports.createUnitTestCode = void 0;
var IMPORT_STATEMENT = "import { describe, expect, test } from 'vitest';";
var createUnitTestCode = function (_a) {
    var name = _a.name, _b = _a.isNewCreate, isNewCreate = _b === void 0 ? false : _b;
    return "".concat(isNewCreate ? "".concat(IMPORT_STATEMENT, "\n") : "", "\ndescribe(\"").concat(name, "\", () => {\n  const testCase: Array<\n    [\n      args: Parameters<typeof ").concat(name, ">[number],\n      expected: ReturnType<typeof ").concat(name, ">\n    ]\n  > = [];\n  test.each(testCase)(\"%s\", (args, expected) => {\n    expect(").concat(name, "(args)).toBe(expected);\n  });\n});");
};
exports.createUnitTestCode = createUnitTestCode;
var getTestFilePath = function (_a) {
    var path = _a.path;
    if (path.includes(".test")) {
        return path;
    }
    var newPath = path.replace(".ts", ".test.ts");
    return newPath;
};
exports.getTestFilePath = getTestFilePath;
