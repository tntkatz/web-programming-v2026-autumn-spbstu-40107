// Экспортируйте отсюда функцию с именем из контракта вашего варианта.
function maxSlidingWindow(arr, k) {
  if (!arr || arr.length === 0 || k <= 0) {
    return [];
  }

  const n = arr.length;
  if (k > n) {
    return [Math.max(...arr)];
  }
  if (k === 1) {
    return [...arr];
  }

  const result = [];
  const deque = [];

  for (let i = 0; i < n; i++) {
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
}

export {maxSlidingWindow};
