const log = require('fancy-log')
const bazTasks = require('./tasks/baz.tasks')

const foo = done => {
    log('Foo');
}
module.exports = {
    foo: foo
}
module.exports = {
    ...module.exports,
    baz: bazTasks.baz
}