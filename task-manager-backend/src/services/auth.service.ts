import bcrypt from "bcryptjs";
import prisma from "../lib/prismaClient.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.js";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  agreedToTerms: boolean;
}
type login = {
    email: string;
    password: string;
}


export const authService = {
    async register({ name, email, password, agreedToTerms}: RegisterInput) {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            throw new Error("Email already exist");
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                agreedToTerms,
                agreedToTermsAt: agreedToTerms ? new Date() : null,
            }
        })

        // Generate tokens right after register
        const accessToken = generateAccessToken({userId: user.id, email: user.email});
        const refreshToken = generateRefreshToken({userId: user.id, email: user.email});

        // Save refresh token to DB
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken },
        })

        return { user, accessToken, refreshToken };
    },

    async login({ email, password}: login) {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid email or password");
        }

        const accessToken = generateAccessToken({userId: user.id, email: user.email});
        const refreshToken = generateRefreshToken({userId: user.id, email: user.email});

        // Save refresh token to DB
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken },
        })

        return { user, accessToken, refreshToken };
    },

    // Token refresh
    async refreshToken(token: string) {
        const payload = verifyRefreshToken(token);

        const user = await prisma.user.findUnique({
            where: { id: payload.userId },
        });

        if (!user || user.refreshToken !== token) {
            throw new Error("Invalid refresh token");
        }

        const accessToken = generateAccessToken({userId: user.id, email: user.email});
        const refreshToken = generateRefreshToken({userId: user.id, email: user.email});

        // Update refresh token in DB
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken },
        });

        return { accessToken, refreshToken };
    },

    // handle logout by clearing refresh token from DB
    async logout(userId: number) {
        await prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
    });
    },
};