import 'babel-core/register';
import 'babel-polyfill';
import Express from 'express';
import app from 'core/express';
import Config from 'core/config';
import HealthCheck from 'controllers/healthCheck';
import Plans from 'controllers/plans';

const config = new Config();
const router = new Express.Router();

router.get('/health', HealthCheck);
router.get('/planes', Plans.getPlans);

app.use(config.app.prefixURL, router);

export default app;
