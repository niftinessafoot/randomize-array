type ArrayProp = any[];
type ArrayOutput = any[];

/**
 *
 * @param arr Array to randomize.
 * @returns Ranomied array.
 */
function RandomizeArray(arr: ArrayProp): ArrayOutput {
  let newArr = [] as ArrayOutput;

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
