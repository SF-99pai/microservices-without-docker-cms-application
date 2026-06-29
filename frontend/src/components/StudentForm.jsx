import { useEffect, useState } from "react";

const initialState = {
  name: "",
  email: "",
  course: "",
};

function StudentForm({ onSubmit, editingStudent, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name || "",
        email: editingStudent.email || "",
        course: editingStudent.course || "",
      });
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

      <label>
        Student Name
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Course
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
      </label>

      <div className="form-actions">
        <button type="submit">
          {editingStudent ? "Update Student" : "Save Student"}
        </button>

        {editingStudent && (
          <button type="button" className="button-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;