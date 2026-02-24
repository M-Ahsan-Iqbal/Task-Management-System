import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const authService = {
    login: async (data) => {
        try {
            const response = await axios.post(`${API_URL}/login`, data);
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
            const response = await axios.post(`${API_URL}/register`, data);
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
    }
};
