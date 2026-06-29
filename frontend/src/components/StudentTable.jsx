function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="3">No Students Found</td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.student_name}</td>

              <td>
                <button onClick={() => onEdit(student)}>
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(student.student_id)
                  }
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

export default StudentTable;