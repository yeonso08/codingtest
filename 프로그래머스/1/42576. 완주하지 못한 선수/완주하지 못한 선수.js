function solution(participant, completion) {
    var answer = '';
    
    let name = participant.sort();
    let complet_name = completion.sort();
    
    for(let i = 0; i < name.length; ++i) {
        if(name[i] !== complet_name[i]) {
            answer = name[i];
            return answer;
        }
    }
    
    return answer;
}