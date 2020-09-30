import uuid from 'node-uuid';

export default (req, res, next) => {
    const tracking = {
        reqid: uuid.v4()
    };

    tracking.flwid = req.headers['X-Flow-Id'] || uuid.v4();
    tracking.trkid = req.headers['X-Track-Id'] || uuid.v4();

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.setHeader('Cache-Control', 'public'); // TODO: Validate if this is ok to be fixed or need to be variable.
    res.setHeader('Accept-Encoding', 'compress, gzip');
    res.setHeader('X-Flow-Id', tracking.flwid);
    res.setHeader('X-Track-Id', tracking.trkid);
    res.setHeader('X-Request-Id', tracking.reqid);

    req.headers.tracking = tracking;

    return next();
};
