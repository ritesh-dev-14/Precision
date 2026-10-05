import { IMAGES } from "../config";
import { commitments, company, mission, vision } from "../data/company";

export default function About() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Precision Metallurgy</p>
          <h1>
            Rolling solutions built around
            <br />
            <em>quality, performance and reliability.</em>
          </h1>
          <p>
            Practical industry understanding, quality materials and a commitment
            to the performance of the mills we serve.
          </p>
        </div>
      </section>
      <section className="section about-page">
        <div className="container split-layout">
          <div className="image-frame">
            <img
              src={IMAGES.about}
              alt="Engineer working with industrial equipment"
            />
          </div>
          <div className="section-copy">
            <p className="eyebrow">Established {company.established}</p>
            <h2>
              A clear vision for
              <br />
              <em>better rolling.</em>
            </h2>
            <p>{company.intro}</p>
            <p>{company.supplier}</p>
            <p>{company.expertise}</p>
            <p>{company.understanding}</p>
            <p>{company.quality}</p>
            <p>{company.innovation}</p>
          </div>
        </div>
      </section>
      <section className="section dark-copy-section">
        <div className="container about-statement">
          <div>
            <p className="eyebrow eyebrow--light">Our vision</p>
            <h2>
              Looking further, with
              <br />
              <em>the mill in view.</em>
            </h2>
          </div>
          <p>{vision}</p>
        </div>
      </section>
      <section className="section mission-section">
        <div className="container">
          <div className="mission-intro">
            <p className="eyebrow">Our mission</p>
            <h2>
              Improvement that is
              <br />
              <em>measured in performance.</em>
            </h2>
            <p>{mission}</p>
          </div>
          <div className="commitments-grid">
            {commitments.map(([title, text], index) => (
              <article className="commitment" key={title}>
                <span className="item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
