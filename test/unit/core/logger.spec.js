import { stdout, stderr } from 'test-console';
import Logger from 'core/logger';

describe('Test core/logger', () => {
    let log;

    beforeEach(() => {
        log = new Logger();
        jest.spyOn(log, 'fatal');
        jest.spyOn(log, 'error');
        jest.spyOn(log, 'warning');
        jest.spyOn(log, 'info');
        jest.spyOn(log, 'trace');
        jest.spyOn(log, 'debug');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should stdout log with level FATAL', () => {
        const output = stdout.inspectSync(() => {
            log.fatal('description="some fatalistic description"');
        });
        expect(log.fatal).toHaveBeenLastCalledWith('description="some fatalistic description"');
        expect(output[0]).toEqual(expect.stringContaining('level=FATAL'));
    });

    test('should stdout log with level ERROR', () => {
        const output = stderr.inspectSync(() => {
            log.error('description="some error"');
        });

        expect(log.error).toHaveBeenLastCalledWith('description="some error"');
        expect(output[0]).toEqual(expect.stringContaining('level=ERROR'));
    });

    test('should stdout log with level WARNING', () => {
        const output = stdout.inspectSync(() => {
            log.warning('description="some warn description"');
        });
        expect(log.warning).toHaveBeenLastCalledWith('description="some warn description"');
        expect(output[0]).toEqual(expect.stringContaining('level=WARNING'));
    });

    test('should stdout log with level INFO', () => {
        const output = stdout.inspectSync(() => {
            log.info('description="some info"');
        });
        expect(log.info).toHaveBeenLastCalledWith('description="some info"');
        expect(output[0]).toEqual(expect.stringContaining('level=INFO'));
    });

    test('should stdout log with level TRACE', () => {
        const output = stdout.inspectSync(() => {
            log.trace('description="some warn description"', { foo: 'bar', baz: 123 });
        });
        expect(log.trace).toHaveBeenLastCalledWith('description="some warn description"', {
            foo: 'bar',
            baz: 123
        });
        expect(output[0]).toEqual(expect.stringContaining('level=TRACE'));
    });

    test('should stdout log with level DEBUG', () => {
        const output = stderr.inspectSync(() => {
            log.debug('description="some lazy debug description"');
        });
        expect(log.debug).toHaveBeenLastCalledWith('description="some lazy debug description"');
        expect(output[0]).toEqual(expect.stringContaining('level=DEBUG'));
    });

    test('should stdout log with level INFO and headers', () => {
        const loggerWithHeaders = new Logger({
            reqid: '158c745e-7678-4901-a893-da341e96e30a'
        });
        const logInfoWithHeaders = jest.spyOn(loggerWithHeaders, 'info');
        const output = stdout.inspectSync(() => {
            logInfoWithHeaders('description="some descripton with headers"');
        });
        expect(logInfoWithHeaders).toHaveBeenLastCalledWith('description="some descripton with headers"');
        expect(output[0]).toEqual(expect.stringContaining('level=INFO'));
        expect(output[0]).toEqual(expect.stringContaining('reqid=158c745e-7678-4901-a893-da341e96e30a'));
    });
});
