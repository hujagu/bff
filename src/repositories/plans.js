import Logger from 'core/logger';
import fetch from 'node-fetch';

const fetchPlans = async (trackingHeaders) => {
    const logger = new Logger(trackingHeaders);
    try {
        const response = await fetch('https://f3ec8e44-0529-430b-8433-d492dba0797c.mock.pstmn.io/planes');
        const json = await response.json();
        logger.info('action=fetchPlans, status=success');
        return json;
    } catch (error) {
        logger.error('action=fetchPlans, status=error');
        return [];
    }
};

export default { fetchPlans };
