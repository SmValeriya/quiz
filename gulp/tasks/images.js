import gulp from 'gulp';
import gulpif from 'gulp-if';
import changed from 'gulp-changed';
import imagemin, { gifsicle, mozjpeg, optipng } from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import { paths, isProdMode } from '../gulp.config.js';

export const images = () => {
  return gulp.src(paths.images.src)
    .pipe(plumber())
    .pipe(changed(paths.images.dist))
    .pipe(gulpif(isProdMode, imagemin([
      gifsicle({
        optimizationLevel: 3
      }),
      optipng({
        optimizationLevel: 5
      }),
      mozjpeg({
        quality: 75
      })
    ])))
    .pipe(rename({ dirname: '' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.images.dist));
};
