// src/components/Inbox.js
import React, { useState } from "react";
import "../Styles/Inbox.css";

function Inbox({
  emails,
  toggleSelectAll,
  archiveSelected,
  markSelectedAsRead,
  setEmails,
}) {
  const [selectedEmail, setSelectedEmail] = useState(null); // For the email detail view

  const toggleEmailSelect = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, selected: !email.selected } : email
      )
    );
  };

  const openEmail = (email) => {
    setSelectedEmail({ ...email, read: true });
    setEmails((prevEmails) =>
      prevEmails.map((e) => (e.id === email.id ? { ...e, read: true } : e))
    );
  };

  const closeEmail = () => setSelectedEmail(null);

  const archiveEmail = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, archived: true } : email
      )
    );
    closeEmail();
  };

  const markAsUnread = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, read: false } : email
      )
    );
  };

  return (
    <div className="inbox">
      <h2>Inbox</h2>
      <div className="Btns">
        <button onClick={toggleSelectAll}>Select All</button>
        <div className="actionBtns">
          <button onClick={markSelectedAsRead}>Mark as read</button>
          <button onClick={archiveSelected}>Archive</button>
        </div>
      </div>

      <ul>
        {emails.map((email) => (
          <div className={`email-item ${email.read ? "read" : "unread"}`}>
            <input
              type="checkbox"
              checked={email.selected || false}
              onChange={() => toggleEmailSelect(email.id)}
            />
            <li key={email.id} onClick={() => openEmail(email)}>
              <span>{email.subject}</span>
            </li>
          </div>
        ))}
      </ul>

      {selectedEmail && (
        <div className="email-overlay">
          <div className="email-detail">
            <div className="Btns">
              <button className="close-btn" onClick={closeEmail}>
                Close
              </button>
              <div className="actionBtns">
                <button onClick={() => markAsUnread(selectedEmail.id)}>
                  Mark as Unread
                </button>
                <button onClick={() => archiveEmail(selectedEmail.id)}>
                  Archive
                </button>
              </div>
            </div>

            <h3>{selectedEmail.subject}</h3>
            <p>
              This is the content of the email. You can display additional
              details here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inbox;
