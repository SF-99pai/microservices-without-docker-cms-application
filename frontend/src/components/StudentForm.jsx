import { useEffect, useState } from "react";

const initialState = {
  student_id: "",
  student_name: "",
};

function StudentForm({ onSubmit, editingStudent, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(initialState);
    }
  }, [editingStudent]);

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
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>

      <input
        type="text"
        name="student_id"
        placeholder="Student ID"
        value={formData.student_id}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="student_name"
        placeholder="Student Name"
        value={formData.student_name}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingStudent ? "Update" : "Save"}
      </button>

      {editingStudent && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default StudentForm;