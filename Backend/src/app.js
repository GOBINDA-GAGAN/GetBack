import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js"
import STATUS_CODES from "./utils/statusCode.js";

const app = express();

// Security Middleware
app.use(helmet());

// CORS
app.use(cors());

// Logging
app.use(morgan("dev"));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API Routes
app.use("/api/v1", routes);


// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

export default app;