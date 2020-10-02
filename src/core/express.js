import 'babel-core/register';
import 'babel-polyfill';
import cors from 'cors';
import Express from 'express';
import accessLogger from 'middlewares/accessLogger';
import responseHeaders from 'middlewares/responseHeaders';

const app = new Express();

app.use(cors())
app.use(responseHeaders);
app.use(accessLogger);
export default app;
