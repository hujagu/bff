import { OK } from 'http-status';

export default (req, res, next) => {
    res.status(OK);
    res.send({ status: 'OK' });
    return next();
};
