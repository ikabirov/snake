const gulp = require('gulp');
const path = require('path');
const exec = require('child_process').exec;
const closureCompiler = require('google-closure-compiler').gulp();

function getCompilerSettings() {
    const languageOut = process.argv[2] == '--es6' ? 'ECMASCRIPT_2015' : 'ECMASCRIPT5_STRICT';
    return {
        entry_point: path.join(__dirname, `tsickle-output/index.js`),
        js: [
            path.join(__dirname, `tsickle-output/**.js`),
        ],
        compilation_level: 'ADVANCED',
        warning_level: 'VERBOSE',
        language_in: 'ECMASCRIPT_NEXT',
        language_out: languageOut,
        js_output_file: 'snake.js',
    };
}

gulp.task('generate-js', function (cb) {
    exec(`tsickle -- --outDir ${path.resolve('./tsickle-output')}`, cb);
});

gulp.task('default', ['generate-js'], () => {
    return closureCompiler(
        getCompilerSettings()
    )
        .src() // needed to force the plugin to run without gulp.src
        .pipe(gulp.dest('dist'));
});
