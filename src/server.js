import 'babel-core/register';
import 'babel-polyfill';
import app from 'app';
import Config from 'core/config';
import Logger from 'core/logger';

const config = new Config();
const logger = new Logger();

app.listen(config.app.port, () => {
    logger.info(`action=startListen, description="Start listen NodeJS Application", appName="${config.app.name}", appPort=${config.app.port}`);
});
