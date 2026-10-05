import { clients } from "../data/clients";
export default function Clients() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our clients</p>
          <h1>
            Trusted by steel and
            <br />
            <em>industrial companies across India.</em>
          </h1>
          <p>
            Our client relationships are grounded in reliable supply, technical
            understanding and a shared focus on mill performance.
          </p>
        </div>
      </section>
      <section className="section clients-page">
        <div className="container">
          <div className="directory-intro">
            <p className="eyebrow">Selected clients</p>
            <p>Companies we have supplied / worked with.</p>
          </div>
          <div className="client-grid client-grid--full">
            {clients.map((client, index) => (
              <div className="client-name" key={client}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
