import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

const links = [
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/clients", label: "Clients" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 select-none ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs py-3"
          : "bg-white border-b border-slate-200 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Mark */}
        <Link
          className="flex items-center gap-3 group cursor-pointer"
          to="/"
          onClick={() => setMobileOpen(false)}
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
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-xs uppercase font-semibold tracking-wider transition-colors py-1 relative ${
                  isActive
                    ? "text-slate-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA & Badge */}
        <div className="hidden md:flex items-center gap-4">
        

          <Link
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded-sm text-xs tracking-wider uppercase transition-colors"
            to="/contact"
          >
            <span className="text-white">Sales Enquiry</span>
            <ArrowUpRight size={14} className="text-white" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-1.5 text-slate-700 hover:bg-slate-100 rounded-sm transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 px-6 py-6 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-xs uppercase font-medium tracking-wider py-2 border-b border-slate-100 transition-colors ${
                    isActive ? "text-slate-900 font-bold" : "text-slate-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="pt-3 space-y-3">
              

              <Link
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-sm text-xs font-semibold tracking-wider uppercase"
                to="/contact"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-white">Sales Enquiry</span>
                <ArrowUpRight size={15} className="text-white" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
