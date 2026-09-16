const leftInput = document.getElementById('left');
const operatorSelect = document.getElementById('operator');
const rightInput = document.getElementById('right');
const submitBtn = document.getElementById('submitBtn');


setInterval(function() {
    alert('Please, use me...');
}, 30000);

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const leftVal = leftInput.value.trim();
    const rightVal = rightInput.value.trim();

    const isValidInteger = (val) => /^\d+$/.test(val);

    if (!isValidInteger(leftVal) || !isValidInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);
    const op = operatorSelect.value;


    if ((op === '/' || op === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    alert(result);
    console.log(result);
});