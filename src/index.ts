import { AppDataSource } from './utils/db';
import app from './app';
import http from 'http';
import logging from './config/logging';
import config from './config/config';
const NAMESPACE = 'Server';
require('dotenv').config();

async function bootstrap() {
    await AppDataSource.initialize()
        .then(() => {
            logging.info(NAMESPACE, `Database connected...`);
            /* create the server */
            const server = http.createServer(app);
            server.listen(config.server.port, () => {
                logging.info(NAMESPACE, `Server is listening on port ${config.server.hostname}:${config.server.port}`);
            });
        })
        .catch((e) => {
            logging.error('Database', `${e}`);
            // stop the server
            process.exit(1);
        });
}

bootstrap();
