export const srcDir = 'src';
export const buildDir = 'build';
const env = process.env.NODE_ENV;

const productionMode = 'production';

export const isProdMode = env === productionMode;

export const revManifest = {
  path: `${buildDir}/rev-manifest.json`,
  options: {
    base: `./${buildDir}`,
    merge: true
  }
};

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
  },
  styles: {
    src: `./${srcDir}/styles/*.pcss`,
    dist: `./${buildDir}/styles/`,
    watch: `./${srcDir}/styles/**/*.pcss`
  },
  fonts: {
    src: `./${srcDir}/fonts/**/*.{woff,woff2}`,
    dist: `./${buildDir}/fonts/`,
    watch: `./${srcDir}/fonts/**/*.{woff,woff2}`
  },
};
