// 입출력과_사칙연산/b1000/app.js

const fs = require('fs')
 let input = fs.readFileSync('/dev/stdin').toString().split(' ')
const num1 = +input[0]
const num2 = +input[1]

function solution(a, b) {
  let array = []
 for(let i = 1; i <= a; ++i ) {
  if(a % i == 0 )
  {
    array.push(i)
  }
 }
 if(array.length >= b) {
console.log(array[b - 1])
 } else {
  console.log(0)
 }
}

solution(num1, num2)