"use server"

import { cookies } from "next/headers";
import { authService } from "@/services/authService";

export async function loginAction(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("checkbox") as string === "on";

    const response = await authService.login({ email, password });
    const token = response.token;

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: rememberMe ? 60 * 60 * 24 * 30 : undefined,
    });

    return { error: null, success: "Login successful!" };
  } catch (error) {
    return { error: "Invalid credentials", success: null };
  }
}