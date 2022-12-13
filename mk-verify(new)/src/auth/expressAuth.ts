import { config } from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

config();
function expressAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"]?.split(" ")[1];
    const key = process.env.PRIVATE_JWT_KEY;
    if (!key) throw new Error("JWT KEY MISSING");
    if (!token) return res.sendStatus(403);
    if (!key) return;
    jwt.verify(token, key, (err) => {
      if(err) return res.sendStatus(403)
      next()
    });

}

export default expressAuth;
