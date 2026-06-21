import express from "express"
import env from "../../config/configEnv.js";
import STATUS_CODES from "../../utils/statusCode.js";
import { registerUser } from "../../controllers/auth/auth.controller.js";


const router = express.Router();

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register new pharmacy owner account 
 * @access  Public
 */

router.post("/register",registerUser );

export default router;