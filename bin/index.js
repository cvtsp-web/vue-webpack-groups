#!/usr/bin/env node

const path = require('path')
const spawn = require('cross-spawn')
const args = process.argv.slice(2)

const scriptsIndex = args.findIndex(val => {
    return val === 'start' || val === 'build' || val === 'test';
});
const script = scriptsIndex >= 0 ? args[0] : '';

switch(script) {
    // dev
    case 'start': 
        spawn.sync('webpack-dev-server', [
            '--inline',
            '--progress',
            '--config',
            require.resolve('../build/webpack.dev.conf.js')
        ], {stdio: 'inherit'});
    break;
    // pro
    case 'build':
        spawn.sync('node', [
            require.resolve('../build/build.js')
        ], { stdio: 'inherit'});
     break;
}



