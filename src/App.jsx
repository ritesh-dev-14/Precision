import { ArrowUpRight } from "lucide-react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <section className="route-not-found">
      <p className="eyebrow">Page not found</p>
      <h1>This address is not available.</h1>
      <p>Explore the product catalogue or contact our team about your application.</p>
      <div>
        <Link className="button button--dark" to="/products">
          Explore products <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <Link className="text-link" to="/contact">
          Technical enquiry <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
