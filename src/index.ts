/**
 * A library for returning a randomly-indexed array.
 *
 * @remarks
 * Takes in an array and returns a new {@link ArrayOutput | array} with those indexes randomly dispersed. The array contents can be anything, though you’re likely to get the most value out of a number or string.
 *
 * @packageDocumentation
 */

export type ArrayProp = unknown[];
export type ArrayOutput = unknown[];

/**
 * Returns a new array, randomly re-indexed.
 *
 * @param arr - {@link ArrayProp | Array} to randomize
 * @returns New copy of randomly-sorted {@link ArrayOutput | array}
 */
function RandomizeArray(arr: ArrayProp): ArrayOutput {
  const newArr = [] as ArrayOutput;

  if (Object.prototype.toString.call(arr) === '[object Array]') {
    const len = arr.length;

    arr.forEach((ele) => {
      const rand = Math.floor(Math.random() * len);
      newArr.splice(rand, 0, ele);
    });
  }

  return newArr;
}
export { RandomizeArray };
