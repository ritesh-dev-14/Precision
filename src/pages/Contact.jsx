import { ArrowUpRight } from "lucide-react";
import { company, contact, offices } from "../data/company";
import "../styles/inner-pages.css";
export default function Contact() {
  return (
    <div className="inner-page contact-profile">
      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="eyebrow">{company.name}</p>
          <h1>
            Discuss your
            <br />
            <em>rolling requirements.</em>
          </h1>
          <p>
            {company.intro} Contact us to discuss product enquiries, technical
            requirements, procurement or your rolling application.
          </p>
        </div>
      </section>
      <section className="section contact-page">
        <div className="container">
          <div className="contact-methods">
            <a className="contact-method" href={contact.emailLink}>
              <span className="eyebrow">Email</span>
              <strong>{contact.email}</strong>
              <span>
                Send an Email <ArrowUpRight size={16} />
              </span>
            </a>
            <a className="contact-method" href={contact.phoneLink}>
              <span className="eyebrow">Phone</span>
              <strong>{contact.phone}</strong>
              <span>
                Call Our Team <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
          <div className="locations">
            <div>
              <p className="eyebrow">Registered office</p>
              {offices.registered.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div>
              <p className="eyebrow">Corporate office</p>
              {offices.corporate.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
