const fs = require("fs");
const path = require("path");

import { commandArgs } from "./modules/args";
import {
  createReactComponent,
  createViewModelHooks,
} from "./modules/component";
import { TYPE } from "./modules/constants";
import { getPathName } from "./modules/path";
import { createUnitTestCode, getTestFilePath } from "./modules/test";

if (commandArgs.type === TYPE.COMPONENT) {
  const directoryPath = `${getPathName({ path: commandArgs.path })}/${
    commandArgs.name
  }`;
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
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const testFilePath = getTestFilePath({ path: commandArgs.path });

  fs.access(testFilePath, fs.constants.F_OK, (err: any) => {
    if (err) {
      fs.writeFileSync(
        testFilePath,
        createUnitTestCode({ name: commandArgs.name, isNewCreate: true })
      );
      return;
    }
    fs.appendFileSync(
      testFilePath,
      `\n\n${createUnitTestCode({ name: commandArgs.name })}`
    );
  });
}

// WIP
//if (commandArgs.type === TYPE.STORY) {
//}
