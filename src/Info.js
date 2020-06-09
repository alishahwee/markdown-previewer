import React from 'react';

function Info(props) {
  return (
    <div className="info">
      <span className="info__text">
        Built with{' '}
        <a href="https://reactjs.org/">
          React
          <i className="info__icon fab fa-react"></i>
        </a>
        and{' '}
        <a href="https://marked.js.org/#/README.md#README.md">
          Marked
          <i className="info__icon fab fa-markdown"></i>
        </a>
      </span>
      <br />
      <span className="info__text">
        Check me out on{' '}
        <a href="https://github.com/alishahwee">
          GitHub
          <i className="info__icon fab fa-github"></i>
        </a>
      </span>
    </div>
  );
}

export default Info;
