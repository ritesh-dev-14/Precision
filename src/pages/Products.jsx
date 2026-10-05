import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { company, contact, portfolio } from "../data/company";
import { products, tungstenCarbideGrades } from "../data/products";
import TechnicalDocumentation from "../components/products/TechnicalDocumentation";
import "../styles/products.css";

export default function Products() {
  const [searchParams] = useSearchParams();
  const requestedProduct = searchParams.get("product");
  const initialProduct = products.find((product) => product.id === requestedProduct);
  const [selectedProductId, setSelectedProductId] = useState(
    initialProduct?.id || (requestedProduct ? null : products[0]?.id),
  );
  if (requestedProduct && !initialProduct) {
    return (
      <div className="products-page">
        <section className="products-container products-empty">
          <p className="products-label">Product catalogue</p>
          <h1>Product not found.</h1>
          <p>
            This product is not listed in the current catalogue. Contact us to
            discuss your requirements.
          </p>
          <Link className="products-button" to="/contact">
            Technical enquiry <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </section>
      </div>
    );
  }

  const selectedProduct =
    products.find((product) => product.id === selectedProductId);

  const selectProduct = (productId, scrollToDetails = false) => {
    setSelectedProductId(productId);
    if (scrollToDetails) {
      document
        .getElementById("technical-documentation")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!selectedProduct) {
    return (
      <div className="products-page">
        <section className="products-container products-empty">
          <p className="products-label">Product catalogue</p>
          <h1>Product information is currently unavailable.</h1>
          <p>Please contact us to discuss your rolling mill requirements.</p>
          <Link className="products-button" to="/contact">
            Contact us <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="products-container">
          <div className="products-hero__meta">
            <span>Rolling mill rolls &amp; components</span>
            <span>Product catalogue</span>
          </div>
          <div className="products-hero__layout">
            <div className="products-hero__copy">
              <p className="products-label">{company.name}</p>
              <h1>
                Rolls and components
                <br />
                <em>for demanding mills.</em>
              </h1>
              <p className="products-hero__intro">{company.intro}</p>
              <div className="products-hero__actions">
                <Link className="products-button" to="/contact">
                  Technical enquiry <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                <a className="products-text-link" href="#product-catalogue">
                  Browse product range <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className="products-hero__figure">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fetchPriority="high"
              />
              <figcaption>
                <span>{selectedProduct.name}</span>
                <span>{selectedProduct.category}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="products-catalogue" id="product-catalogue">
        <div className="products-container">
          <div className="products-section-heading">
            <div>
              <p className="products-label">Product index</p>
              <h2>Product range</h2>
            </div>
            <p>
              {company.supplier}
            </p>
          </div>
          <ol className="products-index">
            {portfolio.map((item, index) => {
              const product = products.find(
                (entry) => entry.id === item.productId,
              );
              const rowClass = `products-index__row${
                product?.id === selectedProductId
                  ? " products-index__row--selected"
                  : ""
              }`;

              return (
                <li key={item.name}>
                  {product ? (
                    <button
                      type="button"
                      className={rowClass}
                      onClick={() => selectProduct(product.id, true)}
                      aria-controls="technical-documentation"
                      aria-pressed={product.id === selectedProductId}
                    >
                      <span className="products-index__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="products-index__image">
                        {product.image && (
                          <img src={product.image} alt="" loading="lazy" />
                        )}
                      </span>
                      <span className="products-index__name">{item.name}</span>
                      <span className="products-index__description">
                        {product.category && <span>{product.category}</span>}
                        <span>
                          {product.shortDescription || product.description}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="products-index__arrow"
                        size={18}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      className={rowClass}
                      to="/contact"
                      aria-label={`Enquire about ${item.name}`}
                    >
                      <span className="products-index__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="products-index__image"
                        aria-hidden="true"
                      />
                      <span className="products-index__name">{item.name}</span>
                      <span className="products-index__description">
                        <span>Listed product portfolio</span>
                        <span>Contact us for product information.</span>
                      </span>
                      <ArrowUpRight
                        className="products-index__arrow"
                        size={18}
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <TechnicalDocumentation
        products={products}
        selectedProductId={selectedProductId}
        onSelectProduct={(productId) => selectProduct(productId)}
        tungstenCarbideGrades={tungstenCarbideGrades}
      />

      <section className="products-enquiry">
        <div className="products-container products-enquiry__layout">
          <div>
            <p className="products-label">Technical enquiry</p>
            <h2>
              Discuss your
              <br />
              <em>rolling requirements.</em>
            </h2>
          </div>
          <div className="products-enquiry__copy">
            <p>
              Get in touch with Precision Metallurgy to discuss your product
              requirements and rolling mill conditions.
            </p>
            <div className="products-enquiry__links">
              <a href={contact.emailLink}>{contact.email}</a>
              <a href={contact.phoneLink}>{contact.phone}</a>
            </div>
            <Link className="products-button products-button--light" to="/contact">
              Technical enquiry <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
