import { NavLink } from "react-router-dom";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBuilding,
  FaHome,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-icon">
          <FaUniversity />
        </div>

        <div className="hero-text-area">
          <h1>College Management System</h1>
          <p>
            Manage students, teachers, and departments from a single
            intuitive dashboard.
          </p>
        </div>
      </section>

      {/* Welcome */}
      <div className="welcome">
        <span></span>
        <h4>WELCOME BACK</h4>
        <span></span>
      </div>

      <h2 className="main-title">
        Quick access to all campus services
      </h2>

      <p className="subtitle">
        Use the shortcuts below to navigate to the service you need.
      </p>

      {/* Cards */}
      <div className="cards">

        <div className="card">
          <div className="icon purple">
            <FaGraduationCap />
          </div>

          <h2>Students</h2>

          <p>
            Manage student records through the Student Microservice.
          </p>

          <NavLink to="/students" className="card-button">
            Open Students <FaArrowRight />
          </NavLink>
        </div>

        <div className="card">
          <div className="icon blue">
            <FaChalkboardTeacher />
          </div>

          <h2>Teachers</h2>

          <p>
            Manage teacher records through the Teacher Microservice.
          </p>

          <NavLink to="/teachers" className="card-button">
            Open Teachers <FaArrowRight />
          </NavLink>
        </div>

        <div className="card">
          <div className="icon green">
            <FaBuilding />
          </div>

          <h2>Departments</h2>

          <p>
            Manage department records through the Department Microservice.
          </p>

          <NavLink to="/departments" className="card-button">
            Open Departments <FaArrowRight />
          </NavLink>
        </div>

        <div className="card">
          <div className="icon orange">
            <FaHome />
          </div>

          <h2>Home</h2>

          <p>
            Return to the dashboard home page.
          </p>

          <NavLink to="/" className="card-button">
            Go Home <FaArrowRight />
          </NavLink>
        </div>

      </div>

      <footer className="footer">
        <FaUniversity />
        <p>© 2026 College Management System. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;