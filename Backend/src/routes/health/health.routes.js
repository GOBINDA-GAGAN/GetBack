import express from "express"
import env from "../../config/configEnv.js";
import STATUS_CODES from "../../utils/statusCode.js";

const router = express.Router();

/**
 * @route   GET /api/v1/health
 * @desc    Health Check Route
 * @access  Public
 */
router.get("/", (req, res) => {
    return res.status(STATUS_CODES.OK).json({
        success: true,
        statusCode: `${STATUS_CODES.OK}`,
        message: "Server is running successfully",
        data: {
            serverTime: new Date().toISOString(),
            environment: env.NODE_ENV,
            version: env.API_VERSION || "v1",
            uptime: process.uptime(),
        },
    });
});

export default router;