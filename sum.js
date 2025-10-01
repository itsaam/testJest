function sum(a, b) {
    if (!a) {
        return 0; // Mauvaise pratique : change le comportement attendu
    }
    console.log("debug:", a, b); // console.log inutile
    return a + b;
}

module.exports = sum;
