const numbers = [1, 2, 3, 4, 5, 6, 7];
const copyNumbers = numbers.filter((num, index, array) => {
  return num >= 3 && num <= 5;
});

console.log(copyNumbers);

const words = ["hello", "world", "hello world", "impossible", "i am", "a person"].filter(
  (word, index) => {
    // return word.length > 5; //5음절 이상
    return index % 2 === 1; // 홀수 배열
  }
);

console.log(words);
