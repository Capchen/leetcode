/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * s = "ADOBECODEBANC", t = "ABC"
 * s = "ABABC"
 * 动态滑动窗口，先找到一个满足条件的窗口，然后缩小窗口，直到不满足条件，再扩大窗口，直到找到最小的窗口
 */
var minWindow = function(s, t) {
  // 超出时间限制
  if (s.length < t.length) {
    return '';
  }
  let result = '';
  let l = 0, r = 0;
  let tempStr = s.slice(l, r);

  loopLR();
  return result;
  function loopLR() {
    while (r < s.length && !isMatch(tempStr, t)) {
      r++;
      tempStr = s.slice(l, r);
    }
    if (isMatch(tempStr, t)) {
      result = result? tempStr.length < result.length ? tempStr : result : tempStr;
    }
    
    while (l <= r && isMatch(tempStr, t)) {
      l++;
      tempStr = s.slice(l, r);
    }
    const value = s.slice(l - 1, r);
    if (isMatch(value, t)) {
      result = result? value.length < result.length ? value : result : value;
    }
    
    if (r === s.length) {
      return result || '';
    } else {
      // 这里表示不满足条件了，需要再次扩大窗口
      loopLR();
    }
  }
  
  function isMatch(str, t) {
    if (str.length < t.length) {
      return false;
    }
    // 判断str是否包含t
    let tArr = t.split('');
    let newStr = str
    for (let i = 0; i < tArr.length; i++) {
      if (!newStr.includes(tArr[i])) {
        return false;
      }
      newStr = newStr.replace(tArr[i], '');
    }
    return true;
  }
};

// 优化后的
var minWindow = function(s, t) {
  if (s.length < t.length) {
      return '';
  }

  const tFreq = {};
  for (let char of t) {
      tFreq[char] = (tFreq[char] || 0) + 1;
  }

  let l = 0, r = 0;
  let required = Object.keys(tFreq).length;
  let formed = 0;
  const windowCounts = {};
  let minLen = Infinity;
  let result = '';

  while (r < s.length) {
      let char = s[r];
      windowCounts[char] = (windowCounts[char] || 0) + 1;

      if (tFreq[char] && windowCounts[char] === tFreq[char]) {
          formed++;
      }

      while (l <= r && formed === required) {
          char = s[l];
          if (r - l + 1 < minLen) {
              minLen = r - l + 1;
              result = s.substring(l, r + 1);
          }

          windowCounts[char]--;
          if (tFreq[char] && windowCounts[char] < tFreq[char]) {
              formed--;
          }
          l++;
      }
      r++;
  }

  return result;
};
// @lc code=end

