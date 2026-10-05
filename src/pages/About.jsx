import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import industrialImage from "../assets/slide-1.webp";
import processImage from "../assets/slide-2.webp";
import {
  approach,
  commitments,
  company,
  companyValues,
  costPerTonneSequence,
  contact,
  focusAreas,
  offices,
  portfolio,
  vision,
  mission,
} from "../data/company";
import "../styles/about.css";

function SectionIndex({ number, label, light = false }) {
  return (
    <div className={`about-index${light ? " about-index--light" : ""}`}>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  const officeAddresses = [
    { name: "Corporate office", lines: offices.corporate },
    { name: "Registered office", lines: offices.registered },
  ];

  return (
    <div className="about-profile">
      <section className="about-hero">
        <div className="about-container about-hero__inner">
          <div className="about-hero__copy">
            <p className="about-kicker">{company.name}</p>
            <h1>
              Engineering performance
              <br />
              <span>into every pass.</span>
            </h1>
            <p className="about-hero__intro">{company.expertise}</p>
            <a className="about-scroll" href="#company-introduction">
              Explore our company <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>
          <figure className="about-hero__image">
            <img
              src={industrialImage}
              alt="Industrial metalworking in progress"
              fetchPriority="high"
            />
            <figcaption>
              <span>Precision Metallurgy India</span>
              <span>Established {company.established}</span>
            </figcaption>
          </figure>
          <div className="about-hero__foot" aria-hidden="true">
            <span>Rolling mill rolls &amp; components</span>
            <span>India · International markets</span>
          </div>
        </div>
      </section>

      <section
        className="about-section about-introduction"
        id="company-introduction"
      >
        <div className="about-container about-introduction__grid">
          <div className="about-introduction__heading">
            <SectionIndex number="01" label="Company introduction" />
            <h2>
              A specialized partner
              <br />
              <em>for rolling mills.</em>
            </h2>
          </div>
          <div className="about-prose">
            <p className="about-prose__lead">{company.intro}</p>
            <p>{company.supplier}</p>
          </div>
        </div>
      </section>

      <section className="about-section about-beyond">
        <div className="about-container">
          <div className="about-beyond__top">
            <div>
              <SectionIndex number="02" label="Our focus" light />
              <h2>
                Beyond supply.
                <br />
                <span>Focused on mill performance.</span>
              </h2>
            </div>
            <div className="about-beyond__copy">
              <p className="about-beyond__lead">{company.understanding}</p>
              <p>{company.quality}</p>
              <p>{company.innovation}</p>
            </div>
          </div>
          <div className="about-focus">
            <div className="about-focus__label">Areas of continuous focus</div>
            <div className="about-focus__items">
              {focusAreas.map((item, index) => (
                <span key={item}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-cost">
        <div className="about-container">
          <div className="about-cost__heading">
            <div>
              <SectionIndex number="03" label="Operating value" />
              <h2>
                The real measure
                <br />
                <em>is cost per tonne.</em>
              </h2>
            </div>
            <p>{company.quality}</p>
          </div>
          <ol className="about-cost__sequence">
            {costPerTonneSequence.map((step, index) => (
              <li key={step}>
                <span className="about-cost__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
                {index < costPerTonneSequence.length - 1 && (
                  <ArrowRight
                    className="about-cost__arrow"
                    size={16}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
          <p className="about-cost__note">{company.innovation}</p>
        </div>
      </section>

      <section className="about-section about-portfolio">
        <div className="about-container">
          <div className="about-portfolio__heading">
            <div>
              <SectionIndex number="04" label="Product portfolio" />
              <h2>
                Rolls for demanding
                <br />
                <em>hot rolling applications.</em>
              </h2>
            </div>
            <p>
              A broad product portfolio for TMT bar, wire rod, and hot rolling
              mills.
            </p>
          </div>
          <ol className="about-catalogue">
            {portfolio.map((item, index) => (
              <li key={item.name}>
                <span className="about-catalogue__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.image ? (
                  <img
                    className="about-catalogue__image"
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <span
                    className="about-catalogue__image about-catalogue__image--empty"
                    aria-hidden="true"
                  />
                )}
                <span className="about-catalogue__name">{item.name}</span>
                <ArrowUpRight
                  className="about-catalogue__arrow"
                  size={17}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>
          <Link className="about-text-link" to="/products">
            View product catalogue <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="about-section about-method">
        <div className="about-container">
          <div className="about-method__heading">
            <SectionIndex number="05" label="Engineering approach" />
            <h2>
              A cycle of
              <br />
              <em>continuous improvement.</em>
            </h2>
          </div>
          <div className="about-method__layout">
            <figure className="about-method__image">
              <img
                src={processImage}
                alt="Industrial metalworking with sparks"
                loading="lazy"
              />
              <figcaption>
                Product and application development informed by mill conditions
              </figcaption>
            </figure>
            <ol className="about-method__steps">
              {approach.map((step, index) => (
                <li key={step.name}>
                  <span className="about-method__step-number">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>
                      {step.name}
                      {index < approach.length - 1 && (
                        <ArrowRight size={16} aria-hidden="true" />
                      )}
                    </h3>
                    <p>{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="about-section about-vision">
        <div className="about-container">
          <SectionIndex number="06" label="Our vision" light />
          <p className="about-vision__statement">{vision}</p>
          <p className="about-vision__signature">
            Precision Metallurgy India Private Limited
          </p>
        </div>
      </section>

      <section className="about-section about-mission">
        <div className="about-container">
          <div className="about-mission__intro">
            <div>
              <SectionIndex number="07" label="Our mission" />
              <h2>
                Better productivity.
                <br />
                <em>Lower cost per tonne.</em>
              </h2>
            </div>
            <p>{mission}</p>
          </div>
          <ol className="about-commitments">
            {commitments.map(([title, text], index) => (
              <li key={title}>
                <span className="about-commitments__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section about-values">
        <div className="about-container about-values__layout">
          <div>
            <SectionIndex number="08" label="What we stand for" />
            <h2>
              Principles that
              <br />
              <em>guide the work.</em>
            </h2>
          </div>
          <ol>
            {companyValues.map((value, index) => (
              <li key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {value}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section about-reach">
        <div className="about-container about-reach__layout">
          <SectionIndex number="09" label="India to global" />
          <div>
            <p className="about-reach__display">
              India <span>→</span> International markets
            </p>
            <p>{company.reach}</p>
          </div>
          <div className="about-reach__rule" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="about-section about-details">
        <div className="about-container">
          <div className="about-details__heading">
            <SectionIndex number="10" label="Company details" />
            <h2>{company.name}</h2>
          </div>
          <div className="about-details__grid">
            <div className="about-details__established">
              <span>Established</span>
              <strong>{company.established}</strong>
            </div>
            <div className="about-details__contact">
              <span>Direct contact</span>
              <a href={contact.emailLink}>
                {contact.email} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a href={contact.phoneLink}>
                {contact.phone} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            {officeAddresses.map((office) => (
              <div className="about-details__address" key={office.name}>
                <span>{office.name}</span>
                <address>
                  {office.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container about-cta__inner">
          <SectionIndex number="11" label="Start a conversation" light />
          <h2>
            Let’s discuss your
            <br />
            <span>rolling application.</span>
          </h2>
          <div className="about-cta__bottom">
            <p>
              Contact our team to discuss your rolling mill requirements and
              technical enquiry.
            </p>
            <div className="about-cta__actions">
              <Link to="/products">
                Explore products <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link to="/contact">
                Contact engineering <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
