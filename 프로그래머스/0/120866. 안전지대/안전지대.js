function solution(board) {
    var answer = 0;
    let n = board.length;
    
    const mark = (x, y) => {
        if(x < 0 || x >= n || y < 0 || y >= n) return;
        if(board[x][y] === 1) return;
        board[x][y] = 2;
    }
    
    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < n; ++j) {
            if(board[i][j] === 1) {
            mark(i, j + 1);
            mark(i, j - 1);
            mark(i + 1, j + 1);
            mark(i + 1, j);
            mark(i + 1, j - 1);
            mark(i - 1, j + 1);
            mark(i -1, j);
            mark(i - 1, j - 1);   
            }
        }
    }
    
     for(let i = 0; i < n; ++i) {
        for(let j = 0; j < n; ++j) {
            if(board[i][j] === 0) {
                answer = answer + 1;
            }
        }
    }
    
    return answer;
}