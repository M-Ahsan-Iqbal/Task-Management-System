import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { error } from "node:console";

declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: number;
                email: string;
            }
        }
    }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : req.cookies?.accessToken;

        if(!token) {
            return res.status(401).json({ error: "No token provided"});
        }

        const payload = verifyAccessToken(token);
        req.user = payload;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });    
    }
}