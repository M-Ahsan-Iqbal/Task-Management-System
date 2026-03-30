import prisma from "../lib/prismaClient.js";
import { Request, Response } from "express";
import { authService } from "../services/auth.service.js";

// User registration
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, agreedToTerms } = req.body;

    const { user, accessToken, refreshToken } = await authService.register({
      name,
      email,
      password,
      agreedToTerms,
    });

    // Send refresh token in httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
      accessToken,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// User login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { user, accessToken, refreshToken } = await authService.login({
      email,
      password,
    });

    // Send refresh token in httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
      accessToken,
    });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
// refresh token

export const refreshToken = async (req: Request, res: Response) => {
  try {
    // Get refresh token from cookie
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({ error: "No refresh token provided" });
    }

    const { accessToken, refreshToken } = await authService.refreshToken(token);

    // update cookie with new refresh token
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ accessToken });
  } catch (error: any) {
    res.status(401).json({ error: "Invalid or expired refresh token" });
  }
};

// Logout
export const logout = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    await authService.logout(userId);

    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
