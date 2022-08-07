import { NodePlopAPI } from 'plop';
import { ComponentGenerator } from './generators/component';
import { DocsGenerator } from './generators/docs';

export default (plop: NodePlopAPI) => {
  plop.setGenerator(ComponentGenerator.name, ComponentGenerator.generator);
  plop.setGenerator(DocsGenerator.name, DocsGenerator.generator);
};
