const log = require('fancy-log');
const gulp = require('gulp');

const bazFoo = done => {
    log('BazFoo')
}

const baz = gulp.series(bazFoo, done => {
    log('Baz');
})

module.exports = {
    baz: baz
}