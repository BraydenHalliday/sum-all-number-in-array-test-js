function sumItems(array) {
  let total = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
     total += sumItems(item);
    } else {
     return total += item;
    }
  });
  return total
}

module.exports = sumItems;