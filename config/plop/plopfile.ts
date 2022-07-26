import {NodePlopAPI} from 'plop';
import {ComponentGenerator} from './generators/component.js';

export default function (plop: NodePlopAPI) {
  plop.setGenerator(ComponentGenerator.name, ComponentGenerator.generator);
};