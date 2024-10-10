/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 * 用map来存取数据
 * 用keys来存取key的顺序
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.keys = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    const index = this.keys.indexOf(key);
    this.keys.splice(index, 1);
    this.keys.unshift(key);
    return this.cache.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.set(key, value);
        const index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
        this.keys.unshift(key);
    } else {
        if (this.keys.length >= this.capacity) {
            const lastKey = this.keys.pop();
            this.cache.delete(lastKey);
        }
        this.cache.set(key, value);
        this.keys.unshift(key);
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

