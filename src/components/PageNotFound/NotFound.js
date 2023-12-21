// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../PageNotFound/404.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for might be unavailable or does not exist.</p>
    </div>
  );
};

export default NotFound;
