import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>

      <div className="education-item">
        <div className="education-header">
          <h3>Master of Technology (M.Tech) – Computer Science</h3>
          <span>2025 – Present</span>
        </div>

        <p className="institute">
          XYZ University, India
        </p>

        <p className="details">
          Currently pursuing M.Tech in Computer Science and Engineering.
        </p>
      </div>

      <div className="education-item">
        <div className="education-header">
          <h3>Bachelor of Technology (B.Tech) – Computer Science</h3>
          <span>2021 – 2025</span>
        </div>

        <p className="institute">
          ABC University, India
        </p>

        <p className="details">
          Bachelor of Technology in Computer Science and Engineering.
        </p>
      </div>
    </section>
  );
}

export default Education;