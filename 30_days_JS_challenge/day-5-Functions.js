// Functions - Create a function that reverses a string.



//Method -1
function reverseString(str) {
    console.log('method1');
    
    let reverse = [];
    for(let i = str.length-1; i >= 0 ; i--) {
        reverse.push(str.charAt(i));
    }
    let finalString = reverse.join('');
    console.log(finalString);
}

//Method-2

function reverseString1(str) {
    console.log('method2');
    let reverse = str.split('').reverse().join('');
    console.log(reverse);
}


//Method-3

function reverseString1(str) {
    console.log('method3');
    let reverse = [...str].reverse().join('');
    console.log(reverse);
}


reverseString('Hello');
reverseString1('Namaste');

