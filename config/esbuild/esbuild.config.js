import esbuild from 'esbuild';
import {join} from 'path';

const component = async () => {
  const projectPath = process.cwd();
  
  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'src', 'index.js')}`],
    format: 'iife',
    globalName: 'MomentumDesign.components',
    minify: true,
    sourcemap: true,
    outfile: `${join(projectPath, 'dist', 'browser', 'index.js')}`,
  });  
}

const plop = async () => {
  const projectPath = `${join(process.cwd(), 'config', 'plop')}`;
  
  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'plopfile.ts')}`],
    format: 'esm',
    minify: true,
    outfile: `${join(projectPath, 'dist', 'plopfile.js')}`,
    tsconfig: `${join(projectPath, 'tsconfig.plop.json')}`,
    platform: 'node',
  }); 
}

export {
  component,
  plop
};
