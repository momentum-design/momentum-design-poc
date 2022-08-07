import { join } from 'path';

export enum PROMPT_TYPE {
  INPUT = 'input',
}

export enum GENERATOR_NAME {
  COMPONENT = 'component',
  DOCS = 'docs',
}

export enum ACTION {
  ADD = 'add',
  MODIFY = 'modify',
}

export enum TYPE {
  COMPONENT = 'component',
}

export enum FILE_TYPE {
  DEFAULT = 'hbs',
}

export const packageName: string = 'packageName';
export const root: string = process.cwd();
export const plop: string = `${join(root, 'config', 'plop')}`;

export const folders = {
  templates: `${join(plop, 'templates')}`,
  components: `${join(root, 'packages', 'components')}`,
};
