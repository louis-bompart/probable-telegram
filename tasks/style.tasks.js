const gulp = require('gulp');
const styleDeps = [];
for (let index = 0; index < 15; index++) {
    styleDeps.push(() => {
        return gulp.src('somefile');
    })
}


module.exports = {
    styleWatch: gulp.parallel(...styleDeps)
};
