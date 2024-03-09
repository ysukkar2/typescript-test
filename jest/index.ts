// index.ts

 export function add(a: number, b: number): number {
    return a + b;
}

function displayResult(result: number): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.innerText = `Result: ${result}`;
    }
}

const result = add(2, 3);
displayResult(result);
