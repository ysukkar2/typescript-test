// index.ts
function add(a, b) {
    return a + b;
}
function displayResult(result) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.innerText = "Result: ".concat(result);
    }
}
var result = add(2, 3);
displayResult(result);
