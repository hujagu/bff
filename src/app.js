import Express from 'express';
import Config from 'core/config';
import app from 'core/express';
import HealthCheck from 'controllers/healthCheck';

const router = Express.Router();
const config = new Config();

router.get('/health', HealthCheck);

app.use(config.app.prefixURL, router);

export default app;
