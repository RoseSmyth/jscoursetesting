let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotalAmt() {
    amt1 = parseFloat(document.getElementById('amt1').value);
    amt2 = parseFloat(document.getElementById('amt2').value);
    amt3 = parseFloat(document.getElementById('amt3').value);

    let totalAmt = amt1 + amt2 + amt3;

    document.getElementById('results').innerText = `The total amount it: ${totalAmt}`;
}

