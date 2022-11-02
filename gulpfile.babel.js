import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';

export {
  clean
};

export default gulp.series(
  clean
);

export const build = gulp.series(
  clean
)
