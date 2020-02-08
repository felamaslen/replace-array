export function replaceAtIndex<T>(array: T[], index: number, item: T): T[] {
  if (index === -1) {
    return array;
  }

  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}
