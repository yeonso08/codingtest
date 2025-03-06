function solution(array, n) {
    array.sort((a, b) => a - b);
    
    let closestNum = array[0];
    let minDiff = Math.abs(array[0] - n);
    
    for (let i = 0; i < array.length; i++) {
        const currentDiff = Math.abs(array[i] - n);
        
        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            closestNum = array[i];
        }
    }
    
    return closestNum;
}