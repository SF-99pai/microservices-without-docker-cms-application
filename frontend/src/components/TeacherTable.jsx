function TeacherTable({ teachers, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Teacher ID</th>
          <th>Teacher Name</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {teachers.length === 0 ? (
          <tr>
            <td colSpan="3">No Teachers Found</td>
          </tr>
        ) : (
          teachers.map((teacher) => (
            <tr key={teacher.teacher_id}>
              <td>{teacher.teacher_id}</td>
              <td>{teacher.teacher_name}</td>

              <td>
                <button onClick={() => onEdit(teacher)}>
                  Edit
                </button>

                <button
                  onClick={() => onDelete(teacher.teacher_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default TeacherTable;