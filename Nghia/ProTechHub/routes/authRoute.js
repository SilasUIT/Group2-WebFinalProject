import express from 'express';
import { 
    registerController, 
    loginController,
    testController
} from '../controllers/authController.js';
import { 
    isAdmin,
     requireSignIn
} from '../middlewares/authMiddleware.js';

// Router Object
const router = express.Router();

// Routing
// Rgister || Method POST
router.post('/register', registerController)

// Login || Method POST
router.post('/login', loginController)

// Test routes
router.get('/test', requireSignIn, isAdmin, testController)

export default router