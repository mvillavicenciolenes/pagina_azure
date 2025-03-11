import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Azure DevOps</a></li>
          <li><a href="#">Azure Portal</a></li>
          <li><a href="#">CMS Tax Dashboard</a></li>
          <li><a href="#">Deloitte Time & Expense</a></li>
          <li><a href="#">ServiceNow</a></li>
        </ul>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>

      <main className="dashboard-main">
        <header>
          <h2>CMS Tax</h2>
          <input type="text" placeholder="Search..." />
        </header>

        <section className="dashboard-grid">
          <div className="card">Partnership Solutions Group (PSG)</div>
          <div className="card">Tax Transformation Office (TTO)</div>
          <div className="card">Tax Technology Consulting (TTC)</div>
          <div className="card">Documents</div>
          <div className="card">Org Chart and Services</div>
          <div className="card">CMS Tax Calendar</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;