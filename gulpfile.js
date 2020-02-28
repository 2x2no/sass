const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const inlineCss = require('gulp-inline-css');
const htmlmin = require('gulp-htmlmin');

gulp.task("sass", () => {
  return gulp
    .src("sass/**/*scss", {
      sourcemaps: true,
      since: gulp.lastRun(sass),
    })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))// 検証環境なので圧縮はしない
    .pipe(autoprefixer())
    .pipe(gulp.dest("css/", {
      sourcemaps: true,
    }));
});

gulp.task("inline-css", () => {
  return gulp
    .src("html/**/*.html")
    .pipe(plumber())
    .pipe(inlineCss({
      applyStyleTags: false,
      removeStyleTags: false
    }))
    .pipe(gulp.dest("htmlMail"));
});

gulp.task('minify-htmlMail', () => {
  return gulp.
    src('htmlMail/*.html')
    .pipe(htmlmin({
        collapseWhitespace : true, // 余白を除去する
        removeComments : true // HTMLコメントを除去する
    }))
    .pipe(gulp.dest('htmlMail_min'));
})

gulp.task('htmlMail', gulp.series('sass', 'inline-css', 'minify-htmlMail'));

gulp.task("watch", function() {
  gulp.watch("sass/**/*scss", gulp.task('sass'));
});

gulp.task('default', gulp.series( gulp.parallel('watch'), function(){
  gulp.watch("sass/**/*scss", gulp.task('sass'));
}));