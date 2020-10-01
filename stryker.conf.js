const StrykerConf = (config) => {
    config.set({
        babelrcFile: '.babelrc',
        transpilers: ['babel'],
        mutate: [
            'src/**/*.js',
            '!test/**/*.js',
            '!src/server.js',
            '!src/core/config.js',
            '!src/core/logger.js',
            '!src/core/express.js',
            '!src/middlewares/accessLogger.js'],
        files: ['test/**/*.js', 'src/**/*.js'],
        mutator: 'javascript',
        testRunner: 'jest',
        coverageAnalysis: 'off',
        reporter: ['clear-text'],
        thresholds: { low: 90, high: 95, break: 90 }
    });
};

module.exports = StrykerConf;
