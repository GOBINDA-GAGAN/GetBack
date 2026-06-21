import express from "express"
import healthRoute from "./health/health.routes.js"
import authRoutes from "./auth/auth.route.js";

const router = express.Router();


// Health Check Route
router.use("/health",healthRoute);

//auth-route
router.use("/auth",authRoutes)





export default router;