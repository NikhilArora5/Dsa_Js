const isPrimeNumber = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (i % n == 0) {
      return true;
    }
  }

  return false;
};
