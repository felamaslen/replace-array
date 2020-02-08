type Replacer<T> = T | ((value: T) => T);

function isFunction<T>(replacer: Replacer<T>): replacer is (value: T) => T {
  return typeof replacer === 'function';
}

const isOutOfBounds = <T>(array: T[], index: number): boolean =>
  index < 0 || index > array.length - 1;

export function replaceAtIndex<T>(array: T[], index: number, replacer: Replacer<T>): T[] {
  if (isOutOfBounds(array, index)) {
    return array;
  }

  const newItem = isFunction(replacer) ? replacer(array[index]) : replacer;

  return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
}

export function removeAtIndex<T>(array: T[], index: number): T[] {
  if (isOutOfBounds(array, index)) {
    return array;
  }

  return [...array.slice(0, index), ...array.slice(index + 1)];
}
