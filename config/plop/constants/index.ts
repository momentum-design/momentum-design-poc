import {join} from 'path';

export const root: string = process.cwd();
export const plop: string = `${join(root, 'config', 'plop')}`;

export const packageName: string = 'packageName';

export enum PROMPT_TYPE {
  INPUT = 'input',
}

export enum GENERATOR_NAME {
  COMPONENT = 'component',
}

export const folders = {
  templates: `${join(plop, 'templates')}`,
  components: `${join(root, 'packages', 'components')}`,
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