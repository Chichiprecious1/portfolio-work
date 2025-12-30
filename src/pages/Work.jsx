import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section className="container my-5">
      <h1 className="text-center mb-2">Projects</h1>
      <p className="text-center text-muted mb-5">
        Selected work focused on responsive UI, React, and API integration.
      </p>

      <div className="row">
        {projects.map((p) => (
          <div className="col-md-6 mb-4" key={p.slug}>
            <div className="project-card h-100">
              <img
                src={p.image}
                alt={p.title}
                className="img-fluid rounded mb-3"
              />

              <h3 className="mb-1">{p.title}</h3>
              <p className="text-muted mb-3">{p.subtitle}</p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="skill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto d-flex gap-2">
                <Link to={`/work/${p.slug}`} className="btn btn-primary btn-sm">
                  View details
                </Link>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
