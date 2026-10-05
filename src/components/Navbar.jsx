import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

const links = [
  { path: "/products", label: "Products" },
  { path: "/#home-applications", label: "Applications" },
  { path: "/#home-engineering", label: "Engineering" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

// Clean Minimal Logo Mark
function MinimalLogoMark() {
  return (
    <div className="relative w-8 h-8 bg-slate-900 flex items-center justify-center shrink-0 rounded-sm">
      <svg
        className="w-4 h-4 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" className="opacity-40" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenOn, setMobileOpenOn] = useState(null);
  const mobileMenuButton = useRef(null);
  const location = useLocation();
  const mobileOpen = mobileOpenOn === location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return undefined;

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpenOn(null);
        mobileMenuButton.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#f4f4f1] border-b border-slate-200 py-3"
          : "bg-[#f4f4f1] border-b border-slate-200 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Mark */}
        <Link
          className="flex items-center gap-3 group cursor-pointer"
          to="/"
          onClick={() => setMobileOpenOn(null)}
        >
          <MinimalLogoMark />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-xs tracking-[0.2em] text-slate-900 uppercase group-hover:text-slate-600 transition-colors">
              PRECISION
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase mt-1 font-semibold">
              METALLURGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-4 lg:gap-7"
          aria-label="Main navigation"
        >
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => {
                const isSectionLink = path.startsWith("/#");
                const active =
                  isActive &&
                  (!isSectionLink || location.hash === path.slice(1));
                return `text-xs uppercase font-semibold tracking-wider transition-colors py-1 relative ${
                  active
                    ? "text-slate-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`;
              }}
                onClick={() => setMobileOpenOn(null)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA & Badge */}
        <div className="hidden lg:flex items-center gap-4">
        

          <Link
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-4 py-2 text-xs tracking-wider uppercase transition-colors"
            to="/contact"
          >
            <span className="text-white">Technical Enquiry</span>
            <ArrowUpRight size={14} className="text-white" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          ref={mobileMenuButton}
          className="lg:hidden flex min-h-11 min-w-11 items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() =>
            setMobileOpenOn(mobileOpen ? null : location.pathname)
          }
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="navigation-drawer lg:hidden absolute top-full left-0 w-full bg-[#f4f4f1] border-b border-slate-200 px-6 py-6">
          <nav id="mobile-navigation" className="flex flex-col" aria-label="Main navigation">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpenOn(null)}
                className={({ isActive }) => {
                  const isSectionLink = path.startsWith("/#");
                  const active =
                    isActive &&
                    (!isSectionLink || location.hash === path.slice(1));
                  return `text-xs uppercase font-medium tracking-wider min-h-11 flex items-center border-b border-slate-200 transition-colors ${
                    active ? "text-slate-900 font-bold" : "text-slate-600"
                  }`;
                }}
              >
                {label}
              </NavLink>
            ))}

            <div className="pt-3 space-y-3">
              

              <Link
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 text-xs font-semibold tracking-wider uppercase"
                to="/contact"
                onClick={() => setMobileOpenOn(null)}
              >
                <span className="text-white">Technical Enquiry</span>
                <ArrowUpRight size={15} className="text-white" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
