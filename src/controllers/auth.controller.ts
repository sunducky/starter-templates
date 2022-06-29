import { Request, Response, NextFunction } from 'express';
import { BadRequestError, UnauthorizedError } from 'typescript-rest/dist/server/model/errors';

const login = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Login success'
    });
};

const signup = (req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestError('why');
};

export { login, signup };
