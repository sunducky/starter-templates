import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOST = process.env.SERVER_HOST || 'localhost';

const SERVER = {
    hostname: SERVER_HOST,
    port: SERVER_PORT
};

const config = {
    server: SERVER
};

export default config;
