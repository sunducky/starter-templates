import { DataSource } from 'typeorm';
import ormConfig from '../config/orm';

export const AppDataSource = new DataSource(ormConfig);
