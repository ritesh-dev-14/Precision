import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company, contact, offices } from "../data/company";
import "../styles/footer.css";

const footerLinks = [
  { to: "/products", label: "Products" },
  { to: "/#home-applications", label: "Applications" },
  { to: "/#home-engineering", label: "Engineering" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__wordmark">
              <span>Precision Metallurgy</span>
              <span>India Private Limited</span>
            </Link>
            <p>{company.intro}</p>
          </div>

          <nav className="site-footer__navigation" aria-label="Footer navigation">
            <span className="site-footer__label">Navigate</span>
            {footerLinks.map(({ to, label }) => (
              <Link key={label} to={to}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__offices">
            <span className="site-footer__label">Offices</span>
            <div>
              <strong>Corporate office</strong>
              {offices.corporate.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div>
              <strong>Registered office</strong>
              {offices.registered.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>

          <div className="site-footer__contact">
            <span className="site-footer__label">Technical enquiry</span>
            <a href={contact.emailLink}>
              {contact.email} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={contact.phoneLink}>
              {contact.phone} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer__base">
          <span>
            © {new Date().getFullYear()} {company.name}
          </span>
          <span>Established {company.established}</span>
        </div>
      </div>
    </footer>
  );
}
