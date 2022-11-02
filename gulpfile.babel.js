import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { views } from './gulp/tasks/views.js';
import { serve } from './gulp/tasks/serve.js';

export {
  clean,
  views,
  serve
};

export default gulp.series(
  clean,
  gulp.parallel(views),
  serve
);

export const build = gulp.series(
  clean,
  gulp.parallel(views)
)
