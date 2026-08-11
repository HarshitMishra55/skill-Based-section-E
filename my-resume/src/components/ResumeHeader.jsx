import React from "react";
import "./ResumeHeader.css";

function ResumeHeader() {
    return (
        <header className="resume-header">
            <div className="header-content">
                <h1>Harshit Mishra</h1>

                <p className="designation">
                    Software Developer | React Developer
                </p>

                <div className="contact-info">
                    <span>📧 harshit@example.com</span>
                    <span>📱 +91 98765 43210</span>
                    <span>📍 India</span>
                </div>

                <div className="links">
                    <a href="https://github.com/" target="_blank">
                        GitHub
                    </a>

                    <a href="https://linkedin.com/" target="_blank">
                        LinkedIn
                    </a>

                    <a href="https://example.com/" target="_blank">
                        Portfolio
                    </a>
                </div>
            </div>
        </header>
    );
}

export default ResumeHeader;