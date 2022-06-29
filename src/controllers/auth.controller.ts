import { Response, Request, NextFunction } from 'express';
import { generateToken } from '../utils/jwt';
import { AuthService } from '../services/auth.service';
import { LoginDTO, SignupDTO } from '../dtos/auth.dto';
require('dotenv').config();

class AuthController {
    async authenticateUser(req: Request, res: Response, next: NextFunction) {
        const loginDTO: LoginDTO = new LoginDTO(req.body);
        loginDTO.validate();
        await new AuthService()
            .authByEmailAndPassword(loginDTO)
            .then((auth) => {
                const token = generateToken(auth);
                res.status(200).json({
                    token: token,
                    user: auth
                });
            })
            .catch((err) => {
                res.status(401).json({
                    error: err.message
                });
            });
    }

    async registerUser(req: Request, res: Response, next: NextFunction) {
        const signupDTO: SignupDTO = req.body;
        signupDTO.validate;
        await new AuthService().register(signupDTO).then((auth) => {
            const token = generateToken(auth);
            res.status(201).json({
                token: token,
                user: auth
            });
        });
    }
}

module.exports = new AuthController();
