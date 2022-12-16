import { RandomizeArray } from '../src/index.ts';

describe('RandomizeArray', () => {
  const arr = [1, 2, 3];
  it('should return a random array', () => {
    const output = RandomizeArray(arr);

    expect(output).toEqual(expect.arrayContaining(arr));
  });

  it('should return an empty array if the param is not an array', () => {
    const output = RandomizeArray(true);

    expect(output).toEqual([]);
  });
});
