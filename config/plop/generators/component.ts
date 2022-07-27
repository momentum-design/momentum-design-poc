import { PlopGeneratorConfig } from 'plop';

import { GENERATOR_NAME, packageName, PROMPT_TYPE } from '../constants';
import { AddComponent } from '../actions/AddComponent';
import { prompt } from '../prompts';
import { ModifyPackageJsonAddPackage } from '../actions/ModifyPackageJsonAddPackage';

const generator: Partial<PlopGeneratorConfig> = {
  description: 'Scaffold a new component package',
  prompts: [
    prompt(`${packageName}`, `${packageName} of the component`, PROMPT_TYPE.INPUT),
  ],
  actions: [
    AddComponent,
    ModifyPackageJsonAddPackage,
  ],
};

export const ComponentGenerator = {
  name: GENERATOR_NAME.COMPONENT,
  generator,
};
