import { registerUserService } from "../../services/auth/auth.service.js";

export const registerUser = async (req, res, next) => {
    console.log(req.body);
    
  try {
    const result = await registerUserService(req.body);

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};