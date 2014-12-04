var gulp = require('gulp');
var path = require('path');
var packageInfo = require('./package.json');
var src = path.resolve(process.cwd(), 'lib');
var build = path.resolve(process.cwd(), 'build');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var spm = require('gulp-spm');
var pipe = require('multipipe');

gulp.task('build', function() {
  var args = {
    cwd: __dirname,
    include: 'standalone',
    ignore: 'react',
    stream: {
      '.js': function jsStream(opt) {
        return pipe(
          require('gulp-jsx')(),
          spm.plugin.js(opt)
        );
      }
    }
  };

  gulp.src('index.js')
    .pipe(spm(args))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function () {
    return gulp.src('./lib/**/*.js')
        .pipe(require('gulp-jsx')())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs());
});

gulp.task('tag', function (done) {
    var cp = require('child_process');
    var version = packageInfo.version;
    cp.exec('git tag ' + version + ' | git push origin ' + version + ':' + version + ' | git push origin master:master', done);
});


gulp.task('gh-changelog', function (done) {
    var ghChangeLog = require('gh-changelog');
    ghChangeLog.getChangeLog({
        user: 'kissyteam',
        repo: 'xtemplate',
        mdFilePath: './HISTORY.md'
    }, function () {
        done();
    });
});
