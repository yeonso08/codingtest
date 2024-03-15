const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

// 피보나치 수 구하기
function fibonacci (num) {
  // 0번째 피보나치 수는 0
  if(num === 0){
    return 0;
  }
  
  // 1번째 피보나치 수는 1
  if(num === 1){
    return 1;
  }
  
  // n번째(n은 2 이상) 피보나치 수는 이전 두 피보나치 수의 합
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const result = fibonacci(input);
console.log(result);