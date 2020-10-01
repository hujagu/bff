import Plans from 'controllers/plans';
import plansService from 'services/plans';

describe('Test controller/plans', () => {
    const exp = { bla: 'ble' };
    const request = {
        headers: {
            tracking: {}
        }
    };

    const response = {
        status: null,
        send: null
    };

    const nextFn = jest.fn();

    beforeAll(() => {
        response.status = jest.fn();
        response.send = jest.fn();
    });

    beforeEach(() => {
        plansService.findPlans = jest.fn().mockReturnValue(exp);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('getPlans should call findPlans', async () => {
        await Plans.getPlans(request, response, nextFn);
        expect(plansService.findPlans).toHaveBeenCalled();
    });
});
