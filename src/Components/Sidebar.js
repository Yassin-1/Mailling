// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

function Sidebar({ inboxCount, archiveCount, activeTab, setActiveTab }) {
  return (
    <div className="sidebar">
      <Link
        to="/"
        onClick={() => setActiveTab("inbox")}
        className={`sidebar-item ${activeTab === "inbox" ? "active" : ""}`}
      >
        <span>Inbox</span>
        <span className="count">{inboxCount}</span>
      </Link>
      <Link
        to="/archive"
        onClick={() => setActiveTab("archive")}
        className={`sidebar-item ${activeTab === "archive" ? "active" : ""}`}
      >
        <span>Archive</span>
        <span className="count">{archiveCount}</span>
      </Link>
    </div>
  );
}

export default Sidebar;
