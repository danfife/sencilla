import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: './index.js',
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
      },
      {
        file: './dist/sencilla.mjs.js',
        format: 'es',
        plugins: [terser()]
      }
    ],
    plugins: [
      commonjs(),
      babel({ babelHelpers: 'bundled' })
    ]
  }
];