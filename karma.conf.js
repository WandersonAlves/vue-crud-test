var webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry;

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
      'tests/**/*.spec.js'
    ],

    // Vamos enviar os testes para o bundle
    preprocessors: {
      'src/**/*.(js|vue)': ['coverage'],
      'tests/**/*.spec.js': ['webpack']
    },

    // Usando a configuração do Webpack
    webpack: webpackConfig,

    // Evitar paredes de informações
    webpackMiddleware: {
      noInfo: true
    },

    autoWatch: true,

    singleRun: true,
    reporters: ['coverage', 'spec'],
		coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'reports', subdir: 'covarage' }
      ],
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
		// plugins: [
		// 	"karma-coverage",
		// 	"karma-spec-reporter",
		// ]
  });
};
