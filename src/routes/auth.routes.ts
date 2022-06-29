import { Express, Router } from 'express';
import { login, signup } from '../controllers/auth.controller';

function authRoutes(app: Express): Router {
    const router = Router();

    router.get('/login', login);
    router.get('/signup', signup);

    app.use('/api/v1/auth', router);
    return router;
}

export { authRoutes };
