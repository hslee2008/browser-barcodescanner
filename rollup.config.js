import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json' assert { type: 'json' }
import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      {
        extensions: ['.js', '.ts']
      },
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.ts']
      })
    ]
  }
]
