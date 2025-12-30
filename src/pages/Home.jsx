import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container text-center">
          <p className="hero-kicker">👋🏾 Hello, I’m</p>
          <h1 className="hero-title">Tshilidzi Mulibana</h1>
          <p className="hero-subtitle">
            Front-end developer building clean, responsive interfaces with
            React, JavaScript, and APIs.
          </p>

          <div className="hero-cta">
            <Link to="/work" className="btn btn-branding">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-branding-outline">
              Contact
            </Link>
          </div>

          <div className="hero-badges">
            <span className="badge-pill">React</span>
            <span className="badge-pill">JavaScript</span>
            <span className="badge-pill">APIs</span>
            <span className="badge-pill">Responsive UI</span>
            <span className="badge-pill">Bootstrap</span>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="section-heading text-center">
          <h2>Featured Projects</h2>
          <p className="text-muted">
            A few projects that show my skills in UI, API integration, and
            real-world front-end workflows.
          </p>
        </div>

        {/* Featured list */}
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Weather App</h3>
            <p className="text-muted">
              API-powered weather search with a clean layout and responsive
              design.
            </p>
            <Link to="/work" className="text-link">
              See project details →
            </Link>
          </div>

          <div className="feature-card">
            <h3>Dictionary App</h3>
            <p className="text-muted">
              Word search experience with definitions, examples, and a polished
              UI.
            </p>
            <Link to="/work" className="text-link">
              See project details →
            </Link>
          </div>

          <div className="feature-card">
            <h3>Poem Generator App</h3>
            <p className="text-muted">
              Dynamic poem generator built with React, focusing on conditional
              logic, string manipulation, and responsive UI.
            </p>
            <Link to="/work" className="text-link">
              See project details →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
