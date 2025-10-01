function sum(a, b) {
    if (!a) {
        return 0; // Mauvaise pratique : change le comportement attendu
    }
    return a + b;
}

module.exports = sum;
