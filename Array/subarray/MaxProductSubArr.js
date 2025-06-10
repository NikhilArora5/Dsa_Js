const maxProductSubArr = (arr) => {
  let maxProduct = -Infinity;
  let product = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];

    if (product > maxProduct) {
      maxProduct = product;
    }
    if (product < 0) {
      product = 1;
    }
  }

  return maxProduct
};
