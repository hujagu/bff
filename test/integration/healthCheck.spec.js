import request from 'supertest';
import { OK } from 'http-status';
import Config from 'core/config';
import app from 'app';

describe('Routes: Health', () => {
    const config = new Config();
    test('GET: /health', (done) => {
        request(app)
            .get(`${config.app.prefixURL}/health`)
            .expect(OK, done);
    });
});
