"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViewModelHooks = exports.createReactComponent = void 0;
var createReactComponent = function (_a) {
    var name = _a.name;
    return "import React from 'react';\nimport { useViewModel } from \"./useViewModel\";\n\n  type Props = {};\n\n  const ".concat(name, " = ({}:Props) => {\n    const {} = useViewModel();\n    return (\n      <div>\n\n      </div>\n    );\n  };\n\n  export default ").concat(name, ";\n  ");
};
exports.createReactComponent = createReactComponent;
var createViewModelHooks = function () {
    return "export const useViewModel = () => {\n    return {};\n  }";
};
exports.createViewModelHooks = createViewModelHooks;
