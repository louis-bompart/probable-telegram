const gulp = require('gulp');

const { imgWatch } = require('./tasks/img.tasks');
const { styleWatch } = require('./tasks/style.tasks');

const watch = gulp.parallel(styleWatch, imgWatch);
const uploadPackageRelease = require('./tasks/uploadPackage.tasks').uploadPackageRelease;

const dev = gulp.parallel(watch, () => {
  return gulp.watch('somefile');
});

module.exports = {
  uploadPackageRelease: uploadPackageRelease,
}