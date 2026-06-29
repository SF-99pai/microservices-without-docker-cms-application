import { useEffect, useState } from "react";
import { departmentApi } from "../api/api";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDepartments = async () => {
    try {
      setLoading(true);
      const data = await departmentApi.list();
      setDepartments(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  return (
    <div>
      <h1>Department Management</h1>

      {loading && <p>Loading departments...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <p>Total Departments: {departments.length}</p>

          {/* DepartmentForm will be added here */}

          {/* DepartmentTable will be added here */}
        </>
      )}
    </div>
  );
}

export default Departments;