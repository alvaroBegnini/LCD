import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
function socketAuth(token: string) {
  try {
    const key = process.env.PRIVATE_JWT_KEY;
    if (!key) return;
    const user: any = jwt.verify(token, key);
    return user.username;
  } catch (err) {
    return false;
  }
}

export default socketAuth;
