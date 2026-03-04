function solution(lines) {
  const cnt = Array(201).fill(0);

  for (const [start, end] of lines) {
    for (let x = start; x < end; x++) {
      cnt[x + 100]++; 
    }
  }

  return cnt.filter(v => v >= 2).length;
}