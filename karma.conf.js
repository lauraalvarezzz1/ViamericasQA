/**
 * Created by lauraalvarez on 6/14/17.
 */
module.exports = function(config){
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'test/**/*.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    })
}
