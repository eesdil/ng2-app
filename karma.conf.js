module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jspm',
            'mocha',
            'chai-as-promised',
            'chai'
        ],
        plugins: [
            'karma-jspm',
            'karma-mocha',
            'karma-chai',
            'karma-chai-as-promised',
            'karma-phantomjs2-launcher',
            'karma-chrome-launcher',
            'karma-junit-reporter'
        ],
        jspm: {
            loadFiles: [
                'karma-init.js',
                'app/**/*.spec.js'
                         ],
                         serveFiles: [
                         'app/**/!(*spec).js'
            ]
        },
        proxies: {
            '/app/': '/base/app/',
            '/jspm_packages/': '/base/jspm_packages/'
        },
        // list of files / patterns to load in the browser
        files: [
            'jspm_packages/github/ModuleLoader/es6-module-loader@0.17.8/dist/es6-module-loader.js'
        ],
        // list of files to exclude
        exclude: [
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots','junit'],
        junitReporter: {
            outputFile: 'test-results.xml',
            useBrowserName: false
        },

        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'PhantomJS2'
                // 'Chrome'
        ],
        captureTimeout: 60000,
        browserNoActivityTimeout: 100000,
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
