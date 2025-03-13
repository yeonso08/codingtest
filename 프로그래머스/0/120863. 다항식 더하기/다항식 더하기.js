function solution(polynomial) {
    let xCoefficient = 0;
    let constant = 0;
    
    const terms = polynomial.split(" + ");
    
    terms.forEach(term => {
        if (term.includes('x')) {
            if (term === 'x') {
                xCoefficient += 1;
            } else {
                xCoefficient += parseInt(term.slice(0, term.length - 1));
            }
        } else {
            constant += parseInt(term);
        }
    });
    
    let result = [];
    
    if (xCoefficient > 0) {
        if (xCoefficient === 1) {
            result.push('x');
        } else {
            result.push(`${xCoefficient}x`);
        }
    }
    
    if (constant > 0) {
        result.push(`${constant}`);
    }
    
    return result.join(' + ');
}