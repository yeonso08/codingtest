function solution(nums) {
    let answer = 0;
    
    let evenNumbers = [];
    let oddNumbers = [];
    
    // 홀수와 짝수 분류
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] % 2 === 0) {
            evenNumbers.push(nums[i]);
        } else {
            oddNumbers.push(nums[i]);
        }
    }
    
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 짝수 2개 + 홀수 1개의 경우 (짝+짝+홀 = 홀수)
    if(evenNumbers.length >= 2 && oddNumbers.length >= 1) {
        for(let i = 0; i < evenNumbers.length - 1; ++i) {
            for(let j = i + 1; j < evenNumbers.length; ++j) {
                for(let k = 0; k < oddNumbers.length; ++k) {
                    const sum = evenNumbers[i] + evenNumbers[j] + oddNumbers[k];
                    if(isPrime(sum)) answer++;
                }
            }
        }
    }
    
    // 짝수 1개 + 홀수 2개의 경우는 항상 짝수 합이 나오므로 
    // 2를 제외하면 소수가 될 수 없어 계산할 필요가 없음
    
    // 홀수 3개의 경우 (홀+홀+홀 = 홀수)
    if(oddNumbers.length >= 3) {
        for(let i = 0; i < oddNumbers.length - 2; ++i) {
            for(let j = i + 1; j < oddNumbers.length - 1; ++j) {
                for(let k = j + 1; k < oddNumbers.length; ++k) {
                    const sum = oddNumbers[i] + oddNumbers[j] + oddNumbers[k];
                    if(isPrime(sum)) answer++;
                }
            }
        }
    }
    
    return answer;
}