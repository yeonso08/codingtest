function solution(nums) {
    var answer = 0;
    
    const count = Math.floor(nums.length / 2)
    
    const array = new Set(nums).size
    
    return Math.min(count, array);
}