function solution(n, m, section) {
    let count = 0;         
    let painted = 0;     
    
    for (let position of section) {
        if (position <= painted) continue;
        
        painted = position + m - 1;
        count++;
    }
    
    return count;
}