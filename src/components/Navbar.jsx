// import { useEffect, useState } from "react";
// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { NavLink, Link } from "react-router-dom";

// const links = [
//   ["/products", "Products"],
//   ["/about", "About"],
//   ["/clients", "Clients"],
//   ["/contact", "Contact"],
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 36);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
//       <Link className="wordmark" to="/" onClick={() => setOpen(false)}>
//         <span>PRECISION</span>
//         <span>METALLURGY</span>
//       </Link>
//       <nav
//         className={`nav-links ${open ? "nav-links--open" : ""}`}
//         aria-label="Main navigation"
//       >
//         {links.map(([path, label]) => (
//           <NavLink key={path} to={path} onClick={() => setOpen(false)}>
//             {label}
//           </NavLink>
//         ))}
//         <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
//           Sales Enquiry <ArrowUpRight size={16} />
//         </Link>
//       </nav>
//       <button
//         className="menu-toggle"
//         onClick={() => setOpen(!open)}
//         aria-label={open ? "Close menu" : "Open menu"}
//       >
//         {open ? <X /> : <Menu />}
//       </button>
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const links = [
  ["/products", "Products"],
  ["/about", "About"],
  ["/clients", "Clients"],
  ["/contact", "Contact"],
];

// Brushed Steel Precision Logo Component
function LogoMark() {
  return (
    <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full shadow-md flex items-center justify-center border border-slate-300"
        style={{
          background: "radial-gradient(circle at 35% 30%, #e2e8f0 0%, #cbd5e1 35%, #94a3b8 70%, #64748b 100%)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 5px rgba(0,0,0,0.15)"
        }}
      >
        <div className="w-6 h-6 rounded-full bg-[#0a0f1d] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-[18px] h-[18px] rounded-full border border-sky-400/80" />
          <div className="absolute w-[10px] h-[10px] rounded-full border border-sky-400/90" />
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <div className="absolute w-full h-[1px] bg-sky-400/70" />
          <div className="absolute h-full w-[1px] bg-sky-400/70" />
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand / Logo */}
        <Link
          className="flex items-center gap-3.5 group cursor-pointer"
          to="/"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <div className="flex flex-col leading-tight">
            <span className="font-black text-sm tracking-[0.18em] text-[#0284c7] group-hover:text-sky-700 transition-colors">
              PRECISION
            </span>
            <span className="font-extrabold text-[12px] tracking-[0.24em] text-[#1e40af] -mt-0.5">
              METALLURGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-xs uppercase font-bold tracking-widest transition-colors py-1 relative ${isActive
                  ? "text-[#0284c7] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0284c7]"
                  : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA & Badges */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 border border-sky-100 rounded text-[11px] font-mono text-sky-800">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>ISO 9001:2015</span>
          </div>

          <Link
            className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2.5 rounded text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Sales Enquiry <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wider uppercase py-2 border-b border-slate-100 ${isActive ? "text-[#0284c7]" : "text-slate-700"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Link
                className="w-full flex items-center justify-center gap-2 bg-[#0284c7] text-white py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-sm"
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Sales Enquiry <ArrowUpRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
