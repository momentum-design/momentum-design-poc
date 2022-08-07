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
      return `\t\t{ params: { tag: CUSTOM_TAGS.${constant(key)} } },`
    }
  }).join('\n');
}

export const ModifyTagFileAstro: ActionType = {
  type: 'modify',
  path: join(process.cwd(), 'packages/docs/src/pages/en/components/[tag].astro'),
  pattern: /(export async function getStaticPaths[(][)]\s[{])([^;]+)(;)/g,
  template:
    `$1\n\treturn [\n${generateAstroTags(data)}\n\t]$3`
};
