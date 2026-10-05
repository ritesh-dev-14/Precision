import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import steelPour from "../../assets/slide-3.webp";
import { products as productCatalog } from "../../data/products";
import {
  applications,
  approach,
  company,
  companyValues,
  commitments,
  costPerTonneSequence,
  contact,
  materialFocusAreas,
  performancePrinciples,
  materialSystems,
  portfolio,
  vision,
} from "../../data/company";
import "../../styles/home.css";

const productHref = (productId) =>
  productId
    ? `/products?product=${encodeURIComponent(productId)}#technical-documentation`
    : "/contact";

function HomeIndex({ number, label, light = false }) {
  return (
    <div className={`home-index${light ? " home-index--light" : ""}`}>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="home-hero">
      <div className="home-container">
        <div className="home-hero__meta">
          <span>{company.name}</span>
          <span>Est. {company.established}</span>
        </div>
        <div className="home-hero__composition">
          <div className="home-hero__copy">
            <h1>
              Engineered for
              <br />
              demanding
              <br />
              <span>rolling conditions.</span>
            </h1>
            <p>
              {company.intro}
            </p>
            <div className="home-hero__actions">
              <Link className="home-button home-button--light" to="/contact">
                Technical enquiry <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link className="home-hero__secondary" to="/products">
                Explore products
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <figure className="home-hero__image">
            <img
              src={steelPour}
              alt="Molten steel moving through a steelmaking process"
              fetchPriority="high"
            />
            <figcaption>
              <span>Precision Metallurgy India</span>
              <span>Rolling mill applications</span>
            </figcaption>
            <span className="home-hero__image-index" aria-hidden="true">
              PM / 01
            </span>
          </figure>
        </div>
        <div className="home-hero__base">
          <span>Rolls &amp; rolling mill components</span>
          <a href="#home-positioning">
            Scroll to explore <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CompanyPositioning() {
  return (
    <section className="home-section home-positioning" id="home-positioning">
      <div className="home-container home-positioning__grid">
        <HomeIndex number="01" label="Company positioning" />
        <h2>
          Beyond supply.
          <br />
          <em>Focused on mill performance.</em>
        </h2>
        <div className="home-positioning__copy">
          <p className="home-lead">{company.understanding}</p>
          <p>{company.expertise}</p>
        </div>
      </div>
    </section>
  );
}

function CostPerTonne() {
  const costCommitment = commitments.find(
    ([title]) => title === "Reducing Cost per Tonne",
  );

  return (
    <section className="home-section home-cost">
      <div className="home-container">
        <div className="home-cost__heading">
          <div>
            <HomeIndex number="02" label="Operating value" light />
            <h2>
              The real measure
              <br />
              <span>is cost per tonne.</span>
            </h2>
          </div>
          <div className="home-cost__copy">
            <p>{costCommitment?.[1]}</p>
            <p>{company.innovation}</p>
          </div>
        </div>
        <ol className="home-cost__sequence">
          {costPerTonneSequence.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < costPerTonneSequence.length - 1 && (
                <ArrowDown
                  size={15}
                  className="home-cost__arrow"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
        <div className="home-cost__foot">
          <span>Operating performance</span>
          <span>Purchase price is only one part of value</span>
        </div>
      </div>
    </section>
  );
}

function ProductCatalogue() {
  return (
    <section className="home-section home-products" id="home-products">
      <div className="home-container">
        <div className="home-products__heading">
          <div>
            <HomeIndex number="03" label="Product portfolio" />
            <h2>
              Rolls and components
              <br />
              <em>engineered for the mill.</em>
            </h2>
          </div>
          <p>{company.supplier}</p>
        </div>
        <ol className="home-product-index">
          {portfolio.map((item, index) => {
            const product = productCatalog.find(
              ({ id }) => id === item.productId,
            );
            return (
              <li key={item.name}>
                <Link
                  to={productHref(item.productId)}
                  aria-label={`${item.name}${product ? ` — ${product.category}` : " — enquire"}`}
                >
                  <span className="home-product-index__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-product-index__image">
                    {item.image && <img src={item.image} alt="" loading="lazy" />}
                  </span>
                  <span className="home-product-index__detail">
                    <strong>{item.name}</strong>
                    {item.category && <small>{item.category}</small>}
                  </span>
                  <span className="home-product-index__action">
                    {product ? "View product" : "Enquire"}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="home-products__end">
          <Link className="home-text-link" to="/products">
            Explore the product catalogue
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <span>TC · Composite · HSS · SGI · Adamite · Pinch · Guide</span>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section
      className="home-section home-applications"
      id="home-applications"
    >
      <div className="home-container">
        <div className="home-applications__heading">
          <div>
            <HomeIndex number="04" label="Applications" />
            <h2>
              Built around
              <br />
              <em>rolling applications.</em>
            </h2>
          </div>
          <p>{company.intro}</p>
        </div>
        <ol className="home-application-index">
          {applications.map((application, index) => (
            <li key={application.name}>
              <span className="home-application-index__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{application.name}</h3>
              <div className="home-application-index__products">
                {application.productIds.map((productId) => {
                  const product = productCatalog.find(
                    ({ id }) => id === productId,
                  );
                  if (!product) return null;
                  return (
                    <Link
                      key={productId}
                      to={productHref(productId)}
                      aria-label={`View ${product.name}`}
                    >
                      {product.name}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section className="home-section home-materials" id="home-materials">
      <div className="home-container">
        <div className="home-materials__heading">
          <HomeIndex number="05" label="Metallurgy & materials" />
          <h2>
            Materials matter.
            <br />
            <em>Application matters more.</em>
          </h2>
        </div>
        <div className="home-materials__layout">
          <div className="home-materials__visual">
            <div className="home-materials__frame">
              <img
                src={materialSystems[0]?.image}
                alt={
                  productCatalog.find(
                    ({ id }) => id === materialSystems[0]?.productId,
                  )?.name ?? ""
                }
                loading="lazy"
              />
              <span className="home-materials__crosshair" aria-hidden="true" />
              <span className="home-materials__caption">
                {materialSystems[0]?.name}
              </span>
            </div>
            <p>{company.quality}</p>
          </div>
          <div className="home-materials__catalogue">
            <span className="home-micro-label">Material systems in portfolio</span>
            <ol>
              {materialSystems.map((material, index) => (
                <li key={material.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{material.name}</strong>
                  {material.category && <small>{material.category}</small>}
                </li>
              ))}
            </ol>
            <div className="home-materials__focus">
              <span className="home-micro-label">Development focus</span>
              <div>
                {materialFocusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngineeringApproach() {
  return (
    <section
      className="home-section home-engineering"
      id="home-engineering"
    >
      <div className="home-container">
        <div className="home-engineering__heading">
          <div>
            <HomeIndex number="06" label="Engineering approach" light />
            <h2>
              Understand the mill.
              <br />
              <span>Improve the outcome.</span>
            </h2>
          </div>
          <p>{company.understanding}</p>
        </div>
        <ol className="home-approach">
          {approach.map((step, index) => (
            <li key={step.name}>
              <span className="home-approach__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="home-approach__body">
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
              </div>
              {index < approach.length - 1 && (
                <ArrowRight
                  className="home-approach__arrow"
                  size={17}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
        <div className="home-engineering__foot">
          <span>Operating conditions</span>
          <span>Material &amp; product development</span>
          <span>Performance data</span>
          <span>Continuous improvement</span>
        </div>
      </div>
    </section>
  );
}

function PerformancePhilosophy() {
  return (
    <section className="home-section home-philosophy">
      <div className="home-container home-philosophy__layout">
        <HomeIndex number="07" label="Performance philosophy" />
        <div className="home-philosophy__statement">
          {performancePrinciples.map((principle) => (
            <span key={principle}>{principle}.</span>
          ))}
        </div>
        <p>{company.innovation}</p>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="home-section home-vision">
      <div className="home-container home-vision__layout">
        <HomeIndex number="08" label="Our vision" />
        <h2>
          A globally trusted
          <br />
          <em>technical partner.</em>
        </h2>
        <p>{vision}</p>
      </div>
    </section>
  );
}

function IndiaToGlobal() {
  return (
    <section className="home-section home-global">
      <div className="home-container home-global__layout">
        <HomeIndex number="09" label="India to global" />
        <div className="home-global__copy">
          <h2>
            India <span>→</span> International markets
          </h2>
          <p>{company.reach}</p>
        </div>
        <div className="home-global__rule" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}

function WhyPrecision() {
  return (
    <section className="home-section home-principles">
      <div className="home-container home-principles__layout">
        <div>
          <HomeIndex number="10" label="Why Precision Metallurgy" />
          <h2>
            Technical understanding
            <br />
            <em>behind every roll.</em>
          </h2>
        </div>
        <ol>
          {companyValues.map((principle, index) => (
            <li key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {principle}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TechnicalEnquiry() {
  return (
    <section className="home-section home-enquiry">
      <div className="home-container">
        <HomeIndex number="11" label="Technical enquiry" light />
        <h2>
          Let’s discuss
          <br />
          <span>your rolling application.</span>
        </h2>
        <div className="home-enquiry__bottom">
          <p>
            Contact our team to discuss your product requirements and rolling
            conditions.
          </p>
          <div className="home-enquiry__actions">
            <Link className="home-button home-button--light" to="/contact">
              Technical enquiry <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link className="home-button home-button--outline" to="/products">
              Explore products <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="home-enquiry__contact">
          <a href={contact.emailLink}>{contact.email}</a>
          <a href={contact.phoneLink}>{contact.phone}</a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="home-profile">
      <Hero />
      <div>
        <CompanyPositioning />
        <CostPerTonne />
        <ProductCatalogue />
        <Applications />
        <Materials />
        <EngineeringApproach />
        <PerformancePhilosophy />
        <Vision />
        <IndiaToGlobal />
        <WhyPrecision />
        <TechnicalEnquiry />
      </div>
    </div>
  );
}
