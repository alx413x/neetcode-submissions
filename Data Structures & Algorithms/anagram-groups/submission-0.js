// count 数组（字符串字母计数）为键, 字符串数组为值.
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    // 答案
    const res = {};

    for (let s of strs) {
      const count = new Array(26).fill(0);

      // 字母计数
      for (let c of s) count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      const key = count.join(",");

      // res[key] 不为空的话则置空
      if (!res[key]) {
        res[key] = [];
      }
      // 将当前字符串/单词放入哈希表
      res[key].push(s);
    }
    return Object.values(res);
  }
}
