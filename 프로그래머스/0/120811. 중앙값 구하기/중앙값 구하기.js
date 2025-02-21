function solution(array) {
    var answer = 0;
    
   let ascending = array.sort(function(a, b) {
          return a - b;
    })
    
    let middleNumber = Math.floor(ascending.length/2)
    
    answer = ascending[middleNumber]
    
    return answer;
}