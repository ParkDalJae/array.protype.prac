//1 
// Promise 배열 생성 (비동기 작업 시뮬레이션)
const promiseArray = [
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1500))
  ];
  
  // Promise 배열을 사용하여 결과 누적
  const sumPromises = promiseArray.reduce(async (accumulator, currentPromise) => {
    const accumulatorValue = await accumulator;
    const result = await currentPromise;
    return accumulatorValue + result;
  }, Promise.resolve(0));
  
  sumPromises.then((result) => {
    console.log("누적 결과:", result); // 6 (1 + 2 + 3)
  });
  

//2 
// 비동기 함수를 포함하는 배열
const asyncFunctions = [
    () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()),
    () => fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json()),
    () => fetch('https://jsonplaceholder.typicode.com/todos/3').then(response => response.json())
  ];
  
  // 배열의 비동기 함수를 사용하여 결과 누적
  async function fetchData() {
    const results = await asyncFunctions.reduce(async (accumulator, asyncFunction) => {
      const accumulatorData = await accumulator;
      const result = await asyncFunction();
      accumulatorData.push(result);
      return accumulatorData;
    }, Promise.resolve([]));
  
    return results;
  }
  
  fetchData()
    .then((data) => {
      console.log(data); // 각 요청의 결과가 담긴 배열
    })
    .catch((error) => {
      console.error(error);
    });
  