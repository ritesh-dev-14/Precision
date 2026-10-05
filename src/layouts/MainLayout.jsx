import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const pageMetadata = {
  "/": {
    title: "Precision Metallurgy India | Rolling Mill Rolls & Components",
    description:
      "High-performance rolls and rolling mill components for TMT bar, wire rod and hot rolling applications.",
  },
  "/products": {
    title: "Rolling Mill Rolls & Components | Precision Metallurgy India",
    description:
      "Explore TC rings, composite rolls, HSS rolls, SGI rolls, Adamite rolls, pinch rolls, guide rolls and other rolls from Precision Metallurgy India.",
  },
  "/about": {
    title: "About Precision Metallurgy India | Rolling Mill Engineering",
    description:
      "Learn about Precision Metallurgy India's focus on mill performance, application engineering and long-term operating value.",
  },
  "/contact": {
    title: "Technical Enquiry | Precision Metallurgy India",
    description:
      "Contact Precision Metallurgy India about rolling mill rolls, components and your TMT, wire rod or hot rolling requirements.",
  },
  "/clients": {
    title: "Selected Clients | Precision Metallurgy India",
    description:
      "View the selected steel and industrial companies listed in Precision Metallurgy India's client directory.",
  },
  "*": {
    title: "Page Not Found | Precision Metallurgy India",
    description:
      "This page could not be found. Explore Precision Metallurgy India's product catalogue or contact the company.",
  },
};

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata["*"];
    const shareUrl = new URL(pathname, window.location.origin).href;
    const shareImage = new URL("/tungsten-ring.png", window.location.origin).href;
    document.title = metadata.title;
    const values = [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[property="og:url"]', shareUrl],
      ['meta[property="og:image"]', shareImage],
      ['meta[property="og:image:alt"]', "Industrial metalworking in progress"],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
      ['meta[name="twitter:image"]', shareImage],
    ];
    for (const [selector, content] of values) {
      document.querySelector(selector)?.setAttribute("content", content);
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
