function solution(hp) {
    var answer = 0;
    let life = hp;
    
    if(life >= 5) {
        let generalAnts = Math.floor(life/5);
        answer += generalAnts;
        life = life - generalAnts*5;
    }
    
    if(life >= 3) {
        let soldierAnts = Math.floor(life/3);
        answer += soldierAnts;
        life = life - soldierAnts*3;
    }
    
    if(life >= 1) {
        answer += life;
        life = 0;
    }
    
    return answer;
}