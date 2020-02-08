import { replaceAtIndex } from '.';

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
