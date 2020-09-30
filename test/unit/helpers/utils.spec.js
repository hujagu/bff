/* global expect */
import Utils from 'helpers/utils';

describe('Test helper/utils', () => {
    test('should get a slug from some text', (done) => {
        expect(Utils.slugify('Slug from this text')).toBe('slug-from-this-text');
        done();
    });
});
