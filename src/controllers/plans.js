import httpStatus from 'http-status';
import Plans from 'services/plans';
import Logger from 'core/logger';

const getPlans = async (req, res, next) => {
    const logger = new Logger(req.headers.tracking);
    logger.info('action=getPlans description="begin process"');
    const resBody = await Plans.findPlans(req.headers.tracking);
    logger.info(`action=getPlans resBody=${JSON.stringify(resBody)}`);
    res.status(httpStatus.OK);
    res.send(resBody);
    logger.info('action=getPlans description="end process"');

    return next();
};

export default { getPlans };
