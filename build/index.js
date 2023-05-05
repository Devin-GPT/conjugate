"use strict";
//Change this list to change Input list
var partition = [5, 3, 1];
var getConjugates = function (partition) {
    var conjugate = [];
    var max = 0;
    for (var i = 0; i < partition.length; i++) {
        var rowLength = partition[i];
        max = Math.max(max, rowLength);
        for (var j = 0; j < rowLength; j++) {
            if (conjugate[j] === undefined) {
                conjugate[j] = 0;
            }
            conjugate[j]++;
        }
    }
    // Trim trailing zeros if any
    while (conjugate.length > 0 && conjugate[conjugate.length - 1] === 0) {
        conjugate.pop();
    }
    return conjugate;
};
function main() {
    var result = getConjugates(partition);
    console.log("Original partition:", partition);
    console.log("Conjugate partition:", result);
}
main();
