const fs = require("fs");
const path = require("path");
import {
  createReactComponent,
  createViewModelHooks,
} from "./modules/component";
import { TYPE } from "./modules/constants";
import { getPathName } from "./modules/path";
import { commandArgs } from "./modules/args";
if (commandArgs.type === TYPE.COMPONENT) {
  const directoryPath = getPathName({ path: commandArgs.path });
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
  const component = createReactComponent({ name: commandArgs.name });
  const viewModelHooks = createViewModelHooks();

  fs.writeFileSync(path.join(directoryPath, `index.tsx`), component);
  fs.writeFileSync(path.join(directoryPath, `useViewModel.ts`), viewModelHooks);
}
