// 비동기 함수 정의
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  }
  
  // fetchData 함수 호출
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  
  
// 비동기 함수 정의
async function processUserData(userId) {
    try {
      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await user.json();
      
      const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const userPosts = await posts.json();
  
      return { user: userData, posts: userPosts };
    } catch (error) {
      throw error;
    }
  }
  
  // processUserData 함수 호출
  processUserData(1)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  