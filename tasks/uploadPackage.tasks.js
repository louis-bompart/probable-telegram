const gulp = require('gulp');
const baz = async function () {
  return {
    result: { ok: 'OK', isSuccessful: true }
  };
}
const packageUtil = {
  uploadPackage: baz
}
const fs = require('fs');
const log = require('fancy-log');
const PluginError = require('plugin-error');
const setEnv = done => { done() }

const uploadPackageFunc = async function (isBetaPackage) {
  try {
    let result = await packageUtil.uploadPackage();
    if (result && result.isSuccessful) {
      const content = JSON.stringify(result, null, 4);

      log(content);
      fs.writeFileSync('uploadPackage.json', content);
    }
  } catch (e) {
    throw new PluginError({
      plugin: 'uploadPackageRelease',
      message: e.message
    });
  }
};

/**
 * Upload a released managed package
 */
const uploadPackageRelease = gulp.series(setEnv, async done => {
  await uploadPackageFunc(false);
  done();
});

module.exports = {
  uploadPackageRelease: uploadPackageRelease
};
