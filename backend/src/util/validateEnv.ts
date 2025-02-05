/**
 * Parses .env parameters and ensures they are of required types and are not missing.
 * If any .env parameters are missing, the server will not start and an error will be thrown.
 */

import { cleanEnv } from "envalid";
import { json, port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  PORT: port(), // Port to run backend on
  MONGODB_URI: str(), // URI of MongoDB database to use
  FRONTEND_ORIGIN: str() // URL of frontend, to allow CORS from frontend
});
