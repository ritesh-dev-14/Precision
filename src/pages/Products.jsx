import { useState } from "react";
import { ArrowDown, ArrowUpRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { products, tungstenCarbideGrades } from "../data/products";
import waterCoolingImg from "../assets/Product/watercooling.png";

function ProductRow({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(
    product.specifications ? "specifications" : 
    (product.chemicalComposition || product.number === "01") ? "chemical" : "dimensions"
  );

  return (
    <div className="product-row-wrapper">
      <article
        className="product-row product-row--detail relative-row"
        id={`product-${product.number}`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
      >
        <span className="item-number">{product.number}</span>
        <div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        {product.characteristics ? (
          <ul className="product-features">
            {product.characteristics.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : (
          <span className="product-availability">
            Application-specific information available on request.
          </span>
        )}
        <span className="view-details">
          View Details {isExpanded ? <ChevronUp size={15} /> : <ArrowDown size={15} />}
        </span>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="product-hover-image"
          />
        )}
      </article>

      {isExpanded && (
        <div className="expanded-details" style={{ padding: "30px 0 40px", borderBottom: "1px solid var(--line)" }}>
          <div className="expanded-tabs" style={{ display: "flex", gap: "25px", marginBottom: "30px", borderBottom: "1px solid var(--line)" }}>
            {product.specifications && (
              <button
                onClick={() => setActiveTab("specifications")}
                style={{
                  background: "none", border: "none", padding: "0 0 15px", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontSize: "12px",
                  color: activeTab === "specifications" ? "var(--ink)" : "var(--muted)",
                  borderBottom: activeTab === "specifications" ? "2px solid var(--ink)" : "2px solid transparent",
                  fontWeight: activeTab === "specifications" ? "700" : "500",
                  marginBottom: "-1px"
                }}
              >
                Specifications
              </button>
            )}
            {(product.chemicalComposition || product.number === "01") && (
              <button
                onClick={() => setActiveTab("chemical")}
                style={{
                  background: "none", border: "none", padding: "0 0 15px", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontSize: "12px",
                  color: activeTab === "chemical" ? "var(--ink)" : "var(--muted)",
                  borderBottom: activeTab === "chemical" ? "2px solid var(--ink)" : "2px solid transparent",
                  fontWeight: activeTab === "chemical" ? "700" : "500",
                  marginBottom: "-1px"
                }}
              >
                Chemical Composition
              </button>
            )}
            <button
              onClick={() => setActiveTab("dimensions")}
              style={{
                background: "none", border: "none", padding: "0 0 15px", cursor: "pointer",
                fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontSize: "12px",
                color: activeTab === "dimensions" ? "var(--ink)" : "var(--muted)",
                borderBottom: activeTab === "dimensions" ? "2px solid var(--ink)" : "2px solid transparent",
                fontWeight: activeTab === "dimensions" ? "700" : "500",
                marginBottom: "-1px"
              }}
            >
              Dimensions
            </button>
            {product.applications && (
              <button
                onClick={() => setActiveTab("applications")}
                style={{
                  background: "none", border: "none", padding: "0 0 15px", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontSize: "12px",
                  color: activeTab === "applications" ? "var(--ink)" : "var(--muted)",
                  borderBottom: activeTab === "applications" ? "2px solid var(--ink)" : "2px solid transparent",
                  fontWeight: activeTab === "applications" ? "700" : "500",
                  marginBottom: "-1px"
                }}
              >
                Applications
              </button>
            )}
          </div>

          {activeTab === "specifications" && product.specifications && (
            <div className="specifications-data" style={{ padding: "10px 0" }}>
              {product.specifications.title && (
                <h4 style={{ color: "var(--ink)", marginBottom: "15px", fontSize: "16px", color: "#0ea5e9" }}>
                  {product.specifications.title}
                </h4>
              )}
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
                {product.specifications.description}
              </p>

              {product.specifications.properties && (
                <>
                  <h4 style={{ color: "var(--ink)", marginBottom: "15px", fontSize: "15px" }}>Physical Properties</h4>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Property</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specifications.properties.map((prop, idx) => (
                          <tr key={idx}>
                            <td>{prop.label}</td>
                            <td>{prop.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {product.specifications.grades && (
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Grade</th>
                        <th>Wc (%)</th>
                        <th>Co(%) Ni(%) Cr(%)</th>
                        <th>G/cm³</th>
                        <th>≥HRA</th>
                        <th>≥N/mm²</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.grades.map((row, idx) => (
                        <tr key={idx}>
                          {row.map((value, i) => (
                            <td key={i}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === "chemical" && (
            <div className="technical-data">
              <div className="technical-heading">
                <h3 style={{ margin: "0", fontSize: "18px" }}>Chemical Composition</h3>
              </div>
              <div className="table-scroll">
                <table>
                  <thead>
                    {product.number === "02" ? (
                      <tr>
                        <th>Material</th>
                        <th>Category</th>
                        <th>Hardness</th>
                        <th>C%</th>
                        <th>Si%</th>
                        <th>Mn%</th>
                        <th>V%</th>
                        <th>Cr%</th>
                        <th>Ni%</th>
                        <th>Mo%</th>
                        <th>W%</th>
                        <th>Density</th>
                      </tr>
                    ) : product.number === "04" ? (
                      <tr>
                        <th>Element</th>
                        <th>Percentage</th>
                      </tr>
                    ) : (
                      <tr>
                        <th>Grade</th>
                        <th>Wc (%)</th>
                        <th>Co/Ni/Cr (%)</th>
                        <th>G/cm³</th>
                        <th>≥HRA</th>
                        <th>≥N/mm²</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {product.number === "01" ? (
                      tungstenCarbideGrades.map((row) => (
                        <tr key={row[0]}>
                          {row.map((value, index) => (
                            <td key={`${row[0]}-${index}`}>{value}</td>
                          ))}
                        </tr>
                      ))
                    ) : product.chemicalComposition ? (
                      product.chemicalComposition.map((row, idx) => (
                        <tr key={idx}>
                          {row.map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="12" style={{ textAlign: "center", padding: "30px", color: "var(--muted)" }}>
                          Data not available for this product.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "dimensions" && (
            <div className="dimension-content" style={{ padding: "10px 0" }}>
              <div className="dimension-note" style={{ marginTop: "0", paddingTop: "0", borderTop: "none" }}>
                <p className="eyebrow">Dimensions and Tolerances</p>
                <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "6px", border: "1px solid #bae6fd", marginTop: "15px" }}>
                  <p style={{ color: "#0ea5e9", margin: "0", fontSize: "14px", fontWeight: "500" }}>
                    We can supply {product.number === "05" ? "Reels" : "Rolls"} according to the drawings provided by the customer.
                  </p>
                </div>
                <Link className="text-link" style={{ marginTop: "20px" }} to="/contact">
                  Request Product Information <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "applications" && product.applications && (
            <div className="applications-data" style={{ padding: "10px 0" }}>
              <h4 style={{ color: "var(--ink)", marginBottom: "15px", fontSize: "15px", color: "#0ea5e9" }}>
                Instructions for Using HSS Roll at RMS
              </h4>
              <ul style={{ paddingLeft: "20px", color: "var(--muted)", fontSize: "13px", lineHeight: "1.8" }}>
                {product.applications.instructions.map((inst, idx) => (
                  <li key={idx} style={{ marginBottom: "8px" }}>{inst}</li>
                ))}
              </ul>
              <div style={{ background: "#f0f9ff", padding: "15px", borderRadius: "6px", border: "1px solid #bae6fd", margin: "20px 0" }}>
                <p style={{ color: "#0ea5e9", margin: "0", fontSize: "12px" }}>
                  Note: {product.applications.note}
                </p>
              </div>
              <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <img src={waterCoolingImg} alt="Water Cooling System Diagram" style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--line)" }} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  return (
    <div className="inner-page">
      <section className="page-hero product-hero">
        <div className="container">
          <p className="eyebrow">Products / Rolling mill solutions</p>
          <h1>
            Products engineered for
            <br />
            <em>demanding rolling environments.</em>
          </h1>
          <p>
            Precision Metallurgy India Private Limited supplies rolling mill
            products selected for demanding steel production environments, with
            a focus on quality, application suitability and reliable
            performance.
          </p>
        </div>
      </section>
      <section className="section products-catalogue">
        <div className="container products-catalogue-grid">
          <aside className="product-nav">
            <p className="eyebrow">The range</p>
            <nav aria-label="Product categories">
              {products.map((product) => (
                <a href={`#product-${product.number}`} key={product.number}>
                  <span>{product.number}</span>
                  {product.name}
                </a>
              ))}
            </nav>
          </aside>
          <div className="catalogue-content">
            <div className="product-list product-list--catalogue">
              {products.map((product) => (
                <ProductRow key={product.number} product={product} />
              ))}
            </div>
            <Link className="text-link" to="/contact">
              Discuss Your Requirement <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="enquiry product-enquiry">
        <div className="container enquiry-inner">
          <div>
            <p className="eyebrow eyebrow--light">Product enquiries</p>
            <h2>
              Need help selecting
              <br />
              <em>the right product?</em>
            </h2>
            <p>
              Share your rolling conditions and product requirements with our
              team.
            </p>
          </div>
          <Link className="button button--outline-light" to="/contact">
            Send an Enquiry <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
