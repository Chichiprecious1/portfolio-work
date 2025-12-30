import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const goodAt = [
    "Building responsive React UIs with clean component structure",
    "Translating designs into pixel-clean, accessible interfaces",
    "Working with REST APIs, async flows, and real data",
    "Styling with modern CSS + Bootstrap, focused on usability",
  ];

  const learning = [
    "Deeper React patterns (state, props, composition)",
    "Code quality (refactoring, reuse, readability)",
    "Performance basics (render efficiency, loading UX)",
  ];

  const roles = ["Junior Front-End Developer", "Internship", "Freelance"];

  return (
    <div className="container my-5">
      <h1 className="mb-3">About Me</h1>

      <p className="lead text-muted">
        I’m Tshilidzi — a front-end developer who builds clean, responsive
        interfaces with React, JavaScript, and API integration.
      </p>

      <p className="text-muted">
        I’m actively seeking junior front-end roles or internships where I can
        contribute to real products, learn from experienced teams, and grow
        fast.
      </p>

      <div className="about-highlights mt-4">
        <div className="highlight">
          <strong>Strengths</strong>
          <ul className="about-list">
            {goodAt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="highlight">
          <strong>Currently improving</strong>
          <ul className="about-list">
            {learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="highlight">
          <strong>Open to</strong>
          <p className="text-muted mb-0">{roles.join(" • ")}</p>
        </div>
      </div>

      <div className="mt-4 d-flex gap-3">
        <Link to="/work" className="btn btn-branding">
          View Projects
        </Link>
        <Link to="/contact" className="btn btn-branding-outline">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
