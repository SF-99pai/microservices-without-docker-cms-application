import { useEffect, useState } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
};

function TeacherForm({ onSubmit, editingTeacher, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingTeacher) {
      setFormData({
        name: editingTeacher.name || "",
        email: editingTeacher.email || "",
        subject: editingTeacher.subject || "",
      });
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

      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Teacher Name"
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
        Subject
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </label>

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