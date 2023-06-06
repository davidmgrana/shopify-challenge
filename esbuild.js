// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require('esbuild');

build({
  entryPoints: ['./tabs/tabs.tsx'],
  outfile: './theme/assets/tabs.js',
  bundle: true,
  minify: true,
  target: ['es2020', 'chrome58', 'firefox57', 'safari11'],
}).catch(() => {
  return process.exit(1);
});
