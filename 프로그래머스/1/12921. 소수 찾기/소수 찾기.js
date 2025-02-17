function solution(n) {
    if(n <= 1) return 0;
    if(n === 2) return 1;
    
    let count = 1;
    
    for(let i = 3; i <= n; i += 2) {
        let isPrime = true;
        
        for(let j = 3; j <= Math.sqrt(i); j += 2) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if(isPrime) count++;
    }
    
    return count;
}