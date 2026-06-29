function TeacherTable({ teachers, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>

      <tbody>
        {teachers.length === 0 ? (
          <tr>
            <td colSpan="4">No Teachers Found</td>
          </tr>
        ) : (
          teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
              <td className="actions">
                <button className="edit" onClick={() => onEdit(teacher)}>
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => onDelete(teacher.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
}

export default TeacherTable;