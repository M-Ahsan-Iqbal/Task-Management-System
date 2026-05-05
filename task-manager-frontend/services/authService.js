import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const authService = {
    login: async (data) => {
        try {
            // const response = await axios.post(`${API_URL}/login`, data);
            const response = await axios.post("https://overhappy-contemporaneously-cherie.ngrok-free.dev/webhook-test/login", data);
            return response.data;
        } catch (error) {
            if(error.response) {
                const status = error.response.status;
                const message = error.response.data.error || "Login failed";
                throw new Error(`Error ${status}: ${message}`);
            } else {
                throw new Error("Network error: Unable to reach the server");
            }
        }
    },
    register: async (data) => {
        try {
            // const response = await axios.post(`${API_URL}/register`, data);
            const response = await axios.post("https://overhappy-contemporaneously-cherie.ngrok-free.dev/webhook-test/signup", data);
            return response.data;
        } catch (error) {
            if(error.response) {
                const status = error.response.status;
                const message = error.response.data.error || "Registration failed";
                throw new Error(`Error ${status}: ${message}`);
            } else {
                throw new Error("Network error: Unable to reach the server");
            }
        }
    },
    logout: async () => {
        try {
            const response = await axios.post(
                "https://overhappy-contemporaneously-cherie.ngrok-free.dev/logout",
                {},
                {
                    withCredentials: true, // IMPORTANT for cookies
                }
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                const message = error.response.data.error || "Logout failed";
                throw new Error(`Error ${status}: ${message}`);
            } else {
                throw new Error("Network error: Unable to reach the server");
            }
        }
    }
};
