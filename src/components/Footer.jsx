// // import { ArrowUpRight } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { CONTACT, offices } from "../config";

// // export default function Footer() {
// //   return (
// //     <footer className="footer">
// //       <div className="footer-grid container">
// //         <div className="footer-brand">
// //           <Link className="wordmark wordmark--dark" to="/">
// //             <span>PRECISION</span>
// //             <span>METALLURGY</span>
// //           </Link>
// //           <p>
// //             High-performance rolling mill products and technical solutions for
// //             the steel industry.
// //           </p>
// //         </div>
// //         <div>
// //           <p className="footer-label">Navigate</p>
// //           <div className="footer-links">
// //             <Link to="/products">Products</Link>
// //             <Link to="/about">About</Link>
// //             <Link to="/clients">Clients</Link>
// //             <Link to="/contact">Contact</Link>
// //           </div>
// //         </div>
// //         <div>
// //           <p className="footer-label">Our offices</p>
// //           <p className="address">
// //             <strong>REGISTERED OFFICE:</strong>
// //             {offices.registered.map((line) => (
// //               <span key={line}>{line}</span>
// //             ))}
// //           </p>
// //           <p className="address">
// //             <strong>CORPORATE OFFICE:</strong>
// //             {offices.corporate.map((line) => (
// //               <span key={line}>{line}</span>
// //             ))}
// //           </p>
// //         </div>
// //         <div>
// //           <p className="footer-label">Contact</p>
// //           <a className="footer-contact" href={CONTACT.emailLink}>
// //             {CONTACT.email}
// //             <ArrowUpRight size={15} />
// //           </a>
// //           <a className="footer-contact" href={CONTACT.phoneLink}>
// //             {CONTACT.phone}
// //             <ArrowUpRight size={15} />
// //           </a>
// //         </div>
// //       </div>
// //       <div className="footer-bottom container">
// //         <span>© 2026 Precision Metallurgy India Private Limited</span>
// //         <span>Privacy / Terms</span>
// //       </div>
// //     </footer>
// //   );
// // }


// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { CONTACT, offices } from "../config";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-grid container">
//         <div className="footer-brand">
//           <Link className="wordmark wordmark--dark" to="/">
//             <span>PRECISION</span>
//             <span>METALLURGY</span>
//           </Link>
//           <p>
//             High-performance rolling mill products and technical solutions for
//             the steel industry.
//           </p>
//         </div>
//         <div>
//           <p className="footer-label">Navigate</p>
//           <div className="footer-links">
//             <Link to="/products">Products</Link>
//             <Link to="/about">About</Link>
//             <Link to="/clients">Clients</Link>
//             <Link to="/contact">Contact</Link>
//           </div>
//         </div>
//         <div>
//           <p className="footer-label">Our offices</p>
//           <p className="address">
//             <strong>REGISTERED OFFICE:</strong>
//             {offices.registered.map((line) => (
//               <span key={line}>{line}</span>
//             ))}
//           </p>
//           <p className="address">
//             <strong>CORPORATE OFFICE:</strong>
//             {offices.corporate.map((line) => (
//               <span key={line}>{line}</span>
//             ))}
//           </p>
//         </div>
//         <div>
//           <p className="footer-label">Contact</p>
//           <a className="footer-contact" href={CONTACT.emailLink}>
//             {CONTACT.email}
//             <ArrowUpRight size={15} />
//           </a>
//           <a className="footer-contact" href={CONTACT.phoneLink}>
//             {CONTACT.phone}
//             <ArrowUpRight size={15} />
//           </a>
//         </div>
//       </div>
//       <div className="footer-bottom container">
//         <span>© 2026 Precision Metallurgy India Private Limited</span>
//         <span>Privacy / Terms</span>
//       </div>
//     </footer>
//   );
// }




import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CONTACT, offices } from "../config";

// Reusable Framer Motion variant for a smooth stagger fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// Mini version of the brushed steel logo for the footer
function FooterLogoMark() {
  return (
    <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-full shadow-sm flex items-center justify-center border border-slate-300"
        style={{
          background: "radial-gradient(circle at 35% 30%, #e2e8f0 0%, #cbd5e1 35%, #94a3b8 70%, #64748b 100%)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 5px rgba(0,0,0,0.1)"
        }}
      >
        <div className="w-5 h-5 rounded-full bg-[#0a0f1d] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-[14px] h-[14px] rounded-full border border-sky-400/80" />
          <div className="absolute w-[8px] h-[8px] rounded-full border border-sky-400/90" />
          <div className="w-1 h-1 rounded-full bg-sky-400" />
          <div className="absolute w-full h-[1px] bg-sky-400/70" />
          <div className="absolute h-full w-[1px] bg-sky-400/70" />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-20 pb-8 px-6 sm:px-12 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={0}
            className="lg:col-span-4 pr-0 lg:pr-8"
          >
            <Link className="flex items-center gap-3 mb-6 group w-fit" to="/">
              <FooterLogoMark />
              <div className="flex flex-col leading-tight">
                <span className="font-black text-sm tracking-[0.18em] text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  PRECISION
                </span>
                <span className="font-extrabold text-[12px] tracking-[0.24em] text-slate-500 -mt-0.5 group-hover:text-slate-700 transition-colors">
                  METALLURGY
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
              High-performance rolling mill products and technical solutions engineered for continuous production and maximum uptime in the steel industry.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={1}
            className="lg:col-span-2"
          >
            <p className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-6">
              Navigate
            </p>
            <div className="flex flex-col space-y-3.5 text-sm font-semibold text-slate-600">
              <Link to="/products" className="hover:text-[#0284c7] transition-colors w-fit">Products</Link>
              <Link to="/about" className="hover:text-[#0284c7] transition-colors w-fit">About</Link>
              <Link to="/clients" className="hover:text-[#0284c7] transition-colors w-fit">Clients</Link>
              <Link to="/contact" className="hover:text-[#0284c7] transition-colors w-fit">Contact</Link>
            </div>
          </motion.div>

          {/* Offices Column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={2}
            className="lg:col-span-3"
          >
            <p className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-6">
              Our Offices
            </p>
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
              <div>
                <strong className="block text-slate-900 mb-1.5 text-xs font-mono uppercase tracking-wider">Registered Office</strong>
                {offices?.registered?.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </div>
              <div>
                <strong className="block text-slate-900 mb-1.5 text-xs font-mono uppercase tracking-wider">Corporate Office</strong>
                {offices?.corporate?.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={3}
            className="lg:col-span-3"
          >
            <p className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-6">
              Direct Contact
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href={CONTACT.emailLink || `mailto:${CONTACT.email}`}
                className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0284c7] transition-all shadow-sm"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-400 mb-0.5">Email Support</span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0284c7] transition-colors">
                    {CONTACT.email}
                  </span>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-[#0284c7] transition-colors" />
              </a>

              <a
                href={CONTACT.phoneLink || `tel:${CONTACT.phone}`}
                className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0284c7] transition-all shadow-sm"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-400 mb-0.5">Technical Hotline</span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0284c7] transition-colors">
                    {CONTACT.phone}
                  </span>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-[#0284c7] transition-colors" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright Strip */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
          className="mt-20 pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 uppercase tracking-widest"
        >
          <span>© 2026 Precision Metallurgy India Private Limited.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#0284c7] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#0284c7] transition-colors">Terms of Service</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}