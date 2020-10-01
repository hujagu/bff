import 'babel-core/register';
import 'babel-polyfill';
import Express from 'express';
import accessLogger from 'middlewares/accessLogger';
import responseHeaders from 'middlewares/responseHeaders';

const app = new Express();

app.use(responseHeaders);
app.use(accessLogger);
export default app;
