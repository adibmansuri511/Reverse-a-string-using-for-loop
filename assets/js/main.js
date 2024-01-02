// program to find the factorial of a number
function factorial() {

    // Take input from the user
    const number = Number(document.getElementById("number").value);

    let answer = "";

    // checking if number is negative
    if (number < 0) {
        answer = 'Error! Factorial for negative number does not exist.';
    }

    // if number is 0
    else if (number === 0) {
        answer = `The factorial of ${number} is 1.`;
    }

    // if number is positive

    else {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        answer = `The factorial of ${number} is ${fact}.`;

    }

    console.log(answer);
    document.querySelector('#h4').innerHTML = answer;
}
