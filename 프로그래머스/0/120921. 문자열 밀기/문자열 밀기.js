function solution(A, B) {
    var newArr = A;
    var answer = 0;
    
    const hook = (str) => {
        var arr = str.split('');
        var result = '';
        
        result += arr[arr.length - 1];
        
        for (let i = 0; i < arr.length - 1; i++) {
            result += arr[i];
        }
        
        return result;
    }
    
    while (answer < A.length) {
        if (newArr === B) {
            return answer;
        }
        
        newArr = hook(newArr);
        answer++;
    }
        
    return -1;
}