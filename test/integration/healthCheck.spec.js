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

    test('OPTIONS: /health', (done) => {
        request(app)
            .options(`${config.app.prefixURL}/health`)
            .expect('Access-Control-Allow-Origin', '*')
            .expect('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
            .expect('Access-Control-Allow-Headers', 'X-Flow-Id,X-Track-Id', done);
    });
});
