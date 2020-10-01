import Logger from 'core/logger';

const fetchPlans = async (trackingHeaders) => {
    const logger = new Logger(trackingHeaders);
    logger.info('action=fetchPlans');
    return [];
};

export default { fetchPlans };
