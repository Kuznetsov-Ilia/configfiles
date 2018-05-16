import buble from 'rollup-plugin-buble';
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import replace from 'rollup-plugin-replace';
// import serve from 'rollup-plugin-serve';
// import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
// import babili from 'rollup-plugin-babili';

const plugins = [
  nodeResolve({ modulesOnly: true, preferBuiltins: true }),
  typescript({ check: false }),
  buble({
    objectAssign: 'Object.assign',
  }),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react-dom/index.js': ['render'],
      'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'PropTypes', 'createElement'],
      'node_modules/history/createBrowserHistory.js': 'createBrowserHistory',
      'node_modules/warning/warning.js': 'warning',
    },
  }),
  postcss({
    extract: true, // extracts to `${basename(dest)}.css`
    plugins: [autoprefixer],
    writeDefinitions: true,
    // postcssModulesOptions: { ... }
  }),
];

export default [
  {
    input: ['./src/index.tsx'],
    output: {
      dir: './module',
      format: 'es',
      sourcemap: true,
    },
    external: ['react', 'react-router-dom', 'react-redux'],
    plugins,
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true,
  },
];
