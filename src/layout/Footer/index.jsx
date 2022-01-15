import React from 'react'

export default function index() {
  return (
    <footer className="page-footer green lighten-1" style={{paddingTop: 0}}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Artur Mavlidov
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/ArturMavlidov/React-films"
            target="_blank"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
