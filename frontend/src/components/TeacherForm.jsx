import { useEffect, useState } from "react";

const initialState = {
  teacher_id: "",
  teacher_name: "",
};

function TeacherForm({ onSubmit, editingTeacher, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingTeacher) {
      setFormData(editingTeacher);
    } else {
      setFormData(initialState);
    }
  }, [editingTeacher]);

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
      <h2>{editingTeacher ? "Edit Teacher" : "Add Teacher"}</h2>

      <input
        type="text"
        name="teacher_id"
        placeholder="Teacher ID"
        value={formData.teacher_id}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="teacher_name"
        placeholder="Teacher Name"
        value={formData.teacher_name}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingTeacher ? "Update" : "Save"}
      </button>

      {editingTeacher && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TeacherForm;