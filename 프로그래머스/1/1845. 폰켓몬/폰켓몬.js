function solution(nums) {
      const uniqueTypes = new Set(nums);
    const halfNumberOfPokemon = nums.length / 2;
    const answer = Math.min(uniqueTypes.size, halfNumberOfPokemon);
    return answer;
}