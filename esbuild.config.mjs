import esbuild from 'esbuild';

const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/rich-editor.umd.js',
  format: 'iife',
  globalName: 'RichEditor',
  minify: !isWatch,
  sourcemap: true,
  target: 'es2020',
  loader: {
    '.css': 'text',
  },
};

if (isWatch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await esbuild.build(buildOptions);
  console.log('Build complete.');
}
