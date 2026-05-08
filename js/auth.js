/**
 * Authentication Logic
 */
import api from './api.js';
import { utils } from './utils.js';

export const auth = {
  /**
   * Login user
   */
  login: async (email, password) => {
    try {
      const data = await api("/auth/login/", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      
      // Assume API returns { token: "...", user: { id: 1, name: "...", role: "Rider" } }
      utils.saveAuth(data.token, data.user);
      utils.showToast("Login successful!");
      
      setTimeout(() => {
        window.location.href = "/dashboard.html";
      }, 1000);
      
    } catch (error) {
      utils.showToast(error.message || "Invalid credentials", "error");
    }
  },

  /**
   * Register user
   */
  register: async (userData) => {
    try {
      await api("/auth/register/", {
        method: "POST",
        body: JSON.stringify(userData),
      });
      
      utils.showToast("Account created! Please login.");
      setTimeout(() => {
        window.location.href = "/login.html";
      }, 1500);
      
    } catch (error) {
      utils.showToast(error.message || "Registration failed", "error");
    }
  }
};
