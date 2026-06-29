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
      if (editingStudent) {
        await studentApi.update(student.student_id, student);
        setEditingStudent(null);
      } else {
        await studentApi.create(student);
      }

      loadStudents();
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