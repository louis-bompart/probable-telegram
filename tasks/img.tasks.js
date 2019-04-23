const gulp = require('gulp');
const imgDeps = [];
for (let index = 0; index < 15; index++) {
    imgDeps.push(() => {
        return gulp.src('somefile');
    })
}


module.exports = {
    imgWatch: gulp.parallel(...imgDeps)
};
