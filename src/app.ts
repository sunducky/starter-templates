import express from 'express';
import bodyParser from 'body-parser';
import logger from './middlewares/logger.middleware';
import errHandler from './middlewares/error.middleware';
import { authRoutes } from './routes/auth.routes';
import rule from './middlewares/rule.middleware';

const app = express();

/* log requests and response */
app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* register routes here */
authRoutes(app);

/* set api rules */
app.use(rule);

/* handle errors */
app.use(errHandler);

export default app;
