import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-container">
      <Card>
        <h1 className="err-h1"> 404 Error.</h1>
        <p className="err-p"> We can't find the page you're looking for.</p>
        <button className="err-button">
          <Link to="/">Go Home</Link>
        </button>
      </Card>
    </div>
  );
};

export default Error;
