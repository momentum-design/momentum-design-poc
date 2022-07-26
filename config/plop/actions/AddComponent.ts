import {join} from 'path';
import { ActionType } from 'plop';

import {folders, ACTION, TYPE, FILE_TYPE, packageName} from '../constants/index.js';

export const AddComponent: ActionType = {
  type: "addMany",
  base: `${join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.COMPONENT}`)}`,
  templateFiles: `${join(`${folders.templates}`, '**', `*.${FILE_TYPE.DEFAULT}`)}`,
  destination: `${join(`${folders.components}`, `{{pascalCase ${packageName}}}`)}`
}