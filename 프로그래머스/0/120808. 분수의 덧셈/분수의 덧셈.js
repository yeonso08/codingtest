function solution(numer1, denom1 , numer2, denom2) {
    var answer = [];
    let numer = (numer1 * denom2) + (numer2 * denom1)
    let denom = denom1 * denom2
    let numerArr = [];
    let denomArr = [];
    let common = 0;
    let max = 0;
    
    function findCommonNumbers(arr1, arr2) {
        return arr1.filter(num => arr2.includes(num))
    }

    for(let i = 1; i <= Math.sqrt(numer); ++i) {
        if(numer % i === 0) {
            numerArr.push(i);
            if(i !== numer / i) {
                numerArr.push(numer / i);
            }
        }
    }
    for(let i = 1; i <= Math.sqrt(denom); ++i) {
        if(denom % i === 0) {
            denomArr.push(i);
            if(i !== numer / i) {
                denomArr.push(denom / i);
            }
        }
    }
    
    common = findCommonNumbers(numerArr, denomArr)
    
    max = Math.max(...common)
    
    answer = [numer/max, denom/max]
    
    return answer;
}