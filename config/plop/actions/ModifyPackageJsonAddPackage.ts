import {join} from 'path';
import { ActionType } from 'plop';

import {packageName, root} from '../constants/index.js';

export const ModifyPackageJsonAddPackage: ActionType = {
  type: "modify",
  path: `${join(root, 'package.json')}`,
  pattern: /("scripts":\s{)([^}]*?)(\n.*[}])/g,
  template: `$1$2,\n\t\t"{{kebabCase ${packageName}}}": "yarn workspace @momentum-design/{{kebabCase ${packageName}}}"$3`,
}