/**
 * Ride Management Logic
 */
import api from './api.js';
import { utils } from './utils.js';

export const rides = {
  /**
   * Fetch all available rides (Rider view)
   */
  getAvailable: async () => {
    try {
      return await api("/rides/available/");
    } catch (error) {
      utils.showToast("Failed to fetch available rides", "error");
      return [];
    }
  },

  /**
   * Create a new ride (Driver view)
   */
  create: async (rideData) => {
    try {
      await api("/rides/create/", {
        method: "POST",
        body: JSON.stringify(rideData),
      });
      utils.showToast("Ride created successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard.html";
      }, 1000);
    } catch (error) {
      utils.showToast(error.message || "Failed to create ride", "error");
    }
  },

  /**
   * Join an existing ride (Rider action)
   */
  join: async (rideId) => {
    try {
      await api(`/rides/join/${rideId}/`, {
        method: "POST"
      });
      utils.showToast("Joined ride successfully!");
      return true;
    } catch (error) {
      utils.showToast(error.message || "Failed to join ride", "error");
      return false;
    }
  }
};
