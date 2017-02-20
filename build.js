const rollup = require('rollup');
const babel  = require('rollup-plugin-babel');
const nodeResolve  = require('rollup-plugin-node-resolve');
const commonjs  = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

rollup.rollup({
    entry: 'client/app.js',
    plugins: [ nodeResolve(), commonjs(), babel(), uglify() ]
}).then(bundle => {
    bundle.write({
        dest: 'client/build/app.js',
        sourceMap: true
    });
}).catch(error => console.error(error));