const detectCycleInListHashmap = (list) => {
  let existingNodes = new Set();

  let curr = list.head;

  while (curr.next) {
    if (existingNodes.has(curr)) {
      return true;
    }
    existingNodes.add(curr);
   curr= curr.next
  }

  return false;
};
