import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js',
  output: [
    {
      file: './dist/sencilla.js',
      format: 'iife',
      name: '$'
    },
    {
      file: './dist/sencilla.min.js',
      format: 'iife',
      name: '$',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};