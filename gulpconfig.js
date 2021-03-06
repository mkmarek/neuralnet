module.exports = {
    paths : {
        source : 'examples',
        tests : 'tests',
        coverage: 'coverage',
        coverageHtmlReport: 'coverage/html',
        dist: 'transpiled',
        sourceFilePattern: '/**/*.js',
        testFilePattern: '/**/*.js'
    },
    babelPreset : 'es2015-node',
    mochaReporter : 'nyan'
}