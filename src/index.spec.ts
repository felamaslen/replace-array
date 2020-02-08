import { replaceAtIndex, removeAtIndex } from '.';

test('replaceAtIndex replaces an array item at a specified index', () => {
  const array: (number | string)[] = [1, 2, 3, 4, 5];

  const index = 2;

  const result = replaceAtIndex<number | string>(array, index, 'foo');

  expect(result).toEqual([1, 2, 'foo', 4, 5]);
});

test("replaceAtIndex doesn't do anything if the index is -1", () => {
  const array: string[] = ['A', 'B', 'C', 'D'];

  const index = -1;

  const result = replaceAtIndex<string>(array, index, 'bar');

  expect(result).toBe(array);
});

test('replaceAtIndex allows passing in a function of the previous value', () => {
  const array: number[] = [5, 7, 4, 1, 9];

  expect(replaceAtIndex<number>(array, 1, value => value * 10)).toEqual([5, 70, 4, 1, 9]);

  expect(
    replaceAtIndex<number>(array, 3, value => Math.log(value)),
  ).toEqual([5, 7, 4, 0, 9]);

  expect(replaceAtIndex<number>(array, -1, value => value / 3)).toEqual([5, 7, 4, 1, 9]);
});

test("replaceAtIndex shouldn't throw an error if the index is out of range", () => {
  const array: number[] = [1, 2, 3];

  expect(replaceAtIndex(array, -2, 0)).toBe(array);
  expect(replaceAtIndex(array, 3, 0)).toBe(array);
  expect(replaceAtIndex(array, 4, 0)).toBe(array);
  expect(replaceAtIndex(array, 56312, 0)).toBe(array);
  expect(replaceAtIndex(array, Infinity, 0)).toBe(array);
});

test('replaceAtIndex allows padding the array if necessary', () => {
  const array: number[] = [1, 2, 3];

  expect(replaceAtIndex(array, 5, 1, 0)).toEqual([1, 2, 3, 0, 0, 1]);
  expect(replaceAtIndex(array, 5, value => value ** 3, 10)).toEqual([1, 2, 3, 10, 10, 1000]);
});

test('removeAtIndex removes an item at a specified index', () => {
  const array: number[] = [1, 2, 3];

  expect(removeAtIndex(array, 1)).toEqual([1, 3]);
  expect(removeAtIndex(array, 0)).toEqual([2, 3]);
  expect(removeAtIndex(array, 2)).toEqual([1, 2]);
});

test("removeAtIndex doesnt't alter the array if the index is out of bounds", () => {
  const array: number[] = [1, 2, 3];

  expect(removeAtIndex(array, -1)).toBe(array);
  expect(removeAtIndex(array, -103)).toBe(array);
  expect(removeAtIndex(array, 3)).toBe(array);
  expect(removeAtIndex(array, 1023)).toBe(array);
  expect(removeAtIndex(array, Infinity)).toBe(array);
});
