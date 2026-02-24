'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import { useActionState } from 'react';

type LoginState = {
  error: string | null;
  success: string | null;
};


export default function LoginPage() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState<
  LoginState,
  FormData
>(
    loginAction,
    {
      error: null,
      success: null,
    }
  );

  // Action function
  async function loginAction(prevState: LoginState, formData: FormData): Promise<LoginState> {
    try {
      const response = await authService.login(formData);

      console.log("login response:", response);

      // If login successful
      router.push("/dashboard");

      return {
        error: null,
        success: "Login successful!",
      };

    } catch (error) {
      console.error("Login failed:", error);

      return {
        error: "Invalid credentials",
        success: null,
      };
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form action={formAction} className="space-y-4">

          {state?.error && (
            <p className="text-red-500 text-sm">{state.error}</p>
          )}

          {state?.success && (
            <p className="text-green-500 text-sm">{state.success}</p>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border rounded-md text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border rounded-md text-gray-800"
            />
          </div>

          <button
            disabled={isPending}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isPending ? 'Loading...' : 'Login'}
          </button>

        </form>
      </div>
    </div>
  );
}
