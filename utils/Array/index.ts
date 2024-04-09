/**
 * 将数组分割为固定大小的子数组
 * @param array 要分割的数组
 * @param size 每个子数组的大小
 * @returns 分割后的子数组列表
 */
function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export { chunk };
