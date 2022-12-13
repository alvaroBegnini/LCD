import { config } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

config();

function login(username: string, password: string) {
  const hashUsername = "$2b$10$8.R6HCYfxLpbfc4pkwAXi.7fPNn0wZd.S1t2ap6.OHUWS9yCR9dEq"
  const hashPassword = "$2b$10$KRNhhksSMZPsratuKL0s9OBQR1rgRKheMGkt74soPuQctz.k.Cs7O"
  if(bcrypt.compareSync(username, hashUsername) && bcrypt.compareSync(password, hashPassword)){
    const jwtKey = process.env.PRIVATE_JWT_KEY;
    if (!jwtKey) return;
    const token = jwt.sign({ username }, jwtKey, { expiresIn: "24h" });
    return {token};
  }
}

export default login;
