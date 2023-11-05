//filter
//1
// 숫자 배열에서 짝수만 필터링
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

//2
// 문자열 배열에서 길이가 5 이상인 단어들 필터링
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const longWords = words.filter((word) => word.length >= 5);
console.log(longWords); // ["apple", "banana", "cherry", "elderberry"]

//map
//1
// 숫자 배열의 각 원소 제곱하여 새로운 배열 생성
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//2
// 객체 배열에서 이름만 추출하여 새로운 배열 생성
const people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Carol", age: 35 }];
const names = people.map((person) => person.name);
console.log(names); // ["Alice", "Bob", "Carol"]

//find
//1
// 배열에서 첫 번째로 3의 배수인 숫자 찾기
const numbers = [2, 4, 6, 9, 12];
const firstMultipleOf3 = numbers.find((num) => num % 3 === 0);
console.log(firstMultipleOf3); // 6

//2
// 객체 배열에서 특정 조건을 만족하는 첫 번째 객체 찾기
const people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Carol", age: 35 }];
const personOver30 = people.find((person) => person.age > 30);
console.log(personOver30); // { name: "Carol", age: 35 }

//reduce
//1
const numbers = [1, 2, 3, 4, 5];

// 배열의 모든 요소를 합산
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // 15

//2
const orders = [
    { product: 'Laptop', price: 1000 },
    { product: 'Smartphone', price: 500 },
    { product: 'Tablet', price: 300 },
    { product: 'Headphones', price: 100 },
  ];
  
  // 주문 목록의 총 가격 계산
  const totalCost = orders.reduce((total, order) => total + order.price, 0);
  
  console.log(totalCost); // 1900
  