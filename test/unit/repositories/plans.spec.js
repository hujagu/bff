import plansRepository from 'repositories/plans';

describe('Test repository/plans', () => {
    test('Should return empty array when a promise is rejected with ERROR', async () => {
        const enabled = await plansRepository.fetchPlans();
        expect(enabled).toEqual([]);
    });
});
