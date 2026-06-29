import { useEffect, useState } from "react";
import { departmentApi } from "../api/api";

import DepartmentForm from "../components/DepartmentForm";
import DepartmentTable from "../components/DepartmentTable";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [editingDepartment, setEditingDepartment] = useState(null);
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

  const handleSubmit = async (department) => {
    try {
      const payload = {
        name: department.name,
        hod: department.hod,
        block: department.block,
      };

      if (editingDepartment) {
        const updated = await departmentApi.update(editingDepartment.id, payload);
        setDepartments((prev) => prev.map((d) => (d.id === updated.id ? updated : d)));
        setEditingDepartment(null);
      } else {
        const created = await departmentApi.create(payload);
        setDepartments((prev) => [...prev, created]);
      }

      await loadDepartments();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this department?")) return;

    try {
      await departmentApi.remove(id);
      await loadDepartments();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <DepartmentForm
        onSubmit={handleSubmit}
        editingDepartment={editingDepartment}
        onCancel={() => setEditingDepartment(null)}
      />

      <br />

      <DepartmentTable
        departments={departments}
        onEdit={setEditingDepartment}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Departments;