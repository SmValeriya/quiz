import gulp from 'gulp';
import { paths, browserSyncOptions } from '../gulp.config.js';
import browserSync from 'browser-sync';
const bs = browserSync.create();

export const serve = (done) => {
  bs.init(browserSyncOptions);
  gulp.watch(paths.views.watch, gulp.series('views', reload));
  gulp.watch(paths.styles.watch, gulp.series('styles', reload));
  gulp.watch(paths.scripts.watch, gulp.series('scripts', reload));
  gulp.watch(paths.fonts.watch, gulp.series('fonts', reload));

  return done();
};

function reload(done) {
  bs.reload();
  done();
}