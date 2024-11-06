// Arquivo da função
function getFlag(flag) {
    const value = process.argv.indexOf(flag) + 1
    return process.argv[value]
}

module.exports = getFlag;
