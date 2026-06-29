function DepartmentTable({ departments, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Department ID</th>
          <th>Department Name</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {departments.length === 0 ? (
          <tr>
            <td colSpan="3">No Departments Found</td>
          </tr>
        ) : (
          departments.map((department) => (
            <tr key={department.department_id}>
              <td>{department.department_id}</td>
              <td>{department.department_name}</td>

              <td>
                <button onClick={() => onEdit(department)}>
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(department.department_id)
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

export default DepartmentTable;