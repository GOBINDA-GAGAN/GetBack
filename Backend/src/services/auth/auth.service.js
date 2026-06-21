import bcrypt from "bcrypt";

export const registerUserService = async (userData) => {
  const { name, email, password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  return {
    name,
    email,
    password: hashedPassword,
  };
};