import { BadRequestError } from 'typescript-rest/dist/server/model/errors';
import { LoginDTO, SignupDTO } from '../dtos/auth.dto';
import { Auth } from '../models/auth.model';
import { AppDataSource } from '../utils/db';
const bcrypt = require('bcrypt');
const saltRounds = 10;

export class AuthService {
    authRepository;

    constructor() {
        this.authRepository = AppDataSource.getRepository(Auth);
    }

    async authByEmailAndPassword(loginDto: LoginDTO): Promise<Auth> {
        // get user by email
        const auth = await this.authRepository.findOneBy({ email: loginDto.email });
        if (auth && bcrypt.compare(loginDto.password, auth.password)) {
            return auth;
        }

        throw new BadRequestError('Invalid email or password');
    }

    async register(signupDto: SignupDTO): Promise<Auth> {
        const auth = this.authRepository.create(signupDto);
        auth.password = await bcrypt.hash(auth.password, saltRounds);
        try {
            return await this.authRepository.save(auth);
        } catch (error) {
            throw new BadRequestError(`${error}`);
        }
    }
}
