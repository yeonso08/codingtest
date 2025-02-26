function solution(age) {
    var answer = '';
    let arr = []
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
 arr = String(age).split('')
    
    for(let i = 0; arr.length > i; ++i) {
        answer += alphabet[+arr[i]]
        
    }
    
    return answer;
}