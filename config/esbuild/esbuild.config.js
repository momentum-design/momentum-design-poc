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

export {
  component,
};
