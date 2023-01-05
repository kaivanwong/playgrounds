import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: './src/main.ts',
  external: ['lodash'],
  output: [
    { format: 'es', file: 'dist/main.esm.js', sourcemap: true },
    { format: 'cjs', file: 'dist/main.cjs.js', sourcemap: true },
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    typescript(),
    json(),
  ],
}
