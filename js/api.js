/**
 * Pure Frontend API Layer (Mocked for Demo)
 * Uses localStorage for persistent data across sessions.
 */

const USE_ARTIFICIAL_DELAY = 500; // ms

/**
 * Enhanced mock fetcher that simulates a backend.
 */
const api = async (endpoint, options = {}) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, USE_ARTIFICIAL_DELAY));

  const body = options.body ? JSON.parse(options.body) : null;
  const mockUsers = JSON.parse(localStorage.getItem("db_users") || "[]");
  const mockRides = JSON.parse(localStorage.getItem("db_rides") || "[]");

  // Authentication Logic
  if (endpoint === "/auth/login/") {
    let user = mockUsers.find(u => u.email === body.email && u.password === body.password);
    
    // DEMO FREEDOM: If no users exist or this specifically is 'demo@example.com', let them in
    if (!user && (body.email === "demo@example.com" || mockUsers.length === 0)) {
      user = { id: "demo-id", name: body.email.split('@')[0], email: body.email, role: "Rider", password: body.password };
      if (!mockUsers.find(u => u.email === body.email)) {
        mockUsers.push(user);
        localStorage.setItem("db_users", JSON.stringify(mockUsers));
      }
    }
    
    if (!user) throw { message: "Invalid email or password. Try demo@example.com / password" };
    
    const token = "demo_token_" + Math.random().toString(36).substr(2);
    localStorage.setItem("access_token", token);
    return { token, user };
  }

  if (endpoint === "/auth/register/") {
    if (mockUsers.find(u => u.email === body.email)) throw { message: "Email already exists" };
    
    const newUser = { id: Date.now().toString(), ...body };
    mockUsers.push(newUser);
    localStorage.setItem("db_users", JSON.stringify(mockUsers));
    return { message: "Success" };
  }

  // Ride Logic
  if (endpoint === "/rides/available/") {
    // Populate default rides if empty
    if (mockRides.length === 0) {
      const defaults = [
        { id: '1', start_location: 'Central Mall', end_location: 'International Airport', time: '10:30 AM', seats: 3, driver: 'John D.' },
        { id: '2', start_location: 'Tech Park South', end_location: 'Downtown Station', time: '09:15 AM', seats: 2, driver: 'Sarah M.' },
        { id: '3', start_location: 'Green Valley', end_location: 'West End Mall', time: '11:45 AM', seats: 4, driver: 'Alex K.' }
      ];
      localStorage.setItem("db_rides", JSON.stringify(defaults));
      return defaults;
    }
    return mockRides;
  }

  if (endpoint === "/rides/create/") {
    const newRide = { 
      id: Date.now().toString(), 
      ...body,
      // Format time if it's a date-local string
      time: body.time?.includes('T') ? new Date(body.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : (body.time || '12:00 PM')
    };
    mockRides.push(newRide);
    localStorage.setItem("db_rides", JSON.stringify(mockRides));
    return newRide;
  }

  if (endpoint.includes("/rides/join/")) {
    const rideId = endpoint.split('/').filter(Boolean).pop();
    const rideIndex = mockRides.findIndex(r => r.id === rideId);
    if (rideIndex !== -1 && mockRides[rideIndex].seats > 0) {
      mockRides[rideIndex].seats -= 1;
      localStorage.setItem("db_rides", JSON.stringify(mockRides));
      return { message: "Joined successfully" };
    }
    throw { message: "No seats available or ride not found" };
  }

  return {};
};

export default api;

