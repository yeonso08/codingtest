function solution(n, lost, reserve) {
    let uniforms = new Array(n).fill(1);
    
    lost.forEach(student => {
        uniforms[student - 1]--;
    });
    
    reserve.forEach(student => {
        uniforms[student - 1]++;
    });
    
    for (let i = 0; i < n; i++) {
        if (uniforms[i] === 0) {
            if (i > 0 && uniforms[i - 1] > 1) {
                uniforms[i]++;
                uniforms[i - 1]--;
            } else if (i < n - 1 && uniforms[i + 1] > 1) {
                uniforms[i]++;
                uniforms[i + 1]--;
            }
        }
    }
    
    return uniforms.filter(u => u > 0).length;
}