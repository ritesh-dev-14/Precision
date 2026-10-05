import { ArrowUpRight } from "lucide-react";
import { contact, offices } from "../data/company";
export default function Contact() {
  return (
    <div className="inner-page">
      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="eyebrow">Let's talk</p>
          <h1>
            Discuss your rolling
            <br />
            <em>mill requirements with us.</em>
          </h1>
          <p>
            For product enquiries, technical requirements, procurement
            discussions or application-specific requirements, contact our team
            directly.
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
