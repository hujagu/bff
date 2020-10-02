import { fetchPlans } from 'repositories/plans';

const findPlans = async (req) => {
    const plans = await fetchPlans(req.headers.tracking);
    const max = parseInt(req.query.renta, 10) + (parseInt(req.query.renta, 10) * 0.15);
    const min = parseInt(req.query.renta, 10) - (parseInt(req.query.renta, 10) * 0.15);
    const filteredPlans = plans.filter(plan => plan.precio < max && plan.precio > min);

    return filteredPlans;
};

export default { findPlans };
