// 11
function bar(x = 8) {
    x += 1;
    return x; 
  }
  
  function foo() {
    x = bar(x); 
    x *= 2; 
  }
  
  let x = 7;
  foo();
  console.log(x); 
  
// 13
  function sumOddNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {  // ვამოწმებთ არის თუ არა რიცხვი იდუმალი
            sum += arr[i];  
        }
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumOddNumbers(numbers));  // გამოოიყვნას კონსოლზე :  9 (1 + 3 + 5)
  