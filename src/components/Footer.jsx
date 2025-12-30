import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      <div className="contact-box justify-content-between mb-5 d-none d-md-flex">
        <div>
          <h3>Work Inquiry</h3>
          <p className="text-muted">Let’s work together</p>
        </div>
        <div>
          <Link to="/contact" className="btn btn-branding" title="Contact me">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <a href="mailto:mulibanatshilidzi11@gmail.com" className="email-link">
          mulibanatshilidzi11@gmail.com
        </a>
      </div>

      <div className="social-links d-flex justify-content-center gap-3">
        <a
          href="https://www.instagram.com/chichi_precious1/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://github.com/Chichiprecious1"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.facebook.com/tshilidziprecious.mulibana/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>

      <p className="text-center mt-4 text-muted">
        👩🏾‍💻 This project was coded by Tshilidzi Mulibana, and is{" "}
        <a
          href="https://github.com/Chichiprecious1/portfolio-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </p>
    </footer>
  );
}
