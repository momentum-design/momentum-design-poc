import { join } from 'path';
import { ActionType } from 'plop';

import { createRequire } from 'module';
const cRequire = createRequire(import.meta.url); // TODO: https://github.com/nodejs/node/pull/40250
const data = cRequire('../../../docs_pkg_meta.json');

const constant = (string) => {
  return (
    string
      .replace(/[-\s]+/g, '_')
      .toUpperCase()
  )
}

const generateAstroTags = (data) => {
  return Object.keys(data.docsMetadata).map((key) => {
    if (key) {
      return `\t${constant(key)} = '${data.docsMetadata[key]}',`
    }
  }).join('\n');
}

export const ModifyCustomTagsTypesEnumAstro: ActionType = {
  type: 'modify',
  path: join(process.cwd(), 'packages/docs/src/utils/types.ts'),
  pattern: /(export enum CUSTOM_TAGS\s{)(?:[^}]+)(})/g,
  template:
    `$1\n${generateAstroTags(data)}\n$2`
};
