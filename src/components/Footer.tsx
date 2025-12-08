import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-text">
            Hey, I'm Moorelanguages and I made this game with a fork via The-CodingSloth and his "brainrot-games":
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a
              href="https://github.com/The-CodingSloth/brainrot-games"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Coding Sloth's Github Repository"
            >
              Coding Sloth's Github Repository
            </a>
            <a
              href="https://github.com/moorelanguage"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="My GitHub repository"
            >
              My GitHub Repository
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
