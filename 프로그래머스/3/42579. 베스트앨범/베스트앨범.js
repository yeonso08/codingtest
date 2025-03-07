function solution(genres, plays) {
    const genreMap = {};
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!genreMap[genre]) {
            genreMap[genre] = {
                totalPlays: 0,
                songs: []
            };
        }
        
        genreMap[genre].totalPlays += play;
        
        genreMap[genre].songs.push({
            id: i,
            play: play
        });
    }
    
    const sortedGenres = Object.keys(genreMap).sort((a, b) => {
        return genreMap[b].totalPlays - genreMap[a].totalPlays;
    });
    
    const answer = [];
    
    for (const genre of sortedGenres) {
        const songs = genreMap[genre].songs.sort((a, b) => {
            if (a.play === b.play) {
                return a.id - b.id;
            }
            return b.play - a.play;
        });
        
        const limit = Math.min(songs.length, 2);
        for (let i = 0; i < limit; i++) {
            answer.push(songs[i].id);
        }
    }
    
    return answer;
}