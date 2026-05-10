/**
 * Utility Functions for CabShare
 */

export const utils = {
  /**
   * Check if user is logged in
   */
  isAuthenticated: () => {
    return !!localStorage.getItem("accessToken");
  },

  /**
   * Get current user info from localStorage
   */
  getUser: () => {
    return{
      name: "ayush",
      role: "Rider"
    }
    
  },

  /**
   * Save auth data
   */
  saveAuth: (token, user) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("user", JSON.stringify(user));
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    window.location.href = "/index.html";
  },

  /**
   * Redirect if not authenticated
   */
  requireAuth: () => {
    if (!utils.isAuthenticated()) {
      window.location.href = "/login.html";
    }
  },

  /**
   * Show toast notification (basic implementation)
   */
  showToast: (message, type = "success") => {
    const toast = document.createElement("div");
    toast.className = `fixed bottom-6 right-6 px-6 py-3 rounded-full text-white font-bold shadow-2xl z-50 animate-fade-in ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    }`;
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  },

  /**
   * Format date/time
   */
  formatDateTime: (dateString) => {
    return new Date(dateString).toLocaleString([], {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
};
