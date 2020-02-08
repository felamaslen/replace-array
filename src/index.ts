type Replacer<T> = T | ((value: T) => T);

function isFunction<T>(replacer: Replacer<T>): replacer is (value: T) => T {
  return typeof replacer === 'function';
}

export function replaceAtIndex<T>(array: T[], index: number, replacer: Replacer<T>): T[] {
  if (index === -1) {
    return array;
  }

  const newItem = isFunction(replacer) ? replacer(array[index]) : replacer;

  return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
}
