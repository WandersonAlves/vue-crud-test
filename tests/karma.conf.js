var webpackConfig = require('../webpack.config.js');
delete webpackConfig.entry;

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: ['../node_modules/es6-promise/dist/es6-promise.auto.js','./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    autoWatch: true,
    singleRun: true,
    reporters: ['coverage', 'spec'],
    coverageReporter: {
      reporters: [{
        type: 'lcov',
        dir: '../reports',
        subdir: 'coverage'
      }, {
        type: 'text-summary'
      }],
      check: {
        global: {
          statements: 75,
          branches: 75,
          functions: 75,
          lines: 75
        }
      }
    },
    specReporter: {
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false
    }
  });
};
