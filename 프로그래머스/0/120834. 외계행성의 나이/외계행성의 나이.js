function solution(age) {
    var answer = '';
    let arr = []
    alphabet = ['a','b','c','d','e','f','g','h','i','j']
    
 arr = String(age).split('')
    
    for(let i = 0; arr.length > i; ++i) {
        answer += alphabet[+arr[i]]
        
    }
    
    return answer;
}