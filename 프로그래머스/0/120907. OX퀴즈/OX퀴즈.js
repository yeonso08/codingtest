function solution(quiz) {
    var answer = [];
    function isSign(arr) {
        if(arr[1] === '+') {
            return +arr[0] + +arr[2] == +arr[4] 
        }
        if(arr[1] === '-') {
            return +arr[0] - +arr[2] == +arr[4] 
        }
    }
    quiz.map(item => {
      let arr = item.split(" ")
      if(isSign(arr)) {
         answer.push('O')
      } else {
         answer.push('X')
      }
    })
    return answer;
}