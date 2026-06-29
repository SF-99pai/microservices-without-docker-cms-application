import { useEffect, useState } from "react";

import { teacherApi } from "../api/api";

import TeacherForm from "../components/TeacherForm";
import TeacherTable from "../components/TeacherTable";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);

  const loadTeachers = async () => {
    try {
      const data = await teacherApi.list();
      setTeachers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  const handleSubmit = async (teacher) => {
    try {
      const payload = {
        name: teacher.name,
        email: teacher.email,
        subject: teacher.subject,
      };

      if (editingTeacher) {
        const updated = await teacherApi.update(editingTeacher.id, payload);
        setTeachers((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
        setEditingTeacher(null);
      } else {
        const created = await teacherApi.create(payload);
        setTeachers((prev) => [...prev, created]);
      }

      await loadTeachers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    try {
      await teacherApi.remove(id);
      loadTeachers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TeacherForm
        onSubmit={handleSubmit}
        editingTeacher={editingTeacher}
        onCancel={() => setEditingTeacher(null)}
      />

      <br />

      <TeacherTable
        teachers={teachers}
        onEdit={setEditingTeacher}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Teachers;