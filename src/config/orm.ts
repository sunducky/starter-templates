import { DataSourceOptions } from 'typeorm';
import path from 'path';
require('dotenv').config();

const isCompiled = path.extname(__filename) === '.js';

export default {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: isCompiled ? false : false,
    synchronize: true,
    entities: [`src/api/v1/models/**/*.model.${isCompiled ? 'js' : 'ts'}`]
} as DataSourceOptions;
