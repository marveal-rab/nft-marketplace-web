/**
 * 将数组分割为固定大小的子数组
 * @param array 要分割的数组
 * @param size 每个子数组的大小
 * @returns 分割后的子数组列表
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * 判断数组中是否包含某个值
 * @param array 要判断的数组
 * @param value 要查找的值
 * @returns 是否包含
 * @example
 * has([1, 2, 3], 2); // true
 * has([1, 2, 3], 4); // false
 * has(["a", "b", "c"], "b"); // true
 * has(["a", "b", "c"], "d"); // false
 * has([true, false], true); // true
 * has([true, false], null); // false
 * has([null, undefined], null); // true
 * has([null, undefined], undefined); // true
 * has([null, undefined], 0); // false
 * has([0, 1, 2], 0); // true
 */
export function has<T>(array: T[], value: T): boolean {
  return array.includes(value);
}

/**
 * 将ArrayBuffer转为Iterable<Uint8Array>, 每个chunk可自定义大小
 * @param buffer 要转换的ArrayBuffer
 * @param chunkSize 每个chunk的大小
 * @returns Iterable<Uint8Array>
 */
export function bufferToIterable(
  buffer: ArrayBuffer,
  chunkSize = 1024
): Iterable<Uint8Array> {
  return {
    *[Symbol.iterator]() {
      const view = new Uint8Array(buffer);
      for (let i = 0; i < view.length; i += chunkSize) {
        yield view.slice(i, i + chunkSize);
      }
    },
  };
}
