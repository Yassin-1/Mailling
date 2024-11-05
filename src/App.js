// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import Inbox from './Components/Inbox.js';
import Archive from './Components/Archive.js';
import './Styles/App.css';

function App() {
  const [emails, setEmails] = useState([
    { id: 1, subject: "Wave hello with video, reactions and more now in huddles", read: false, archived: false, selected: false },
    { id: 2, subject: "We're thrilled that you want to join us in making a positive impact on the world of healthcare. We believe that building a caring and passionate team of entrepreneurs is key", read: false, archived: false, selected: false },
    { id: 3, subject: "1) That’s not an accident. - file - Existing File - two buttons for viewing the file", read: false, archived: false, selected: false },
    { id: 4, subject: "🚀 AI + Tailwind + React = The Ultimate Framework! Discover It Now file", read: false, archived: false, selected: false },
    { id: 5, subject: "🎁 From Envato to Yassine! Open 12 gifts inside... - file - Existing File - two buttons for viewing the file", read: false, archived: false, selected: false },
    { id: 6, subject: "Our newest updates make it easier to view and manage the participants you've invited to your study. Customize your applicant table view ", read: false, archived: false, selected: false },
    { id: 7, subject: "New 'Not yet invited' tab Launch your project now, invite participants later Easily invite a subset of participants Add more participants as needed", read: false, archived: false, selected: false },
    { id: 8, subject: "[JIRA] (LXQ-2604) Learning path - file - Existing File - two buttons for viewing the file", read: false, archived: false, selected: false },
    { id: 9, subject: "[JIRA] (LXQ-2604) Learning path - file - Existing File - two buttons for viewing the file", read: false, archived: false, selected: false },
    { id: 10, subject: "💥 Blank 2.7 is Here! 3200+ New Components for Effortless Webflow & Framer Designs!", read: false, archived: false, selected: false },
    { id: 11, subject: "[JIRA] (LXQ-2604) Learning path - file - Existing File - two buttons for viewing the file", read: false, archived: false, selected: false },
  ]);

  const inboxCount = emails.filter(email => !email.archived).length;
  const archiveCount = emails.filter(email => email.archived).length;
  const [activeTab, setActiveTab] = useState('inbox');

  const toggleSelectAll = () => {
    const allSelected = emails.every(email => email.selected);
    setEmails(emails.map(email => ({ ...email, selected: !allSelected })));
  };

  const archiveSelected = () => {
    setEmails(emails.map(email => (email.selected ? { ...email, archived: true } : email)));
  };

  const markSelectedAsRead = () => {
    setEmails(emails.map(email => (email.selected ? { ...email, read: true } : email)));
  };

  return (
    <Router>
      <div className="app">
        <Sidebar inboxCount={inboxCount} archiveCount={archiveCount} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Inbox
                  emails={emails.filter(email => !email.archived)}
                  toggleSelectAll={toggleSelectAll}
                  archiveSelected={archiveSelected}
                  markSelectedAsRead={markSelectedAsRead}
                  setEmails={setEmails}
                />
              }
            />
            <Route
              path="/archive"
              element={<Archive emails={emails.filter(email => email.archived)} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
