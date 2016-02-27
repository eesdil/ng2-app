importScripts(
    'jspm_packages/system.js',
    'jspm.browser.js',
    'jspm.config.js'
);
System.import('./app/worker.js')
    .catch(function (error) {
        console.error('ERROR @ loader :', error);
    });
