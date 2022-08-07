import { PlopGeneratorConfig } from 'plop';

import { GENERATOR_NAME } from '../constants';

import { ModifyTagFileAstro } from '../actions/modifyTagFileAstro';
import { ModifyRenderTagAstro, ModifyRenderTagImportsAstro } from '../actions/modifyRenderTagAstro';
import { ModifyCustomTagsTypesEnumAstro } from '../actions/modifyCustomTagsTypesEnumAstro';
import { ModifyConfigPagesSidebarAstro } from '../actions/modifyConfigPagesSidebarAstro';

const generator: Partial<PlopGeneratorConfig> = {
  description: 'Generate Docs',
  prompts: [],
  actions: [
    // TODO: generate docs metadata file or skip altogether
    ModifyTagFileAstro,
    ModifyRenderTagAstro,
    ModifyRenderTagImportsAstro,
    ModifyCustomTagsTypesEnumAstro,
    ModifyConfigPagesSidebarAstro
  ],
};

export const DocsGenerator = {
  name: GENERATOR_NAME.DOCS,
  generator,
};
