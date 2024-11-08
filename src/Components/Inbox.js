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
      <div className="header">
        {" "}
        <h2>Inbox</h2>
        <div className="btns">
          <div className="select-all">
            <input type="checkbox" onChange={() => toggleSelectAll()} />
            <span>Select All</span>
          </div>

          <div className="action-btns">
            <button onClick={markSelectedAsRead}>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8806 2.58494L16.8403 6.45874C17.0509 6.59562 17.1562 6.66406 17.2325 6.75535C17.3 6.83616 17.3507 6.92964 17.3817 7.0303C17.4167 7.14402 17.4167 7.2696 17.4167 7.52076V13.325C17.4167 14.6552 17.4167 15.3202 17.1578 15.8283C16.9301 16.2751 16.5668 16.6385 16.1199 16.8662C15.6119 17.125 14.9468 17.125 13.6167 17.125H5.38334C4.05321 17.125 3.38815 17.125 2.88011 16.8662C2.43322 16.6385 2.06989 16.2751 1.8422 15.8283C1.58334 15.3202 1.58334 14.6552 1.58334 13.325V7.52076C1.58334 7.2696 1.58334 7.14402 1.6183 7.0303C1.64926 6.92964 1.69999 6.83616 1.76752 6.75535C1.8438 6.66406 1.9491 6.59562 2.15968 6.45874L8.11936 2.58494M10.8806 2.58494C10.3809 2.26012 10.131 2.0977 9.86181 2.03451C9.62384 1.97865 9.37616 1.97865 9.13819 2.03451C8.86897 2.0977 8.6191 2.26012 8.11936 2.58494M10.8806 2.58494L16.5997 6.30235C16.872 6.47932 17.0081 6.56781 17.0553 6.68003C17.0965 6.7781 17.0965 6.88862 17.0553 6.98669C17.0081 7.09891 16.872 7.1874 16.5997 7.36438L10.8806 11.0818C10.3809 11.4066 10.131 11.569 9.86181 11.6322C9.62384 11.6881 9.37616 11.6881 9.13819 11.6322C8.86897 11.569 8.6191 11.4066 8.11936 11.0818L2.40028 7.36438C2.12801 7.1874 1.99187 7.09891 1.94472 6.98669C1.90352 6.88862 1.90352 6.7781 1.94472 6.68003C1.99187 6.56781 2.12801 6.47933 2.40028 6.30235L8.11936 2.58494"
                  stroke="#4B5563"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Mark as read
            </button>
            <button onClick={archiveSelected}>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 5.24998V4.61665C12.6667 3.7299 12.6667 3.28652 12.4941 2.94783C12.3423 2.6499 12.1001 2.40769 11.8022 2.25589C11.4635 2.08331 11.0201 2.08331 10.1333 2.08331H8.86667C7.97992 2.08331 7.53654 2.08331 7.19785 2.25589C6.89993 2.40769 6.65771 2.6499 6.50591 2.94783C6.33333 3.28652 6.33333 3.7299 6.33333 4.61665V5.24998M7.91667 9.60415V13.5625M11.0833 9.60415V13.5625M2.375 5.24998H16.625M15.0417 5.24998V14.1166C15.0417 15.4468 15.0417 16.1118 14.7828 16.6199C14.5551 17.0668 14.1918 17.4301 13.7449 17.6578C13.2369 17.9166 12.5718 17.9166 11.2417 17.9166H7.75833C6.42821 17.9166 5.76315 17.9166 5.25511 17.6578C4.80822 17.4301 4.44489 17.0668 4.21719 16.6199C3.95833 16.1118 3.95833 15.4468 3.95833 14.1166V5.24998"
                  stroke="#4B5563"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Archive
            </button>
          </div>
        </div>
      </div>

      <ul className="mail-grid">
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
            <div className="btns">
              <button className="close-btn" onClick={closeEmail}>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 4.75L4.75 14.25M4.75 4.75L14.25 14.25"
                    stroke="#88909B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Close
              </button>
              <div className="action-btns">
                <button onClick={() => markAsUnread(selectedEmail.id)}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.58334 5.54167L8.04724 10.0664C8.57066 10.4328 8.83238 10.616 9.11705 10.687C9.36851 10.7496 9.63151 10.7496 9.88297 10.687C10.1676 10.616 10.4294 10.4328 10.9528 10.0664L17.4167 5.54167M5.38334 15.8333H13.6167C14.9468 15.8333 15.6119 15.8333 16.1199 15.5745C16.5668 15.3468 16.9301 14.9834 17.1578 14.5366C17.4167 14.0285 17.4167 13.3635 17.4167 12.0333V6.96667C17.4167 5.63654 17.4167 4.97148 17.1578 4.46344C16.9301 4.01656 16.5668 3.65323 16.1199 3.42553C15.6119 3.16667 14.9468 3.16667 13.6167 3.16667H5.38334C4.05322 3.16667 3.38816 3.16667 2.88012 3.42553C2.43323 3.65323 2.0699 4.01656 1.8422 4.46344C1.58334 4.97148 1.58334 5.63654 1.58334 6.96667V12.0333C1.58334 13.3635 1.58334 14.0285 1.8422 14.5366C2.0699 14.9834 2.43323 15.3468 2.88012 15.5745C3.38816 15.8333 4.05322 15.8333 5.38334 15.8333Z"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Unread
                </button>
                <button onClick={() => archiveEmail(selectedEmail.id)}>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 5.24998V4.61665C12.6667 3.7299 12.6667 3.28652 12.4941 2.94783C12.3423 2.6499 12.1001 2.40769 11.8022 2.25589C11.4635 2.08331 11.0201 2.08331 10.1333 2.08331H8.86667C7.97992 2.08331 7.53654 2.08331 7.19785 2.25589C6.89993 2.40769 6.65771 2.6499 6.50591 2.94783C6.33333 3.28652 6.33333 3.7299 6.33333 4.61665V5.24998M7.91667 9.60415V13.5625M11.0833 9.60415V13.5625M2.375 5.24998H16.625M15.0417 5.24998V14.1166C15.0417 15.4468 15.0417 16.1118 14.7828 16.6199C14.5551 17.0668 14.1918 17.4301 13.7449 17.6578C13.2369 17.9166 12.5718 17.9166 11.2417 17.9166H7.75833C6.42821 17.9166 5.76315 17.9166 5.25511 17.6578C4.80822 17.4301 4.44489 17.0668 4.21719 16.6199C3.95833 16.1118 3.95833 15.4468 3.95833 14.1166V5.24998"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
