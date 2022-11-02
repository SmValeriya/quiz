import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { views } from './gulp/tasks/views.js';

export {
  clean,
  views
};

export default gulp.series(
  clean,
  gulp.parallel(views)
);

export const build = gulp.series(
  clean,
  gulp.parallel(views)
)
