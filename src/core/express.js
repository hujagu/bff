import Express from 'express';
import cors from 'cors';
import accessLogger from 'middlewares/accessLogger';
import responseHeaders from 'middlewares/responseHeaders';

const app = new Express();

const corsOptions = {
    origin: '*',
    allowedHeaders: ['X-Flow-Id', 'X-Track-Id']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(responseHeaders);
app.use(accessLogger);
export default app;
