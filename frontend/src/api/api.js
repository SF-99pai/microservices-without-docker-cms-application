const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

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
  list: () => request("/students"),
  get: (id) => request(`/students/${id}`),
  create: (data) =>
    request("/students", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/students/${id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  remove: (id) =>
    request(`/students/${id}`, {
      method: "DELETE",
    }),
};

// =========================
// Teacher API
// =========================

export const teacherApi = {
  list: () => request("/teachers"),
  get: (id) => request(`/teachers/${id}`),
  create: (data) =>
    request("/teachers", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/teachers/${id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  remove: (id) =>
    request(`/teachers/${id}`, {
      method: "DELETE",
    }),
};

// =========================
// Department API
// =========================

export const departmentApi = {
  list: () => request("/departments"),
  get: (id) => request(`/departments/${id}`),
  create: (data) =>
    request("/departments", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/departments/${id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(data),
    }),
  remove: (id) =>
    request(`/departments/${id}`, {
      method: "DELETE",
    }),
};