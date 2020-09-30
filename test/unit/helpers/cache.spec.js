/* global expect */
import Cache from 'helpers/cache';

describe('Test helper/cache', () => {
    let cache;
    let map;

    beforeEach(() => {
        cache = new Cache();
        map = {
            clear: jest.spyOn(cache.map, 'clear')
        };
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('instance of Cache', (done) => {
        expect(cache).toBeInstanceOf(Cache);
        done();
    });

    test('should map be setted', (done) => {
        expect(cache.map).toBeInstanceOf(Map);
        done();
    });

    test('should be a singleton', (done) => {
        cache.set('a', 1);
        const cache2 = new Cache();

        expect(cache.get('a')).toBe(cache2.get('a'));
        done();
    });

    test('should set and get values from cache', (done) => {
        [1, 2, 3, 4, 5].forEach((num) => {
            const double = num * 2;
            cache.set(num, double);
            expect(cache.get(num)).toBe(double);
        });

        done();
    });

    test('should not set a key previous setted', (done) => {
        cache.set('a', 1);
        expect(cache.set('a', 2)).toBe(undefined);
        done();
    });

    test('should flush a key from cache', (done) => {
        cache.set('a', 1);
        cache.flush('a');
        expect(cache.get('a')).toBe(undefined);
        done();
    });

    test('should not flush a key not found in cache', (done) => {
        cache.set('a', 1);
        expect(cache.flush('b')).toBe(undefined);
        done();
    });

    test('should flush all elements from cache', (done) => {
        cache.flushAll();
        expect(map.clear).toHaveBeenCalledTimes(1);
        done();
    });
});
