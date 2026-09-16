const leftInput = $('#left') ;
const operatorSelect = $('#operator');
const rightInput = $('#right');
const submitBtn = $('#submitBtn');


setInterval(function() {
    alert('Please, use me...');
}, 30000);

submitBtn.click(function(e) {
    e.preventDefault();

    const leftVal = leftInput.val().trim();
    const rightVal = rightInput.val().trim();

    const isValidInteger = (val) => /^\d+$/.test(val);

    if (!isValidInteger(leftVal) || !isValidInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);
    const op = operatorSelect.val();


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