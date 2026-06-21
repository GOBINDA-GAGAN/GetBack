import app from "./app.js";
import env from "./config/configEnv.js";
import dbConnection from "./database/dbConnection.js";

const startServer = async () => {
  await dbConnection();

  app.listen(env.PORT, () => {
    console.log(
      `🚀 Server running on http://localhost:${env.PORT}`
    );
  });
};

startServer();