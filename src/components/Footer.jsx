import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        {/* Call to action */}
        <div className="footer-cta d-none d-md-flex">
          <div>
            <h3 className="mb-1">Work Inquiry</h3>
            <p className="text-muted mb-0">
              Interested in working together? Let’s talk.
            </p>
          </div>
          <Link to="/contact" className="btn btn-branding">
            Contact Me
          </Link>
        </div>

        {/* Email */}
        <div className="footer-email">
          <a href="mailto:mulibanatshilidzi11@gmail.com">
            mulibanatshilidzi11@gmail.com
          </a>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/chichi_precious1/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram" />
          </a>

          <a
            href="https://github.com/Chichiprecious1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>

          <a
            href="https://www.facebook.com/tshilidziprecious.mulibana/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook" />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-note">
          Built by Tshilidzi Mulibana ·{" "}
          <a
            href="https://github.com/Chichiprecious1/portfolio-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
