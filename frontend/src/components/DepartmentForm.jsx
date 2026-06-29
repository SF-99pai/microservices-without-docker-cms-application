import { useEffect, useState } from "react";

const initialState = {
  department_id: "",
  department_name: "",
};

function DepartmentForm({ onSubmit, editingDepartment, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingDepartment) {
      setFormData(editingDepartment);
    } else {
      setFormData(initialState);
    }
  }, [editingDepartment]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editingDepartment ? "Edit Department" : "Add Department"}</h2>

      <input
        type="text"
        name="department_id"
        placeholder="Department ID"
        value={formData.department_id}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="department_name"
        placeholder="Department Name"
        value={formData.department_name}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingDepartment ? "Update" : "Save"}
      </button>

      {editingDepartment && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default DepartmentForm;