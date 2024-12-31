const solutionSet = new Set<number>();

function collatzValid(n: number, i: number): boolean {
  if (solutionSet.has(n)) {
    return true;
  }

  if (n < i) {
    return true;
  }

  solutionSet.add(n);

  if (n % 2 === 0) {
    return collatzValid(n / 2, i);
  } else {
    return collatzValid(3 * n + 1, i);
  }
}

function isCollatzValidFor(n: number): boolean {
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      solutionSet.delete(i);
      continue;
    }
    if (!collatzValid(i, i)) {
      return false;
    }
    solutionSet.delete(i);
  }
  return true;
}

console.time("isCollatzValidFor");
console.log(isCollatzValidFor(100));
console.timeEnd("isCollatzValidFor");

console.log(solutionSet.size);
