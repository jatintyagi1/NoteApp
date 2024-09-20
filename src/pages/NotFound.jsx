import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-dark">404</h1>
        <p className="lead text-muted">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
