let instance = null;

/**
 * Cache class
 * @return {Object} - Singleton instance.
 */
class Cache {
    constructor() {
        if (!instance) {
            instance = this;
            this.map = new Map();
        }

        return instance;
    }

    /**
     * Get map object only if has key.
     * @param {String} - Key string to search cache.
     * @return {Object} - Value cached.
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Set map object only if not has the key.
     * @param {String} - Key string to search cache.
     * @param {Object} - Value object to save in cache.
     */
    set(key, value) {
        return !this.map.has(key) ? this.map.set(key, value) : undefined;
    }

    /**
     * Delete only one key from map object.
     * @param {String} - Key string to search cache.
     */
    flush(key) {
        return this.map.has(key) ? this.map.delete(key) : undefined;
    }

    /**
     * Clear map object.
     */
    flushAll() {
        this.map.clear();
    }
}

export default Cache;
