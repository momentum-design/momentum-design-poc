import { PlopGeneratorConfig } from "plop";

import { GENERATOR_NAME } from './../constants/index.js';
import { AddComponent } from "../actions/AddComponent.js";
import { packageName, PROMPT_TYPE } from "../constants/index.js";
import { prompt } from '../prompts/index.js';
import { ModifyPackageJsonAddPackage } from "../actions/ModifyPackageJsonAddPackage.js";

const generator: Partial<PlopGeneratorConfig> = {
  description: 'Scaffold a new component package',
  prompts: [
    prompt(`${packageName}`, `${packageName} of the component`, PROMPT_TYPE.INPUT)
  ],
  actions: [
    AddComponent,
    ModifyPackageJsonAddPackage
  ]
}

export const ComponentGenerator = {
  name: GENERATOR_NAME.COMPONENT,
  generator,
}