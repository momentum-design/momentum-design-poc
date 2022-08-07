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
      return `\t\tcase CUSTOM_TAGS.${constant(key)}: return <${data.docsMetadata[key]} client:load></${data.docsMetadata[key]}>;\n`
    }
  }).join('');
}

export const ModifyRenderTagAstro: ActionType = {
  type: 'modify',
  path: join(process.cwd(), 'packages/docs/src/components/ComponentContent/RenderTag.astro'),
  pattern: /(switch\s[(].*[)]\s{\n)(?:\s+case.*\n)*/g,
  template:
    `$1${generateAstroTags(data)}`
};
