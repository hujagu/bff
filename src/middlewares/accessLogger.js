/* istanbul ignore next */
import Morgan from 'morgan';
import Config from 'core/config';

const config = new Config();

Morgan.token('log-type', () => 'access_log');
Morgan.token('flow-id', req => req.headers.tracking.flwid);
Morgan.token('track-id', req => req.headers.tracking.trkid);
Morgan.token('request-id', req => req.headers.tracking.reqid);
Morgan.token('service-id', req => req.route.path);

const logFormat = ':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version"' +
        ' :status :res[content-length] " :referrer" ":user-agent" ResponseTime=:response-time ServiceId=:service-id log-type=:log-type ' +
        'flwid=:flow-id trkid=:track-id reqid=:request-id';

export default Morgan(logFormat, {
    skip: (req) => {
        if (req.route && req.route.path) {
            const path = `${req.route.path.replace(config.app.prefixURL, '')}`;
            return '/health'.indexOf(path) !== -1;
        }
        return true;
    }
});
