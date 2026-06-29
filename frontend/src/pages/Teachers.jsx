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
      if (editingTeacher) {
        await teacherApi.update(teacher.teacher_id, teacher);
        setEditingTeacher(null);
      } else {
        await teacherApi.create(teacher);
      }

      loadTeachers();
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