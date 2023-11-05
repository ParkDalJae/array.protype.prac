
//1
// Promise 생성
const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업 시뮬레이션 (예: 2초 후 완료)
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber >= 0.5) {
        resolve(randomNumber); // 성공 상태
      } else {
        reject("Failed"); // 실패 상태
      }
    }, 2000);
  });
  
// Promise 사용
  myPromise
    .then((result) => {
      console.log("성공:", result);
    })
    .catch((error) => {
      console.error("실패:", error);
    });
  
//2
// 비동기 함수 정의 (예: API 요청)
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject('API 요청 실패');
          }
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  
  // fetchDataFromAPI 함수 호출
  fetchDataFromAPI()
    .then((data) => {
      console.log('API 응답:', data);
    })
    .catch((error) => {
      console.error('API 오류:', error);
    });
  