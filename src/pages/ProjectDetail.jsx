import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container my-5">
        <h1 className="mb-3">Project not found</h1>
        <Link to="/work" className="btn btn-branding">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="container my-5">
      <Link to="/work" className="text-link">
        ← Back to Projects
      </Link>

      <div className="detail-hero mt-3">
        <div>
          <h1 className="mb-2">{project.title}</h1>
          <p className="text-muted mb-3">{project.subtitle}</p>

          <div className="detail-tech">
            {project.tech.map((t) => (
              <span key={t} className="skill">
                {t}
              </span>
            ))}
          </div>

          <div className="detail-actions mt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding-outline"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="detail-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="row mt-5 g-4">
        <div className="col-lg-6">
          <div className="detail-card">
            <h3 className="mb-2">Problem</h3>
            <p className="text-muted mb-0">{project.problem}</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="detail-card">
            <h3 className="mb-2">Solution</h3>
            <p className="text-muted mb-0">{project.solution}</p>
          </div>
        </div>

        <div className="col-12">
          <div className="detail-card">
            <h3 className="mb-3">Key Features</h3>
            <ul className="project-bullets mb-0">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
