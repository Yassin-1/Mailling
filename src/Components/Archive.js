// src/components/Archive.js
import React from "react";
import "../Styles/Archive.css";

function Archive({ emails, selectedEmails }) {
  return (
    <div className="archive">
      <h2 className="header">Archive</h2>
      {emails.length === 0 ? (
        <div className="empty-state">
          <div className="empty-image-placeholder">
            <svg
            className="empty-image"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.6 5.6C18 -0.7 24.7 6 18.4 8.4L22 12L18.4 15.6C16 9.3 9.3 16 15.6 18.4L12 22L8.4 18.4C6 24.7 -0.7 18 5.6 15.6L2 12L5.6 8.4C8 14.7 14.7 8 8.4 5.6L12 2Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p>No archived emails yet.</p>
        </div>
      ) : (
        <div className="mail-grid">
          <ul className="email">
            {emails.map((email) => (
              <div className="archived">
                <li key={email.id}>
                  <span>{email.subject}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Archive;
