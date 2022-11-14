import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { views } from './gulp/tasks/views.js';
import { styles } from './gulp/tasks/styles.js';
import { reWriteDependencyNames } from './gulp/tasks/revrewrite.js';
import { serve } from './gulp/tasks/serve.js';

export {
  clean,
  views,
  styles,
  reWriteDependencyNames,
  serve
};

export default gulp.series(
  clean,
  gulp.parallel(views, styles),
  serve
);

export const build = gulp.series(
  clean,
  gulp.parallel(views, styles),
  reWriteDependencyNames
)
