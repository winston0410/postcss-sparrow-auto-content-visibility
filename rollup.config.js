const {
  terser
} = require('rollup-plugin-terser')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

export default [{
  input: './src/index.js',
  output: [{
    exports: 'auto',
    file: 'dist/index.esm.js',
    format: 'esm',
    plugins: [
      terser({
        compress: {
          drop_console: true
        },
        output: {
          comments: false
        },
        ecma: 2019
      })
    ]
  },
  {
    exports: 'auto',
    file: 'dist/index.cjs.js',
    format: 'cjs',
    plugins: [
      terser({
        compress: {
          drop_console: true
        },
        output: {
          comments: false
        },
        ecma: 2019
      })
    ]
  }
  ],
  plugins: [
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}]
