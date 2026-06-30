// Dynamically determine the API base URL
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  
  // If VITE_API_BASE_URL is explicitly set and not localhost, use it
  if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
    return envUrl;
  }
  
  // On production/deployed environments, use the current domain
  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol;
    const host = window.location.host;
    return `${protocol}//${host}`;
  }
  
  // Fallback for development
  return "http://localhost:8000";
};

const BASE_URL = getApiBaseUrl();

const jsonHeaders = {
  "Content-Type": "application/json",
};

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || "API request failed");
  }

  // Handle DELETE (204 No Content)
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

// =========================
// Student API
// =========================

export const studentApi = {
  list: () => request("/api/students"),
  get: (id) => request(`/api/students/${id}`),
  create: (data) =>
    request("/api/students", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/api/students/${id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  remove: (id) =>
    request(`/api/students/${id}`, {
      method: "DELETE",
    }),
};

// =========================
// Teacher API
// =========================

export const teacherApi = {
  list: () => request("/api/teachers"),
  get: (id) => request(`/api/teachers/${id}`),
  create: (data) =>
    request("/api/teachers", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/api/teachers/${id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  remove: (id) =>
    request(`/api/teachers/${id}`, {
      method: "DELETE",
    }),
};

// =========================
// Department API
// =========================

export const departmentApi = {
  list: () => request("/api/departments"),
  get: (id) => request(`/api/departments/${id}`),
  create: (data) =>
    request("/api/departments", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/api/departments/${id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  remove: (id) =>
    request(`/api/departments/${id}`, {
      method: "DELETE",
    }),
};