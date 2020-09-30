import httpStatus from 'http-status';
import HealthCheck from 'controllers/healthCheck';

describe('Test controller/healthCheck', () => {
    test('should be log a info message and send a response', () => {
        const response = {
            status: jest.fn(),
            send: jest.fn()
        };
        const nextFn = jest.fn();

        HealthCheck(null, response, nextFn);

        expect(response.status).toHaveBeenCalledWith(httpStatus.OK);
        expect(nextFn).toHaveBeenCalled();
    });
});
