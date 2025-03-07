function solution(s1, s2) {
    var answer = 0;
    s1.map(item => {
       if(s2.includes(item)) {
          ++answer
       }
   })
    return answer;
}