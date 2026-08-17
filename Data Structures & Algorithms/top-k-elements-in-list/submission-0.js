class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();
    // freq 是元素为数组的数组
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    // map 是数组元素的频率映射
    // 对目前的示例数组, map: {1:3, 2:2, 3:1}
    for (const el of nums) {
      map[el] = (map[el] || 0) + 1;
    }
    // 这里的 el 是 map 中的 key. 这里频次是下标, 元素是
    for (const el in map) {
      freq[map[el]].push(parseInt(el));
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        res.push(n);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}