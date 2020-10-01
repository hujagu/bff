import { fetchPlans } from 'repositories/plans';

const findPlans = async (trackingHeaders) => {
    const plans = await fetchPlans(trackingHeaders);
    return plans;
};

export default { findPlans };
