// src/components/Archive.js
import React from 'react';
import '../Styles/Archive.css';

function Archive({ emails, selectedEmails }) {
  return (
    <div className="archive">
      <h2>Archive</h2>
      <ul className='email'>
        {emails.map(email => (
          <div className="archived"><li key={email.id}>
          <span>{email.subject}</span>
        </li></div>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
