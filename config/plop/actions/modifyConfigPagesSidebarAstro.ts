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
      return `\t\t{ text: CUSTOM_TAGS.${constant(key)}, link: \`en/components\${CUSTOM_TAGS.${constant(key)}}\`},`
    }
  }).join('\n');
}

export const ModifyConfigPagesSidebarAstro: ActionType = {
  type: 'modify',
  path: join(process.cwd(), 'packages/docs/src/config.ts'),
  pattern: /(.*)(?<=start auto-generated component docs)[\S\s]*(?=[\/]{2}\send)(.*)/g,
  template:
    `$1\n${generateAstroTags(data)}\n\t\t$2`
};
