import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="container my-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <h1 className="mb-3">About Me</h1>
          <p className="lead text-muted">
            I’m Tshilidzi — a front-end developer who enjoys turning ideas into
            clean, responsive interfaces.
          </p>

          <p className="text-muted">
            I build with React, JavaScript, and API integration, focusing on
            usability, accessibility, and polished UI. I’m currently looking for
            junior front-end roles where I can grow, contribute, and ship real
            products.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <strong>What I’m good at: </strong>
              <span>UI building, responsiveness, clean layout & styling</span>
            </div>
            <div className="highlight">
              <strong>What I’m learning: </strong>
              <span>
                Deeper React patterns, optimization, real-world teamwork
              </span>
            </div>
            <div className="highlight">
              <strong>What I am: </strong>
              <span>Junior Front-end Developer • Internship • Freelance</span>
            </div>
          </div>

          <div className="d-flex gap-3 mt-4">
            <Link to="/work" className="btn btn-branding">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-branding-outline">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src="/images/tshilidzi.jpg"
            alt="Tshilidzi Mulibana"
            className="img-fluid rounded profile-photo"
          />
        </div>
      </div>

      <div className="skills-strip mt-5">
        <h3 className="mb-3">Skills</h3>
        <div className="skills">
          <span className="skill">React</span>
          <span className="skill">JavaScript (ES6) </span>
          <span className="skill">HTML5</span>
          <span className="skill">CSS3</span>
          <span className="skill">APIs + Axios</span>
          <span className="skill">Bootstrap</span>
          <span className="skill">Git + GitHub</span>
          <span className="skill">Netlify</span>
        </div>
      </div>
    </section>
  );
}
