import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>College CMS</h2>
        <p>Quick access to all campus services.</p>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
        >
          Home
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
        >
          Students
        </NavLink>

        <NavLink
          to="/teachers"
          className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
        >
          Teachers
        </NavLink>

        <NavLink
          to="/departments"
          className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
        >
          Departments
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;