import { NextFunction, Request, Response } from "express";
declare function expressAuth(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export default expressAuth;
