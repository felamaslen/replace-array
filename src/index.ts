type Replacer<T> = T | ((value: T) => T);

function isFunction<T>(replacer: Replacer<T>): replacer is (value: T) => T {
  return typeof replacer === 'function';
}

const isOutOfBounds = <T>(array: T[], index: number): boolean =>
  index < 0 || index > array.length - 1;

export function replaceAtIndex<T>(array: T[], index: number, replacer: Replacer<T>, pad?: T): T[] {
  const arrayWithPad =
    typeof pad === 'undefined' || index < array.length
      ? array
      : [...array, ...new Array(index - array.length + 1).fill(pad)];

  if (isOutOfBounds(arrayWithPad, index)) {
    return arrayWithPad;
  }

  const newItem = isFunction(replacer) ? replacer(arrayWithPad[index]) : replacer;

  return [...arrayWithPad.slice(0, index), newItem, ...arrayWithPad.slice(index + 1)];
}

export function removeAtIndex<T>(array: T[], index: number): T[] {
  if (isOutOfBounds(array, index)) {
    return array;
  }

  return [...array.slice(0, index), ...array.slice(index + 1)];
}
