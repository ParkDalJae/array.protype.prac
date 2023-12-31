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
  
//3 
// 비동기 작업 시뮬레이션을 위한 함수
function simulateAsyncOperation(taskNumber) {
    return new Promise((resolve, reject) => {
      const randomDelay = Math.floor(Math.random() * 3000) + 1000; // 1초에서 4초 사이의 랜덤 지연 시간 생성
      setTimeout(() => {
        console.log(`Task ${taskNumber} 완료`);
        resolve(taskNumber); // 작업 완료 시 현재 작업 번호를 반환
      }, randomDelay);
    });
  }
  
  // 비동기 작업을 순차적으로 수행하고 결과 누적
  const tasks = [1, 2, 3, 4, 5];
  
  const executeTasks = tasks.reduce(async (accumulator, task) => {
    // 이전 작업의 결과를 가져와서 누적 결과를 계산
    const previousResult = await accumulator;
    
    // 현재 작업을 수행하고 결과를 가져옴
    const currentResult = await simulateAsyncOperation(task);
    
    // 현재 작업의 결과와 이전 작업의 결과를 더하고 반환
    return previousResult + currentResult;
  }, Promise.resolve(0)); // 초기값으로 Promise.resolve(0) 설정
  
  executeTasks.then((finalResult) => {
    console.log(`모든 작업 완료. 최종 결과: ${finalResult}`);
  });
  