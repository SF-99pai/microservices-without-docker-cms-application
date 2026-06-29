import { useEffect, useState } from "react";

const initialState = {
  name: "",
  hod: "",
  block: "",
};

function DepartmentForm({ onSubmit, editingDepartment, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingDepartment) {
      setFormData({
        name: editingDepartment.name || "",
        hod: editingDepartment.hod || "",
        block: editingDepartment.block || "",
      });
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

      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Department Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        HOD
        <input
          type="text"
          name="hod"
          placeholder="Head of Department"
          value={formData.hod}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Block
        <input
          type="text"
          name="block"
          placeholder="Block"
          value={formData.block}
          onChange={handleChange}
          required
        />
      </label>

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