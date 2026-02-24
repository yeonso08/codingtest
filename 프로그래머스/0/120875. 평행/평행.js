function solution(dots) {
    
    function isParallel(a, b, c, d) {
        const dx1 = b[0] - a[0];
        const dy1 = b[1] - a[1];

        const dx2 = d[0] - c[0];
        const dy2 = d[1] - c[1];

        return dy1 * dx2 === dy2 * dx1;
    }

    if (
        isParallel(dots[0], dots[1], dots[2], dots[3]) ||
        isParallel(dots[0], dots[2], dots[1], dots[3]) ||
        isParallel(dots[0], dots[3], dots[1], dots[2])
    ) {
        return 1;
    }

    return 0;
}