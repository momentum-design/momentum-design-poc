import esbuild from 'esbuild';

const component = async () => {
  const projectPath = process.cwd();
  
  await esbuild.build({
    bundle: true,
    entryPoints: [`${projectPath}/src/index.js`],
    format: 'iife',
    globalName: 'MomentumDesign.components',
    minify: true,
    sourcemap: true,
    outfile: `${projectPath}/dist/browser/index.js`,
  });  
}

const plop = async () => {
  const projectPath = `${join(process.cwd(), 'config', 'plop')}`;
  
  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'plopfile.ts')}`],
    format: 'esm',
    minify: true,
    outfile: `${projectPath}/dist/index.js`,
  }); 
}

export {
  component,
  plop
};
