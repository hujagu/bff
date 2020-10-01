import Config from 'core/config';

describe('Test core/config', () => {
    let config;

    beforeEach(() => {
        delete process.env.NODE_PORT;
        config = new Config();
    });

    test('instance of Config', (done) => {
        expect(config).toBeInstanceOf(Config);
        done();
    });

    test('should be a singleton', (done) => {
        process.env.NODE_PORT = '8080';
        const config2 = config;

        expect(config2.app.port).toEqual('8080');
        done();
    });
});
