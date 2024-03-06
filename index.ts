const fs = require("fs");
const path = require("path");

import {
  createReactComponent,
  createViewModelHooks,
} from "./modules/component";
import { TYPE } from "./modules/constants";
import { getPathName } from "./modules/path";
import { commandArgs } from "./modules/args";
import { createUnitTestCode } from "./modules/test";

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

if (commandArgs.type === TYPE.TEST) {
  const directoryPath = path.dirname(commandArgs.path);
  if (!fs.existsSync(directoryPath)) {
    throw new Error("Directory does not exist");
  }

  fs.access(commandArgs.path, fs.constants.F_OK, (err: any) => {
    if (err) {
      fs.writeFileSync(
        commandArgs.path,
        createUnitTestCode({ name: commandArgs.name, isNewCreate: true })
      );
      return;
    }
    fs.appendFileSync(
      commandArgs.path,
      `\n\n${createUnitTestCode({ name: commandArgs.name })}`
    );
  });
}

// WIP
//if (commandArgs.type === TYPE.STORY) {
//}
