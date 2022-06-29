import logging from '../config/logging';

const NAMESPACE = 'Server';

/* log requests and response */
function logger(req: any, res: any, next: any) {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}],`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`);
    });

    next();
}

export default logger;
