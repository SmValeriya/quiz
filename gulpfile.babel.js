import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { views } from './gulp/tasks/views.js';
import { styles } from './gulp/tasks/styles.js';
import {scripts} from './gulp/tasks/scripts.js';
import { fonts } from './gulp/tasks/fonts.js';
import { reWriteDependencyNames } from './gulp/tasks/revrewrite.js';
import { serve } from './gulp/tasks/serve.js';

export {
  clean,
  views,
  styles,
  scripts,
  fonts,
  reWriteDependencyNames,
  serve
};

export default gulp.series(
  clean,
  gulp.parallel(views, styles, scripts, fonts),
  serve
);

export const build = gulp.series(
  clean,
  gulp.parallel(views, styles, scripts, fonts),
  reWriteDependencyNames
)
