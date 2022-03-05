/**
 * @param {string} packageToRequire Name of the package to require
 * @param {*} packageDefaultValue={} Value of the package if it doesn't exist
 */
module.exports = function(packageToRequire, packageDefaultValue = {}) {
    let pkg;

    try {
        pkg = require(packageToRequire);
    } catch (_) {
        pkg = packageDefaultValue;
    }

    return pkg;
};