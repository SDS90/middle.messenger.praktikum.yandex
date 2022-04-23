let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;
let runSequence = require('run-sequence');

function defaultTask(cb) {
    gulp.task('pug', function () {
        return gulp.src('sources/*.pug')
                .pipe(pug({pretty: true}))
                .pipe(gulp.dest(''))
        });
        
    gulp.task('watch', function(){
        $.watch('sources/**/*.pug ', function(event, cb) {
                return runSequence('pug', reload);
            });
    });

    gulp.task('build', gulp.series('clean');

    cb();
}

exports.default = defaultTask;