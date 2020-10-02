import { findPlans } from 'services/plans';
import plansRepository from 'repositories/plans';

describe('Test services/plans', () => {
    afterEach(() => {
        plansRepository.fetchPlans.mockRestore();
    });

    test('Should return valid object from repository', async () => {
        plansRepository.fetchPlans = jest.fn().mockReturnValue([
            { precio: 1500000, Nombre: 'Great 1', CodigoPlan: 'GTR-34' },
            { precio: 1000000, Nombre: 'Great 2', CodigoPlan: 'GTR-35' },
            { precio: 900000, Nombre: 'Great 3', CodigoPlan: 'GTR-36' }
        ]);
        const response = await findPlans({ query: { renta: '1000000' }, headers: {} });
        expect(response).toEqual([
            { precio: 1000000, Nombre: 'Great 2', CodigoPlan: 'GTR-35' },
            { precio: 900000, Nombre: 'Great 3', CodigoPlan: 'GTR-36' }
        ]);
    });
});
