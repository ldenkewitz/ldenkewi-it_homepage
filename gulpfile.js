var gulp = require('gulp');
var gutil = require('gulp-util');

var paths = {
   jsSources   : 'js/main.js',
   cssSources  : 'css/main.css',
   htmlSources : ['home.html', 'about.html', 'index.html'],
   jsTarget    : '/var/www/html/js/',
   cssTarget   : '/var/www/html/css/',
   htmlTarget  : '/var/www/html/'
};

gulp.task('logStart', function() {
   gutil.log('watching the fs for copying started...');
});

gulp.task('logJsCopy', function() {
   gutil.log('copied JavaScript sources to: '+paths.jsTarget);
});

gulp.task('logCssCopy', function() {
   gutil.log('copied CSS sources to: '+paths.cssTarget);
});

gulp.task('logHtmlCopy', function() {
   gutil.log('copied Html sources to: '+paths.htmlTarget);
});

gulp.task('copyJs', function() {
   gulp.src(paths.jsSources).pipe(gulp.dest(paths.jsTarget));
});

gulp.task('copyCss', function() {
   gulp.src(paths.cssSources).pipe(gulp.dest(paths.cssTarget));
});

gulp.task('copyHtml', function() {
   gulp.src(paths.htmlSources).pipe(gulp.dest(paths.htmlTarget));
});

gulp.task('default', ['logStart'], function() {
   gulp.watch(paths.jsSources, ['copyJs','logJsCopy']);
   gulp.watch(paths.cssSources, ['copyCss','logCssCopy']);
   gulp.watch(paths.htmlSources, ['copyHtml','logHtmlCopy']);
});