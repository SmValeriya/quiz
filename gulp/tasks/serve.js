import gulp from 'gulp';
import { paths, browserSyncOptions } from '../gulp.config.js';
import browserSync from 'browser-sync';
const bs = browserSync.create();

export const serve = (done) => {
  bs.init(browserSyncOptions);
  gulp.watch(paths.views.watch, gulp.series('views', reload));

  return done();
};

function reload(done) {
  bs.reload();
  done();
}