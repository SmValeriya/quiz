export const srcDir = 'src';
export const buildDir = 'build';
const env = process.env.NODE_ENV;

const productionMode = 'production';

export const isProdMode = env === productionMode;

export const browserSyncOptions = {
  server: {
    baseDir: `./${buildDir}`
  },
  open: false,
  notify: false,
  cors: true
};

export const paths = {
  views: {
    src: `./${srcDir}/pages/*.pug`,
    dist: buildDir,
    watch: `./${srcDir}/pages/**/*.pug`
  }
};
