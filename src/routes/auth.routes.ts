import { Express, Router } from 'express';

const authController = require('../controllers/auth.controller');

function authRoutes(app: Express): Router {
    const router = Router();

    router.post('/login', authController.authenticateUser);
    router.post('/signup', authController.registerUser);

    app.use('/api/v1/auth', router);
    return router;
}

export { authRoutes };
