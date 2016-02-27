'use strict';

var argv = require('yargs').argv;

var env = (!!argv.env ? argv.env : process.env.NODE_ENV) || 'development';

switch(env) {
    case 'dev':
        env = 'development';
        break;
    case 'prod':
        env = 'production';
        break;
    default:
        env = env;
}

module.exports = function() {

    var config = {
        environment : env,
        configFolder: 'app/config',
        paths: {
            htmls: 'app/index.tpl.html',
            templates: ['app/**/*.html', '!app/index.tpl.html', '!app/index.html'],
            scripts: ['app/**/*.ts', '!app/**/*.d.ts'],
            typings: ['typings/**/*.d.ts', 'app/missing-modules.d.ts'],
            scriptsJS: ['app/**/*.js'],
            stylesCSS: ['app/**/*.css'],
            stylesLESS: ['app/app.module.less'],
            stylesColors: ['app/app.module.theme.less'],
            watch: {
                less: 'app/**/*.less'
            }
        },
        baseHref: {
            production: '/',
            development: '/',
            test: '/'
        },
        themes: {
            init: ['default'],
            main: 'default'
        },
        colors: {
            init: ['red'],
            main: 'red'
        },
        server: {
            host: 'localhost',
            port: 5555,
            livereload: 35727,
            root: argv.root || '',
            startPage: 'app/index.html',
            rewrites: [
                '^/$ /app/index.html [L]'
            ]
        },
        copy: {
            serve: [
                'package.json',
            ],
            build: [
                'package.json',
                'jspm_packages/system.js',
                'jspm.browser.js',
                'jspm.config.js',
                'loader.bundle.js',
                'app/style/fonts/**',
                'app/style/media/**',
                'jspm_packages/npm/font-awesome@4.5.0/fonts/**.*'
            ]
        }
    };

    return config;
};
