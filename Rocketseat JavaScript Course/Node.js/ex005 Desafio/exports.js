// Arquivo da função
function getFlagValue(flag) {
    const value = process.argv.indexOf(flag) + 1
    return process.argv[value]
}

module.exports = getFlagValue;
