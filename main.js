// 1
// ფუნქცია JavaScript-ში არის კოდის ბლოკი,რომელიც შექმნილია კონკრეტული დავალების შესასრულებლად
// ფუნქციები ხელს უწყობენ კოდის სტრუქტურირებას და ხელახლა გამოყენებას პროექტში

 // 2
// ფუნქციის გამოძახება არის ფუნქციის აქტივაცია კოდში,
// სადაც მას გადაეცემა მნიშვნელობები (პარამეტრები),
//  რომლებსაც ის გამოიყენებს დავალებული ამოცანის შესასრულებლად

// 3
// კოდის ბლოკი არის რამდენიმე ბრძანების ჯგუფი, რომელიც აღისრულება ხდება კუდური ფრჩხილების {} შიგნით

// 4
function greet(name) {
  return `Hello, ${name}!`;
}

let userName = 'John';
console.log(greet(userName)); // gamoiyvans: Hello, john! 

// 5
function reverseString(str) {
  let reversed = '';  
  for (let i = str.length - 1; i >= 0; i--) {  
      reversed += str[i];  
  }
  return reversed;
}

let inputString = 'Hello';
console.log(reverseString(inputString));  // გამოიყვანს კონსოლზე  'olleh'

// 6
// ფუნქციაში დეფოლტური არგუმენტი არის პარამეტრი, რომელსაც აქვს წინასწარ განსაზღვრული ღირებულება,თუ ფუნქციას არგუმენტი არ გადაეცემა. 
// თუ მომხმარებელი არ აწვდის ამ პარამეტრს მნიშვნელობას, ფუნქცია გამოიყენებს დეფოლტურ მნიშვნელობას

// 8
// დაბრუნებული მნიშვნელობა, ეს არის შედეგი, რომელსაც ფუნქცია აბრუნებს შესრულების შემდეგ, სიტყვით return

// 9
// თუ ფუნქციაში არ არის return ოპერატორი, მისი დაბრუნებული მნიშვნელობა ავტომატურად იქნება undefined

// 10
function foo(x) {
  return x * 2;
}

let x= 7;
x = foo(x);
console.log(x); // gamoyavs: 14

