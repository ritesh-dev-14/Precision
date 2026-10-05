import { clients } from "../data/clients";
import "../styles/inner-pages.css";
export default function Clients() {
  return (
    <div className="inner-page clients-profile">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our clients</p>
          <h1>
            Steel industry
            <br />
            <em>relationships.</em>
          </h1>
          <p>
            A selection of steel and industrial companies listed in our existing
            company records.
          </p>
        </div>
      </section>
      <section className="section clients-page">
        <div className="container">
          <div className="directory-intro">
            <p className="eyebrow">Selected clients</p>
            <p>Selected client directory</p>
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
