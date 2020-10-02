import request from 'supertest';
import { OK } from 'http-status';
import Config from 'core/config';
import app from 'app';

describe('Routes: Plans', () => {
    const config = new Config();

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('GET: /planes', () => {
        request(app)
        .get(`${config.app.prefixURL}/planes`)
        .expect(OK);
    });
});
