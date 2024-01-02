// program to reverse the string
function reverseString() {

    // Take input from the user
    const str = (document.getElementById("str").value).toString();

    // empty string
    let reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    let newStr = `Reversed String : ${reverseStr}`;

    console.log(newStr);
    document.querySelector('#h4').innerHTML = newStr;
}
