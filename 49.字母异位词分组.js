/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const lengthMap = new Map();
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    
    if (lengthMap.has(element.length)) {
      lengthMap.set(element.length, lengthMap.get(element.length) + 1);
      const index = result.findIndex(item => {
        const value = item[0];
        if (element.length !== value.length) {
          return false;
        }
        const map = new Map();
        for (let j = 0; j < value.length; j++) {
          if (map.has(value[j])) {
            map.set(value[j], map.get(value[j]) + 1);
          } else {
            map.set(value[j], 1);
          }
        }
        for (let j = 0; j < element.length; j++) {
          if (map.has(element[j])) {
            map.set(element[j], map.get(element[j]) - 1);
          } else {
            return false;
          }
        }
        
        for (let [key, value] of map) {
          if (value !== 0) {
            return false;
          }
        }
  
        return true;
  
      })
      if (index === -1) {
        result.push([element]);
      } else {
        result[index].push(element);
      }

    } else {
      lengthMap.set(element.length, 1);
      result.push([element]);
    }
  }
  return result;
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));
// @lc code=end

