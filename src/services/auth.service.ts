import { BadRequestError } from 'typescript-rest/dist/server/model/errors';
import { Auth } from '../models/auth.model';
import { AppDataSource } from '../utils/db';

export class AuthService {
    authRepository;

    constructor() {
        this.authRepository = AppDataSource.getRepository(Auth);
    }

    authByEmailAndPassword() {}

    getError(): any {
        throw new BadRequestError('Eveything is not fine again');
    }
}
