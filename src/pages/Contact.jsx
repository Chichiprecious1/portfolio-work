import React from "react";

export default function Contact() {
  return (
    <section className="content-container container my-5">
      <div className="content text-center">
        <h1 className="mb-3">Let’s get in touch!</h1>
        <p className="text-muted mb-4">
          Email me directly or reach out on social — I’m open to front-end
          opportunities.
        </p>

        <div className="d-flex justify-content-center mb-4">
          <a
            href="mailto:mulibanatshilidzi11@gmail.com"
            className="btn btn-branding"
          >
            Email Me
          </a>
        </div>
        <a
          href="mailto:mulibanatshilidzi11@gmail.com?subject=Resume%20Request%20-%20Tshilidzi%20Mulibana"
          className="btn btn-branding-outline"
        >
          Request Resume
        </a>
      </div>
    </section>
  );
}
