import { useEffect, useState } from "react";

import { studentApi } from "../api/api";

import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const loadStudents = async () => {
    try {
      const data = await studentApi.list();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSubmit = async (student) => {
    try {
      const payload = {
        name: student.name,
        email: student.email,
        course: student.course,
      };

      if (editingStudent) {
        const updated = await studentApi.update(editingStudent.id, payload);
        setStudents((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
        setEditingStudent(null);
      } else {
        const created = await studentApi.create(payload);
        setStudents((prev) => [...prev, created]);
      }

      await loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await studentApi.remove(id);
      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <StudentForm
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />

      <br />

      <StudentTable
        students={students}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Students;