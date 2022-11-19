import gulp from 'gulp';
import svgo from 'gulp-svgo';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import { paths, svgoPlugins } from '../gulp.config.js';

export const svg = () => {
  return gulp.src(paths.svg.src)
    .pipe(plumber())
    .pipe(svgo(svgoPlugins))
    .pipe(rename({ dirname: '' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.svg.dist));
};
