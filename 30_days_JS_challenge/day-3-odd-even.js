//- Day 3: Conditionals - Write a function that returns 'Even' or 'Odd' for a number.


function oddEven(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

const oddEvenFun = oddEven(3);
console.log(oddEvenFun);


// concat two array in one

arr1 = [1,2,3];
arr2 = [4,5,6];
len = arr1.length;

for (let i =0; i < arr2.length;i ++) {
  arr1.push(arr2[i]);
}

console.log(arr1, arr2, len);

