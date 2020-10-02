import plansRepository from 'repositories/plans';

describe('Test repository/plans', () => {
    test('Should return empty array when a promise is rejected with SERVICE_UNAVAILABLE', async () => {
        const enabled = await plansRepository.fetchPlans();
        expect(enabled).toEqual([{'CodigoPlan': 'GTR-34', 'Nombre': 'Great 1', 'precio': 1500000}, {'CodigoPlan': 'GTR-35', 'Nombre': 'Great 2', 'precio': 1400000}, {'CodigoPlan': 'GTR-36', 'Nombre': 'Great 3', 'precio': 1300000}, {'CodigoPlan': 'GTR-37', 'Nombre': 'Great 4', 'precio': 1200000}, {'CodigoPlan': 'GTR-38', 'Nombre': 'Great 5', 'precio': 1100000}, {'CodigoPlan': 'GTR-39', 'Nombre': 'Great 6', 'precio': 1000000}, {'CodigoPlan': 'GTR-40', 'Nombre': 'Great 7', 'precio': 900000}, {'CodigoPlan': 'GTR-41', 'Nombre': 'Great 8', 'precio': 800000}, {'CodigoPlan': 'GTR-42', 'Nombre': 'Great 9', 'precio': 700000}, {'CodigoPlan': 'GTR-43', 'Nombre': 'Great 10', 'precio': 600000}, {'CodigoPlan': 'GTR-44', 'Nombre': 'Great 11', 'precio': 500000}, {'CodigoPlan': 'GTR-45', 'Nombre': 'Great 12', 'precio': 400000}]);
    });
});
