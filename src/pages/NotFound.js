import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import './NotFound.css';

const NotFound = () => {
  usePageTitle('Page Not Found');

  return (
    <div className="notfound-page">
      <div className="container notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-text">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
