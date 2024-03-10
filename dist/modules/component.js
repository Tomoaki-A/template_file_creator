"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViewModelHooks = exports.createReactComponent = void 0;
var createReactComponent = function (_a) {
    var name = _a.name;
    return "import { useViewModel } from \"./useViewModel\";\n\ntype Props = {};\n\nconst ".concat(name, " = ({}: Props) => {\n  const {} = useViewModel();\n  return (\n    <div>\n      <div></div>\n    </div>\n  );\n};\n\nexport default ").concat(name, ";\n");
};
exports.createReactComponent = createReactComponent;
var createViewModelHooks = function () {
    return "export const useViewModel = () => {\n    return {};\n  }";
};
exports.createViewModelHooks = createViewModelHooks;
