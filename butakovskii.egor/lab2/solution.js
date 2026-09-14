// Экспортируйте отсюда функцию с именем из контракта вашего варианта.
function zipArrays(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  if (arrays.every((arr) => arr.length === 0)) {
    return [];
  }

  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }

  return result;
}

export {zipArrays};
