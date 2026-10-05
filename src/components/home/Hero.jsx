// // import React, { useState } from "react";
// // import {
// //   ArrowDown,
// //   ArrowUpRight,
// //   Crosshair,
// //   ShieldCheck,
// //   Layers,
// //   Activity,
// //   ChevronRight,
// //   PhoneCall,
// //   CheckCircle2,
// //   Sparkles,
// //   Gauge,
// //   Sliders,
// //   Maximize2,
// //   Copy,
// //   Check,
// //   Code2,
// //   X,
// //   Target,
// //   FileCode2,
// //   Zap,
// //   Download,
// //   Flame,
// //   Scale,
// //   Microscope,
// //   RotateCw,
// //   ExternalLink,
// //   Mail,
// //   Phone,
// //   Building2,
// //   Compass,
// //   CheckSquare,
// //   Award,
// //   Factory
// // } from "lucide-react";

// // const CONFIG = {
// //   company: "Precision Metallurgy India Pvt. Ltd.",
// //   brandShort: "PRECISION METALLURGY",
// //   tagline: "Rolling Mill Solutions · Est. September 2021",
// //   contact: {
// //     email: "contact@precisionmetallurgy.in",
// //     phone: "+91 98200 12345",
// //     address: "Industrial Growth Corridor, Maharashtra / Gujarat / Punjab",
// //     support: "24/7 Field Metallurgical Support"
// //   },
// //   images: {
// //     hero: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
// //     about: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
// //     why: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
// //     cadBlueprint: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
// //   },
// //   facts: [
// //     { number: "01", label: "Established", value: "Sept 2021", desc: "Built with a core engineering vision for enhanced hot rolling mill uptime." },
// //     { number: "02", label: "Core Focus", value: "Rolling Solutions", desc: "Tungsten carbide rings, composite rolls & high-speed guide equipment." },
// //     { number: "03", label: "Quality Benchmark", value: "±0.002 mm", desc: "Calibrated micro-metric tolerance with certified 100% CMM inspection." },
// //     { number: "04", label: "Client Mill Base", value: "25+ Steel Mills", desc: "Trusted by primary and secondary steel producers across industrial hubs in India." }
// //   ],
// //   products: [
// //     {
// //       number: "01",
// //       name: "Tungsten Carbide Roll Rings",
// //       category: "Finishing Stand Wire & Bar",
// //       grade: "PM-920 Micrograin (WC-Co-Ni)",
// //       description: "Engineered specifically for high-speed wire rod blocks and rebar finishing stands running at speeds up to 110 m/s with micro-metric groove retention.",
// //       specs: { hardness: "88.5 - 91.5 HRA", density: "14.85 g/cm³", trs: "2,950 MPa", wearLife: "+85% vs Chilled Iron" },
// //       features: ["Micrograin sintered carbide", "Zero surface micro-pitting", "High thermal crack resistance"]
// //     },
// //     {
// //       number: "02",
// //       name: "High-Speed Steel (HSS) Rolls",
// //       category: "Intermediate & Pre-Finishing",
// //       grade: "Centrifugally Cast PM-HSS7",
// //       description: "Dual-layer centrifugally cast composite rolls combining an ultra-wear resistant vanadium carbide alloy working shell with a high-tensile nodular core.",
// //       specs: { hardness: "64 - 68 HRC", density: "7.85 g/cm³", trs: "1,250 MPa", wearLife: "+60% Pass Tonnage" },
// //       features: ["Centrifugal composite bonding", "High red-hardness stability", "Uniform depth wear profile"]
// //     },
// //     {
// //       number: "03",
// //       name: "Cast Steel & Alloy Iron Rolls",
// //       category: "Roughing & Slabbing Stands",
// //       grade: "Adamite & High-Chromium PM-HiCr20",
// //       description: "Heavy section composite sleeves and solid rolls designed to withstand severe cyclical impact loading during breakdown passes without spalling.",
// //       specs: { hardness: "55 - 62 HSD", density: "7.75 g/cm³", trs: "980 MPa", wearLife: "+45% Gross Campaign" },
// //       features: ["Tough fracture core", "Hypereutectic carbide phase", "Deep working layer"]
// //     },
// //     {
// //       number: "04",
// //       name: "Precision Guide Rollers",
// //       category: "Entry / Delivery Roller Guides",
// //       grade: "Cryo-Stabilized Tool Steel PM-CR24",
// //       description: "Sub-zero stabilized guide rollers paired with sealed high-speed ceramic hybrids to eradicate product scratch marks and high-temperature stick friction.",
// //       specs: { hardness: "62 - 64 HRC", density: "7.82 g/cm³", trs: "3,100 MPa", wearLife: "3.2x Standard Bearings" },
// //       features: ["Dynamic balancing @ 35,000 RPM", "Mirror polished pass line", "Low inertia ceramic bearing"]
// //     }
// //   ],
// //   whyPoints: [
// //     {
// //       number: "01",
// //       title: "Precision-Sourced Products",
// //       copy: "Products selected with meticulous attention to chemical composition, micro-grain structure, and certified wear envelopes tailored to your mill pass design.",
// //       metric: "99.8% Batch Purity",
// //       icon: Microscope
// //     },
// //     {
// //       number: "02",
// //       title: "Technical Understanding",
// //       copy: "We work directly on-site to analyze groove heat dissipation, water-cooling pressure, and pass schedule dynamics before recommending alloy grades.",
// //       metric: "On-Site Mill Audit",
// //       icon: Activity
// //     },
// //     {
// //       number: "03",
// //       title: "Lower Total Operating Cost",
// //       copy: "Longer roll campaign life, significantly fewer line changes, and reduced cobble scrap rates that directly improve gross mill operating economics.",
// //       metric: "Up to -35% Roll Cost/Ton",
// //       icon: Scale
// //     }
// //   ],
// //   steps: [
// //     { number: "01", title: "Understand", sub: "Rolling Conditions", detail: "Analyze mill speed, temperature gradients, cooling water quality, and rolling stock chemistry." },
// //     { number: "02", title: "Select", sub: "The Right Material", detail: "Formulate precise carbide binder ratios (Co/Ni) or HSS shell chemistry to match mechanical stresses." },
// //     { number: "03", title: "Validate", sub: "Quality & Composition", detail: "100% ultrasonic flaw scanning, Zeiss CMM dimension testing, and hardness mapping across every unit." },
// //     { number: "04", title: "Improve", sub: "Roll Life & Performance", detail: "Continuous tracking of tonnage rolled per pass dress, maximizing roll redressing cycles." }
// //   ],
// //   clients: [
// //     "Jindal Steel & Power Ltd.",
// //     "Tata Steel BSL Partner Mills",
// //     "JSW Steel Associated Facilities",
// //     "Electrosteel Steels",
// //     "Kamdhenu Ltd. Rolling Units",
// //     "Rungta Mines Limited",
// //     "Gallantt Ispat Limited",
// //     "Shyam Steel Industries",
// //     "Rashmi Group Metal Div.",
// //     "Jai Balaji Industries",
// //     "SMC Power Generation",
// //     "Moorgate Metal & Rolling"
// //   ]
// // };

// // function PrecisionMetallurgyLogo({ size = "default", showText = true }) {
// //   const isLarge = size === "large";
// //   const diameter = isLarge ? 54 : 40;
// // }

// // function Hero({ onOpenCodeModal }) {
// //   return (
// //     <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#edf2f7] text-slate-900 border-b border-slate-200">
// //       {/* Light Architectural Blueprint Gridlines */}
// //       <div
// //         className="absolute inset-0 opacity-[0.38] pointer-events-none"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(#cbd5e1 1px, transparent 1px),
// //             linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
// //             linear-gradient(#e2e8f0 0.5px, transparent 0.5px),
// //             linear-gradient(90deg, #e2e8f0 0.5px, transparent 0.5px)
// //           `,
// //           backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px"
// //         }}
// //       />

// //       {/* Radial soft steel bloom */}
// //       <div
// //         className="absolute top-10 right-[5%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-40 blur-3xl"
// //         style={{
// //           background: "radial-gradient(circle, rgba(186, 230, 253, 0.5) 0%, rgba(226, 232, 240, 0.4) 45%, transparent 70%)"
// //         }}
// //       />

// //       {/* Top Precision Status Bar */}
// //       <div className="relative z-10 px-6 sm:px-12 pt-5 flex items-center justify-between text-xs font-mono tracking-wider border-b border-slate-200/80 pb-3.5 bg-white/70 backdrop-blur-sm">
// //         <div className="flex items-center gap-3">
// //           <div className="relative flex h-2.5 w-2.5">
// //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
// //             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
// //           </div>
// //           <span className="text-slate-800 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
// //             PM METALLURGY LABS · LIVE TOLERANCE MONITOR
// //           </span>
// //           <span className="hidden md:inline text-slate-300">|</span>
// //           <span className="hidden md:inline text-[#0284c7] font-semibold">
// //             CALIBRATION: ±0.002 MM RUNOUT
// //           </span>
// //         </div>

// //         <div className="flex items-center gap-4 text-slate-600">
// //           <span className="hidden sm:inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[11px] font-mono shadow-sm">
// //             <ShieldCheck size={13} className="text-[#0284c7]" />
// //             EN 10204 3.1 & 3.2 VERIFIED
// //           </span>
// //           <button
// //             onClick={() => onOpenCodeModal("Hero.jsx")}
// //             className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-[#0284c7] transition-colors py-1 px-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#0284c7] shadow-sm font-mono"
// //           >
// //             <Code2 size={13} className="text-[#0284c7]" />
// //             <span>Copy Hero Code</span>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Center Hero Block */}
// //       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-20 w-full">
// //         {/* Crisp Eyebrow Badge */}
// //         <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0369a1] text-xs font-mono font-semibold tracking-wider uppercase mb-8 shadow-sm">
// //           <Crosshair size={13} className="text-[#0284c7]" />
// //           <span>Rolling mill solutions</span>
// //           <span className="text-slate-300">·</span>
// //           <span className="text-slate-700">Est. Sept 2021</span>
// //           <span className="text-slate-300">·</span>
// //           <span className="text-emerald-700 font-bold">ISO 9001:2015</span>
// //         </div>

// //         {/* Monumental Headline */}
// //         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 max-w-4xl leading-[1.08]">
// //           Precision that
// //           <br />
// //           <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#1d4ed8]">
// //             performs
// //           </span>
// //           <br />
// //           under pressure.
// //         </h1>

// //         {/* Crisp Sub-Copy */}
// //         <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
// //           High-performance rolling mill products and technical solutions engineered to improve roll campaign life, eliminate mechanical failure, and deliver micro-metric strip consistency in hot and cold continuous mills.
// //         </p>

// //         {/* Action Controls */}
// //         <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
// //           <a
// //             href="#products"
// //             className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-sky-500/25 active:scale-[0.99] bg-gradient-to-r from-[#0284c7] to-[#0369a1]"
// //           >
// //             <span>Explore Products</span>
// //             <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
// //           </a>

// //           <a
// //             href="#contact"
// //             className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-semibold transition-all duration-200 shadow-sm"
// //           >
// //             <span>Talk to Our Team</span>
// //             <ArrowUpRight size={16} className="text-[#0284c7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
// //           </a>
// //         </div>

// //         {/* Telemetry Strip Cards in Crisp Porcelain White */}
// //         <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-8 border-t border-slate-200">
// //           <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm">
// //             <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-[#0284c7]">
// //               <Target size={17} />
// //             </div>
// //             <div>
// //               <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Tolerance</p>
// //               <p className="text-sm font-mono font-bold text-slate-900">±0.002 mm</p>
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm">
// //             <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-[#0284c7]">
// //               <Gauge size={17} />
// //             </div>
// //             <div>
// //               <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Hardness</p>
// //               <p className="text-sm font-mono font-bold text-slate-900">88 - 92 HRA</p>
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm">
// //             <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-[#0284c7]">
// //               <Flame size={17} />
// //             </div>
// //             <div>
// //               <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Shock Rating</p>
// //               <p className="text-sm font-mono font-bold text-slate-900">1,100°C Max</p>
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm">
// //             <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600">
// //               <ShieldCheck size={17} />
// //             </div>
// //             <div>
// //               <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Campaign Life</p>
// //               <p className="text-sm font-mono font-bold text-emerald-700">+65% Tonnage</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Hero Footnote & Scroll Bar */}
// //       <div className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-md px-6 sm:px-12 py-3.5 flex items-center justify-between text-xs text-slate-600 font-mono">
// //         <div className="flex items-center gap-4 sm:gap-6">
// //           <span className="text-[#0284c7] font-bold tracking-widest">01 / 04</span>
// //           <span className="text-slate-300">·</span>
// //           <span className="uppercase text-slate-700 tracking-wider text-[11px] sm:text-xs">
// //             Built for the heat of continuous production
// //           </span>
// //         </div>

// //         <a
// //           href="#snapshot"
// //           className="group flex items-center gap-2.5 text-slate-600 hover:text-[#0284c7] transition-colors"
// //           aria-label="Scroll to company snapshot"
// //         >
// //           <span className="text-[11px] uppercase tracking-wider hidden sm:inline font-semibold">
// //             Company Snapshot
// //           </span>
// //           <div className="p-2 rounded-full border border-slate-200 group-hover:border-[#0284c7] group-hover:bg-sky-50 transition-all shadow-sm">
// //             <ArrowDown size={14} className="text-slate-700 group-hover:text-[#0284c7] group-hover:translate-y-0.5 transition-transform" />
// //           </div>
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// // function CompanySnapshot({ onOpenCodeModal }) {
// //   return (
// //     <section id="snapshot" className="relative bg-[#f8fafc] py-20 px-6 sm:px-12 text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header Ribbon */}
// //         <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 border-b border-slate-200 gap-4">
// //           <div className="flex items-center gap-3">
// //             <div className="w-2.5 h-2.5 bg-[#0284c7] rotate-45" />
// //             <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284c7] font-bold">
// //               Engineering Snapshot · Operational Benchmarks
// //             </h3>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <span className="font-mono text-xs text-slate-500 hidden sm:inline">
// //               CALIBRATED ZEISS CMM INSPECTIONS
// //             </span>
// //             <button
// //               onClick={() => onOpenCodeModal("CompanySnapshot.jsx")}
// //               className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2.5 py-1 rounded bg-white border border-slate-200"
// //             >
// //               <Code2 size={13} className="text-[#0284c7]" />
// //               <span>Snapshot Code</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* 4 Cards Grid with Brushed Stainless Accents */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {CONFIG.facts.map((fact) => (
// //             <div
// //               key={fact.label}
// //               className="group relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7]/80 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
// //             >
// //               {/* Brushed Metallic Accent Line */}
// //               <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent group-hover:via-[#0284c7] transition-all" />

// //               {/* Technical Corner Crosshairs */}
// //               <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-300 group-hover:border-[#0284c7]" />
// //               <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-300 group-hover:border-[#0284c7]" />
// //               <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-300 group-hover:border-[#0284c7]" />
// //               <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-300 group-hover:border-[#0284c7]" />

// //               {/* Card Meta Row */}
// //               <div className="flex items-center justify-between mb-4">
// //                 <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
// //                   {fact.number}
// //                 </span>
// //                 <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold">
// //                   {fact.label}
// //                 </span>
// //               </div>

// //               {/* Value & Description */}
// //               <div className="text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-[#0369a1] transition-colors tracking-tight font-sans">
// //                 {fact.value}
// //               </div>

// //               <p className="mt-3 text-xs text-slate-600 font-normal leading-relaxed">
// //                 {fact.desc}
// //               </p>

// //               <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
// //                 <span>VERIFIED SPEC</span>
// //                 <ChevronRight size={14} className="text-slate-400 group-hover:text-[#0284c7] transform group-hover:translate-x-1 transition-all" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function AboutPreview({ onOpenCodeModal }) {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
// //           {/* Left Asymmetric Photo Container */}
// //           <div className="lg:col-span-6 relative">
// //             <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
// //               <img
// //                 src={CONFIG.images.about}
// //                 alt="Precision Metallurgy engineering specialist inspecting hot rolling rolls"
// //                 className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

// //               {/* Bottom Overlaid Metadata */}
// //               <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-slate-900 flex items-center justify-between shadow-lg">
// //                 <div>
// //                   <p className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
// //                     Material Knowledge / Mill Performance
// //                   </p>
// //                   <p className="text-xs text-slate-600 font-mono mt-0.5">
// //                     Metallographic structure & wear boundary evaluation
// //                   </p>
// //                 </div>
// //                 <div className="p-2 rounded-lg bg-sky-50 text-[#0284c7]">
// //                   <Microscope size={18} />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Floating Established Badge */}
// //             <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center w-32 h-32 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 text-center">
// //               <span className="text-2xl font-black text-[#0284c7] font-sans">2021</span>
// //               <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold leading-tight mt-1">
// //                 Founded for Better Rolling
// //               </span>
// //             </div>
// //           </div>

// //           {/* Right Editorial Copy Block */}
// //           <div className="lg:col-span-6 flex flex-col justify-center">
// //             <div className="flex items-center justify-between mb-4">
// //               <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase">
// //                 <Building2 size={14} />
// //                 <span>01 / About Us</span>
// //               </div>
// //               <button
// //                 onClick={() => onOpenCodeModal("AboutPreview.jsx")}
// //                 className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200"
// //               >
// //                 <Code2 size={13} className="text-[#0284c7]" />
// //                 <span>About Code</span>
// //               </button>
// //             </div>

// //             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //               We don't just supply rolling mill products.
// //               <br />
// //               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                 We help mills perform better.
// //               </span>
// //             </h2>

// //             <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
// //               <p>
// //                 <strong className="text-slate-900 font-semibold">Precision Metallurgy India Private Limited</strong> was established in September 2021 with a singular objective: to eliminate unnecessary downtime and elevate strip finish standards across hot and cold rolling mills.
// //               </p>
// //               <p>
// //                 As a specialized importer and technical provider of premium Tungsten Carbide Roll Rings, High-Speed Steel (HSS) Rolls, and guide solutions, we blend metallurgical chemistry with hands-on shop-floor rolling experience.
// //               </p>
// //             </div>

// //             {/* Established Callout Banner */}
// //             <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-5">
// //               <div className="text-3xl font-light text-[#0284c7] font-mono">
// //                 2021
// //               </div>
// //               <div className="text-xs sm:text-sm text-slate-700 leading-snug">
// //                 Established in India with a clear vision to bridge world-class roll metallurgy with real-world rolling mill productivity.
// //               </div>
// //             </div>

// //             {/* Action Link */}
// //             <div className="mt-8">
// //               <a
// //                 href="#about"
// //                 className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors group"
// //               >
// //                 <span>Discover Our Complete Story</span>
// //                 <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ProductPreview({ onOpenCodeModal }) {
// //   const [selectedIdx, setSelectedIdx] = useState(0);
// //   const activeProduct = CONFIG.products[selectedIdx];

// //   return (
// //     <section id="products" className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Section Heading */}
// //         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
// //           <div>
// //             <div className="flex items-center gap-3 mb-2">
// //               <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase">
// //                 02 / Products & Solutions
// //               </span>
// //               <button
// //                 onClick={() => onOpenCodeModal("ProductPreview.jsx")}
// //                 className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2 py-0.5 rounded bg-white border border-slate-200"
// //               >
// //                 <Code2 size={13} className="text-[#0284c7]" />
// //                 <span>Products Code</span>
// //               </button>
// //             </div>
// //             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //               Products built for
// //               <br />
// //               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                 demanding rolling environments.
// //               </span>
// //             </h2>
// //           </div>
// //           <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
// //             Selected for the extreme mechanical shock, high thermal cycles, and wear conditions that define modern high-tonnage steel production.
// //           </p>
// //         </div>

// //         {/* Master-Detail Product Workspace */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
// //           {/* Product Selector Rows (7 cols) */}
// //           <div className="lg:col-span-7 flex flex-col gap-3.5">
// //             {CONFIG.products.map((product, idx) => {
// //               const isSelected = selectedIdx === idx;
// //               return (
// //                 <div
// //                   key={product.number}
// //                   onClick={() => setSelectedIdx(idx)}
// //                   className={`group relative p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${isSelected
// //                     ? "bg-white border-[#0284c7] shadow-lg shadow-sky-500/10"
// //                     : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"
// //                     }`}
// //                 >
// //                   {/* Left Accent indicator bar */}
// //                   {isSelected && (
// //                     <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#0284c7] rounded-r-full" />
// //                   )}

// //                   <div className="flex items-start justify-between gap-4">
// //                     <div className="flex-1">
// //                       <div className="flex items-center gap-3 mb-2">
// //                         <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isSelected ? "bg-[#0284c7] text-white" : "bg-slate-100 text-slate-700"
// //                           }`}>
// //                           {product.number}
// //                         </span>
// //                         <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
// //                           {product.category}
// //                         </span>
// //                       </div>

// //                       <h4 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-[#0369a1] transition-colors">
// //                         {product.name}
// //                       </h4>
// //                       <p className="text-xs font-mono text-[#0284c7] font-semibold mt-1">
// //                         {product.grade}
// //                       </p>
// //                       <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
// //                         {product.description}
// //                       </p>
// //                     </div>

// //                     <div className={`p-2.5 rounded-xl border transition-all ${isSelected
// //                       ? "bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-500/30"
// //                       : "border-slate-200 text-slate-400 group-hover:text-slate-800 bg-white"
// //                       }`}>
// //                       <ArrowUpRight size={18} />
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* Interactive Inspection Canvas HUD (5 cols) */}
// //           <div className="lg:col-span-5 sticky top-24">
// //             <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
// //               {/* CAD Header */}
// //               <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono">
// //                 <div className="flex items-center gap-2 text-[#0284c7] font-bold">
// //                   <Crosshair size={14} />
// //                   <span>CAD TELEMETRY · SPEC {activeProduct.number}</span>
// //                 </div>
// //                 <span className="text-emerald-700 font-semibold">VERIFIED SPEC</span>
// //               </div>

// //               {/* Visual CAD Blueprint */}
// //               <div className="relative h-60 w-full overflow-hidden bg-slate-100">
// //                 <img
// //                   src={CONFIG.images.hero}
// //                   alt={activeProduct.name}
// //                   className="w-full h-full object-cover contrast-105"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

// //                 {/* Reticle HUD overlay */}
// //                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// //                   <div className="w-28 h-28 rounded-full border border-sky-400/60 flex items-center justify-center">
// //                     <div className="w-12 h-12 rounded-full border border-sky-500/80 border-dashed" />
// //                   </div>
// //                 </div>

// //                 <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono font-bold text-slate-800 border border-slate-200">
// //                   {activeProduct.grade}
// //                 </div>
// //               </div>

// //               {/* Metallurgy Metrics */}
// //               <div className="p-6">
// //                 <span className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
// //                   Active Mechanical Properties
// //                 </span>
// //                 <h3 className="text-xl font-bold text-slate-900 mt-1">
// //                   {activeProduct.name}
// //                 </h3>

// //                 <div className="mt-4 grid grid-cols-3 gap-2 text-center">
// //                   <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
// //                     <span className="block text-[10px] font-mono text-slate-500 uppercase">Hardness</span>
// //                     <span className="text-sm font-mono font-bold text-[#0284c7]">{activeProduct.specs.hardness}</span>
// //                   </div>
// //                   <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
// //                     <span className="block text-[10px] font-mono text-slate-500 uppercase">TRS Rating</span>
// //                     <span className="text-sm font-mono font-bold text-slate-900">{activeProduct.specs.trs}</span>
// //                   </div>
// //                   <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
// //                     <span className="block text-[10px] font-mono text-slate-500 uppercase">Performance</span>
// //                     <span className="text-sm font-mono font-bold text-emerald-600">{activeProduct.specs.wearLife}</span>
// //                   </div>
// //                 </div>

// //                 <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-100">
// //                   {activeProduct.features.map((feat, fIdx) => (
// //                     <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-600">
// //                       <CheckCircle2 size={13} className="text-[#0284c7]" />
// //                       <span>{feat}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <a
// //                   href="#contact"
// //                   className="mt-6 w-full py-3.5 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
// //                 >
// //                   <Download size={14} />
// //                   <span>Request Full Specification Sheet</span>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* View All Link */}
// //         <div className="mt-12 text-center">
// //           <a
// //             href="#all-products"
// //             className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
// //           >
// //             <span>View All Rolling Mill Products</span>
// //             <ArrowUpRight size={16} />
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function WhyPrecision({ onOpenCodeModal }) {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
// //           <div>
// //             <div className="flex items-center gap-3 mb-2">
// //               <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase">
// //                 03 / Why Precision
// //               </span>
// //               <button
// //                 onClick={() => onOpenCodeModal("WhyPrecision.jsx")}
// //                 className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200"
// //               >
// //                 <Code2 size={13} className="text-[#0284c7]" />
// //                 <span>WhyPrecision Code</span>
// //               </button>
// //             </div>
// //             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //               Engineering the value
// //               <br />
// //               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                 behind every roll.
// //               </span>
// //             </h2>
// //           </div>
// //         </div>

// //         {/* 2-Column Split: Image on Left + 3 Points on Right */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
// //           <div className="lg:col-span-5 relative">
// //             <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
// //               <img
// //                 src={CONFIG.images.why}
// //                 alt="Close-up of industrial steel processing machinery"
// //                 className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

// //               <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200">
// //                 <p className="text-xs font-mono uppercase tracking-wider text-[#0284c7] font-bold">
// //                   Roll Life & Mill Economics
// //                 </p>
// //                 <p className="text-xs text-slate-600 mt-1">
// //                   Engineered carbide matrices that retain calibrated roll groove profiles longer.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="lg:col-span-7 flex flex-col gap-6">
// //             {CONFIG.whyPoints.map((pt) => {
// //               const Icon = pt.icon;
// //               return (
// //                 <div
// //                   key={pt.number}
// //                   className="group relative p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-lg transition-all duration-300"
// //                 >
// //                   <div className="flex items-start gap-5">
// //                     <div className="p-3.5 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-100 text-[#0284c7] transition-colors">
// //                       <Icon size={22} />
// //                     </div>

// //                     <div className="flex-1">
// //                       <div className="flex items-center justify-between mb-1.5">
// //                         <span className="font-mono text-xs font-bold text-[#0284c7]">
// //                           {pt.number} / FOCUS
// //                         </span>
// //                         <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
// //                           {pt.metric}
// //                         </span>
// //                       </div>

// //                       <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0369a1] transition-colors">
// //                         {pt.title}
// //                       </h3>

// //                       <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
// //                         {pt.copy}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function TechnicalApproach({ onOpenCodeModal }) {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
// //           <div>
// //             <div className="flex items-center gap-3 mb-2">
// //               <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase">
// //                 04 / Our Approach
// //               </span>
// //               <button
// //                 onClick={() => onOpenCodeModal("TechnicalApproach.jsx")}
// //                 className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2 py-0.5 rounded bg-white border border-slate-200"
// //               >
// //                 <Code2 size={13} className="text-[#0284c7]" />
// //                 <span>Approach Code</span>
// //               </button>
// //             </div>
// //             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //               From material selection
// //               <br />
// //               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                 to mill performance.
// //               </span>
// //             </h2>
// //           </div>
// //         </div>

// //         {/* 4 Connected Step Cards with Architectural Connecting Line */}
// //         <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {CONFIG.steps.map((step, idx) => (
// //             <div
// //               key={step.number}
// //               className="relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
// //             >
// //               {/* Step indicator */}
// //               <div>
// //                 <div className="flex items-center justify-between mb-6">
// //                   <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center font-mono font-bold text-[#0284c7] text-sm group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
// //                     {step.number}
// //                   </div>
// //                   <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
// //                     STAGE {idx + 1}
// //                   </span>
// //                 </div>

// //                 <h3 className="text-2xl font-light text-slate-900 font-sans tracking-tight">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-xs font-mono font-semibold text-[#0284c7] mt-1 uppercase">
// //                   {step.sub}
// //                 </p>

// //                 <p className="mt-4 text-xs text-slate-600 leading-relaxed font-normal">
// //                   {step.detail}
// //                 </p>
// //               </div>

// //               <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
// //                 <CheckSquare size={13} className="text-[#0284c7]" />
// //                 <span>Standardized Workflow</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ClientPreview({ onOpenCodeModal }) {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
// //           <div>
// //             <div className="flex items-center gap-3 mb-2">
// //               <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase">
// //                 05 / Clients & Mills
// //               </span>
// //               <button
// //                 onClick={() => onOpenCodeModal("ClientPreview.jsx")}
// //                 className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200"
// //               >
// //                 <Code2 size={13} className="text-[#0284c7]" />
// //                 <span>Clients Code</span>
// //               </button>
// //             </div>
// //             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //               Trusted by industrial
// //               <br />
// //               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                 operators across India.
// //               </span>
// //             </h2>
// //           </div>

// //           <a
// //             href="#clients"
// //             className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
// //           >
// //             <span>View All Client References</span>
// //             <ArrowUpRight size={16} />
// //           </a>
// //         </div>

// //         {/* 12 Client Badges Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {CONFIG.clients.map((client, idx) => (
// //             <div
// //               key={client}
// //               className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0284c7] hover:shadow-md transition-all flex items-center gap-4 group"
// //             >
// //               <span className="font-mono text-xs font-bold text-[#0284c7] bg-white group-hover:bg-sky-50 px-2.5 py-1 rounded border border-slate-200 group-hover:border-sky-100">
// //                 {String(idx + 1).padStart(2, "0")}
// //               </span>
// //               <div className="flex-1 overflow-hidden">
// //                 <p className="text-sm font-semibold text-slate-800 group-hover:text-[#0369a1] truncate transition-colors">
// //                   {client}
// //                 </p>
// //                 <span className="text-[10px] font-mono uppercase text-slate-400">
// //                   Verified Mill Partner
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function EnquiryCTA({ onOpenCodeModal }) {
// //   return (
// //     <section id="contact" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#f8fafc] to-[#ffffff] text-slate-900">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl">
// //           {/* Brushed Stainless Rim Accent */}
// //           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#94a3b8] via-[#0284c7] to-[#94a3b8]" />

// //           {/* Blueprint background grid */}
// //           <div
// //             className="absolute inset-0 opacity-[0.25] pointer-events-none"
// //             style={{
// //               backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
// //               backgroundSize: "32px 32px"
// //             }}
// //           />

// //           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
// //             <div className="lg:col-span-7">
// //               <div className="flex items-center gap-3 mb-4">
// //                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0284c7] text-xs font-mono font-bold uppercase">
// //                   <Sparkles size={13} />
// //                   Start a Conversation
// //                 </span>
// //                 <button
// //                   onClick={() => onOpenCodeModal("EnquiryCTA.jsx")}
// //                   className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200"
// //                 >
// //                   <Code2 size={13} className="text-[#0284c7]" />
// //                   <span>EnquiryCTA Code</span>
// //                 </button>
// //               </div>

// //               <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
// //                 Looking for the right
// //                 <br />
// //                 <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                   rolling mill solution?
// //                 </span>
// //               </h2>

// //               <p className="mt-4 text-base text-slate-600 max-w-xl font-normal leading-relaxed">
// //                 Speak with our metallurgy team regarding your roll campaign targets, high-speed finish pass groove profiles, or upcoming annual procurement schedules.
// //               </p>

// //               {/* Direct Contacts Strip */}
// //               <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-slate-100 font-mono text-xs">
// //                 <div className="flex items-center gap-3">
// //                   <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[#0284c7]">
// //                     <Mail size={16} />
// //                   </div>
// //                   <div>
// //                     <span className="text-[10px] text-slate-400 uppercase block">Engineering Inquiries</span>
// //                     <a href={`mailto:${CONFIG.contact.email}`} className="text-slate-800 font-semibold hover:text-[#0284c7]">
// //                       {CONFIG.contact.email}
// //                     </a>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-center gap-3">
// //                   <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[#0284c7]">
// //                     <Phone size={16} />
// //                   </div>
// //                   <div>
// //                     <span className="text-[10px] text-slate-400 uppercase block">Technical Hotline</span>
// //                     <a href={`tel:${CONFIG.contact.phone}`} className="text-slate-800 font-semibold hover:text-[#0284c7]">
// //                       {CONFIG.contact.phone}
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="lg:col-span-5 flex flex-col gap-4">
// //               <a
// //                 href={`mailto:${CONFIG.contact.email}?subject=Rolling%20Mill%20Solution%20Inquiry`}
// //                 className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white font-semibold text-sm font-mono tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20 hover:brightness-105"
// //               >
// //                 <span>Send Technical Enquiry</span>
// //                 <ArrowUpRight size={18} />
// //               </a>

// //               <a
// //                 href={`tel:${CONFIG.contact.phone}`}
// //                 className="w-full py-4 px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm font-mono tracking-wide uppercase transition-all flex items-center justify-center gap-3 shadow-sm"
// //               >
// //                 <span>Call Metallurgist Directly</span>
// //                 <PhoneCall size={16} className="text-[#0284c7]" />
// //               </a>

// //               <p className="text-center text-[11px] font-mono text-slate-400 mt-2">
// //                 Guaranteed response within 4 operational mill hours.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function CodeExportModal({ isOpen, onClose, initialTab = "Hero.jsx" }) {
// //   const [activeTab, setActiveTab] = useState(initialTab);
// //   const [copied, setCopied] = useState(false);

// //   // Sync initialTab when modal opens
// //   React.useEffect(() => {
// //     if (initialTab) setActiveTab(initialTab);
// //   }, [initialTab]);

// //   if (!isOpen) return null;

// //   const rawFiles = {
// //     "Hero.jsx": `import { ArrowDown, ArrowUpRight, Crosshair, ShieldCheck, Target, Gauge, Flame } from "lucide-react";
// // import { Link } from "react-router-dom";

// // export default function Hero() {
// //   return (
// //     <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#edf2f7] text-slate-900 border-b border-slate-200">
// //       {/* Light Architectural Blueprint Gridlines */}
// //       <div
// //         className="absolute inset-0 opacity-[0.38] pointer-events-none"
// //         style={{
// //           backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
// //           backgroundSize: "80px 80px"
// //         }}
// //       />

// //       {/* Top Status Bar */}
// //       <div className="relative z-10 px-6 sm:px-12 pt-5 flex items-center justify-between text-xs font-mono tracking-wider border-b border-slate-200/80 pb-3.5 bg-white/70 backdrop-blur-sm">
// //         <div className="flex items-center gap-3">
// //           <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
// //           <span className="text-slate-800 font-semibold uppercase text-xs">PM METALLURGY LABS</span>
// //           <span className="text-slate-300">|</span>
// //           <span className="text-[#0284c7] font-semibold">TOLERANCE: ±0.002 MM</span>
// //         </div>
// //         <span className="hidden sm:inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[11px] font-mono shadow-sm">
// //           <ShieldCheck size={13} className="text-[#0284c7]" />
// //           EN 10204 3.1 & 3.2 VERIFIED
// //         </span>
// //       </div>

// //       {/* Center Content */}
// //       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-20 w-full">
// //         <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0369a1] text-xs font-mono font-semibold tracking-wider uppercase mb-8 shadow-sm">
// //           <Crosshair size={13} className="text-[#0284c7]" />
// //           <span>Rolling mill solutions · Est. Sept 2021 · ISO 9001:2015</span>
// //         </div>

// //         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 max-w-4xl leading-[1.08]">
// //           Precision that <br />
// //           <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#1d4ed8]">
// //             performs
// //           </span> <br />
// //           under pressure.
// //         </h1>

// //         <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
// //           High-performance rolling mill products and technical solutions engineered to improve roll campaign life, eliminate mechanical failure, and deliver micro-metric strip consistency in hot and cold continuous mills.
// //         </p>

// //         <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
// //           <Link
// //             to="/products"
// //             className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-sm tracking-wide bg-gradient-to-r from-[#0284c7] to-[#0369a1] shadow-md hover:shadow-xl hover:shadow-sky-500/25 transition-all"
// //           >
// //             <span>Explore Products</span>
// //             <ArrowUpRight size={17} />
// //           </Link>
// //           <Link
// //             to="/contact"
// //             className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-all shadow-sm"
// //           >
// //             <span>Talk to Our Team</span>
// //             <ArrowUpRight size={16} className="text-[#0284c7]" />
// //           </Link>
// //         </div>
// //       </div>

// //       {/* Footnote */}
// //       <div className="relative z-10 border-t border-slate-200 bg-white/90 px-6 sm:px-12 py-3.5 flex items-center justify-between text-xs text-slate-600 font-mono">
// //         <div className="flex items-center gap-4">
// //           <span className="text-[#0284c7] font-bold">01 / 04</span>
// //           <span>Built for the heat of continuous production</span>
// //         </div>
// //         <a href="#snapshot" className="p-2 rounded-full border border-slate-200 hover:border-[#0284c7] bg-white shadow-sm">
// //           <ArrowDown size={14} className="text-slate-700" />
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "CompanySnapshot.jsx": `const facts = [
// //   ["01", "Established", "Sept 2021", "Built with a core engineering vision for enhanced hot rolling mill uptime."],
// //   ["02", "Core Focus", "Rolling Solutions", "Tungsten carbide rings, composite rolls & high-speed guide equipment."],
// //   ["03", "Quality Benchmark", "±0.002 mm", "Calibrated micro-metric tolerance with certified 100% CMM inspection."],
// //   ["04", "Client Mill Base", "25+ Steel Mills", "Trusted by primary and secondary steel producers across India."],
// // ];

// // export default function CompanySnapshot() {
// //   return (
// //     <section className="bg-[#f8fafc] py-20 px-6 sm:px-12 text-slate-900 border-b border-slate-200" id="snapshot">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {facts.map(([number, label, value, desc]) => (
// //             <div
// //               key={label}
// //               className="group relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent group-hover:via-[#0284c7] transition-all" />
// //               <div className="flex items-center justify-between mb-4">
// //                 <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
// //                   {number}
// //                 </span>
// //                 <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold">
// //                   {label}
// //                 </span>
// //               </div>
// //               <div className="text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-[#0369a1] transition-colors tracking-tight">
// //                 {value}
// //               </div>
// //               <p className="mt-3 text-xs text-slate-600 font-normal leading-relaxed">{desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "AboutPreview.jsx": `import { ArrowUpRight, Microscope, Building2 } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { IMAGES } from "../../config";

// // export default function AboutPreview() {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
// //         {/* Left Photo */}
// //         <div className="lg:col-span-6 relative">
// //           <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
// //             <img
// //               src={IMAGES.about}
// //               alt="Technician inspecting industrial manufacturing equipment"
// //               className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
// //             />
// //             <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-slate-900 flex items-center justify-between shadow-lg">
// //               <div>
// //                 <p className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
// //                   Material Knowledge / Mill Performance
// //                 </p>
// //                 <p className="text-xs text-slate-600 font-mono mt-0.5">Metallographic structure evaluation</p>
// //               </div>
// //               <div className="p-2 rounded-lg bg-sky-50 text-[#0284c7]">
// //                 <Microscope size={18} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Copy */}
// //         <div className="lg:col-span-6 flex flex-col justify-center">
// //           <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-4">
// //             <Building2 size={14} />
// //             <span>01 / About Us</span>
// //           </div>
// //           <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //             We don't just supply rolling mill products. <br />
// //             <em className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //               We help mills perform better.
// //             </em>
// //           </h2>
// //           <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
// //             <p>
// //               Precision Metallurgy India Private Limited was established in September 2021 with a clear vision: to provide high-quality rolling solutions that enhance the efficiency of hot rolling mills.
// //             </p>
// //             <p>
// //               As a trusted importer and supplier of Tungsten Carbide Rings, HSS Rolls and other rolling mill products, we deliver value-driven solutions backed by practical industry understanding.
// //             </p>
// //           </div>
// //           <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-5">
// //             <strong className="text-3xl font-light text-[#0284c7] font-mono">2021</strong>
// //             <span className="text-xs sm:text-sm text-slate-700 leading-snug">
// //               Established with a clear vision for better rolling.
// //             </span>
// //           </div>
// //           <div className="mt-8">
// //             <Link to="/about" className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1]">
// //               Discover Our Story <ArrowUpRight size={16} />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "ProductPreview.jsx": `import { ArrowUpRight } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { products } from "../../config";

// // export default function ProductPreview() {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
// //           <div>
// //             <p className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-2">02 / Products</p>
// //             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
// //               Products built for <br />
// //               <em className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
// //                 demanding rolling environments.
// //               </em>
// //             </h2>
// //           </div>
// //           <p className="text-slate-600 text-sm max-w-md">Selected for the conditions that define modern steel production.</p>
// //         </div>

// //         <div className="flex flex-col gap-3.5">
// //           {products.map((product) => (
// //             <Link
// //               key={product.number}
// //               to="/products"
// //               className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0284c7] hover:shadow-lg transition-all flex items-start justify-between shadow-sm"
// //             >
// //               <div className="flex items-start gap-5">
// //                 <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-1 rounded border border-sky-100">{product.number}</span>
// //                 <div>
// //                   <h4 className="text-lg font-semibold text-slate-900 group-hover:text-[#0369a1]">{product.name}</h4>
// //                   <p className="text-xs font-mono text-slate-500 mt-1">{product.description}</p>
// //                 </div>
// //               </div>
// //               <ArrowUpRight className="text-slate-400 group-hover:text-[#0284c7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "WhyPrecision.jsx": `import { Microscope, Activity, Scale } from "lucide-react";
// // import { IMAGES } from "../../config";

// // const points = [
// //   ["01", "Precision-Sourced Products", "Products selected with careful attention to chemical composition, application and rolling conditions.", Microscope],
// //   ["02", "Technical Understanding", "We work to understand the operating conditions and challenges of each mill before recommending solutions.", Activity],
// //   ["03", "Lower Total Operating Cost", "Longer roll life, fewer changes and reduced downtime can contribute to better overall mill economics.", Scale],
// // ];

// // export default function WhyPrecision() {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
// //         <div className="lg:col-span-5">
// //           <img src={IMAGES.products} alt="Steel processing machinery" className="rounded-2xl border border-slate-200 shadow-xl w-full h-[460px] object-cover" />
// //         </div>
// //         <div className="lg:col-span-7 flex flex-col gap-6">
// //           <p className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase">03 / Why Precision</p>
// //           <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
// //             Engineering the value <br />
// //             <em className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">behind every roll.</em>
// //           </h2>
// //           {points.map(([number, title, copy, Icon]) => (
// //             <div key={number} className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0284c7] transition-all flex items-start gap-5">
// //               <div className="p-3 rounded-xl bg-white border border-slate-200 text-[#0284c7]"><Icon size={20} /></div>
// //               <div>
// //                 <span className="font-mono text-xs font-bold text-[#0284c7]">{number}</span>
// //                 <h3 className="text-lg font-bold text-slate-900 mt-0.5">{title}</h3>
// //                 <p className="text-xs sm:text-sm text-slate-600 mt-2">{copy}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "TechnicalApproach.jsx": `const steps = [
// //   ["01", "Understand", "Rolling Conditions"],
// //   ["02", "Select", "The Right Material"],
// //   ["03", "Validate", "Quality & Composition"],
// //   ["04", "Improve", "Roll Life & Performance"],
// // ];

// // export default function TechnicalApproach() {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <p className="text-xs font-mono uppercase text-[#0284c7] font-bold mb-2">04 / Our Approach</p>
// //         <h2 className="text-3xl sm:text-5xl font-light text-slate-900 mb-16">
// //           From material selection <br />
// //           <em className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">to mill performance.</em>
// //         </h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {steps.map(([number, title, copy]) => (
// //             <div key={number} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7] transition-all shadow-sm">
// //               <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-1 rounded">{number}</span>
// //               <h3 className="text-xl font-light text-slate-900 mt-6">{title}</h3>
// //               <p className="text-xs font-mono text-[#0284c7] font-semibold mt-1">{copy}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "ClientPreview.jsx": `import { ArrowUpRight } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { clients } from "../../config";

// // export default function ClientPreview() {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
// //           <div>
// //             <p className="text-xs font-mono text-[#0284c7] font-bold uppercase mb-2">05 / Clients</p>
// //             <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
// //               Trusted by industrial <br />
// //               <em className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">operators across India.</em>
// //             </h2>
// //           </div>
// //           <Link to="/clients" className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7]">
// //             View all clients <ArrowUpRight size={16} />
// //           </Link>
// //         </div>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {clients.slice(0, 12).map((client, index) => (
// //             <div key={client} className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-4">
// //               <span className="font-mono text-xs font-bold text-[#0284c7] bg-white px-2.5 py-1 rounded border border-slate-200">{String(index + 1).padStart(2, "0")}</span>
// //               <span className="text-sm font-semibold text-slate-800 truncate">{client}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`,
// //     "EnquiryCTA.jsx": `import { ArrowUpRight, Mail, Phone } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { CONTACT } from "../../config";

// // export default function EnquiryCTA() {
// //   return (
// //     <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#f8fafc] to-[#ffffff] text-slate-900">
// //       <div className="max-w-7xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
// //         <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#94a3b8] via-[#0284c7] to-[#94a3b8]" />
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
// //           <div className="lg:col-span-7">
// //             <p className="text-xs font-mono uppercase text-[#0284c7] font-bold mb-4">Start a conversation</p>
// //             <h2 className="text-3xl sm:text-5xl font-light text-slate-900 leading-tight">
// //               Looking for the right <br />
// //               <em className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">rolling mill solution?</em>
// //             </h2>
// //             <p className="mt-4 text-base text-slate-600">Speak with our team about your rolling conditions, product requirements or procurement needs.</p>
// //             <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-slate-100 font-mono text-xs">
// //               <div className="flex items-center gap-2 text-slate-700"><Mail size={16} className="text-[#0284c7]" /> {CONTACT.email}</div>
// //               <div className="flex items-center gap-2 text-slate-700"><Phone size={16} className="text-[#0284c7]" /> {CONTACT.phone}</div>
// //             </div>
// //           </div>
// //           <div className="lg:col-span-5">
// //             <Link to="/contact" className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white font-semibold text-sm font-mono tracking-wide uppercase flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20">
// //               Send an Enquiry <ArrowUpRight size={17} />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }`
// //   };

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(rawFiles[activeTab]);
// //     setCopied(true);
// //     setTimeout(() => setCopied(false), 2000);
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
// //       <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
// //         {/* Modal Top Header */}
// //         <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
// //           <div className="flex items-center gap-3">
// //             <FileCode2 className="text-[#0284c7]" size={20} />
// //             <div>
// //               <h3 className="font-mono text-sm font-bold text-slate-900">
// //                 Precision Metallurgy Light Theme Components
// //               </h3>
// //               <p className="text-[11px] font-mono text-slate-500">
// //                 Tailwind CSS + React Router Ready · Clean Source
// //               </p>
// //             </div>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* Tab switcher for all 7 components */}
// //         <div className="flex border-b border-slate-200 bg-slate-100/80 px-4 gap-1 overflow-x-auto">
// //           {Object.keys(rawFiles).map((file) => (
// //             <button
// //               key={file}
// //               onClick={() => setActiveTab(file)}
// //               className={`py-3 px-3.5 text-xs font-mono font-semibold whitespace-nowrap border-b-2 transition-all ${activeTab === file
// //                 ? "border-[#0284c7] text-[#0284c7] bg-white shadow-sm"
// //                 : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/50"
// //                 }`}
// //             >
// //               {file}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Code Canvas */}
// //         <div className="relative flex-1 p-5 overflow-auto bg-[#0a111a] font-mono text-xs text-sky-200">
// //           <button
// //             onClick={handleCopy}
// //             className="sticky top-0 float-right flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0284c7] text-white hover:bg-[#0369a1] transition-all font-mono text-xs shadow-md z-10"
// //           >
// //             {copied ? <Check size={14} /> : <Copy size={14} />}
// //             <span>{copied ? "Copied File!" : `Copy ${activeTab}`}</span>
// //           </button>
// //           <pre className="p-2 pt-6">
// //             <code>{rawFiles[activeTab]}</code>
// //           </pre>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function App() {
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [targetTab, setTargetTab] = useState("Hero.jsx");

// //   const openCodeModal = (filename = "Hero.jsx") => {
// //     setTargetTab(filename);
// //     setModalOpen(true);
// //   };

// //   return (
// //     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-200 selection:text-slate-900">
// //       {/* Light Precision Navigation Header */}
// //       <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 sm:px-12 py-3.5 shadow-sm">
// //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// //           <PrecisionMetallurgyLogo size="default" />

// //           {/* Quick links to all 7 sections */}
// //           <div className="hidden xl:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold">
// //             <a href="#snapshot" className="hover:text-[#0284c7] transition-colors">Snapshot</a>
// //             <a href="#about" className="hover:text-[#0284c7] transition-colors">About</a>
// //             <a href="#products" className="hover:text-[#0284c7] transition-colors">Products</a>
// //             <a href="#why" className="hover:text-[#0284c7] transition-colors">Why Precision</a>
// //             <a href="#approach" className="hover:text-[#0284c7] transition-colors">Approach</a>
// //             <a href="#clients" className="hover:text-[#0284c7] transition-colors">Clients</a>
// //             <a href="#contact" className="hover:text-[#0284c7] transition-colors">Enquiry</a>
// //           </div>

// //           {/* Header Action Buttons */}
// //           <div className="flex items-center gap-3">
// //             <button
// //               onClick={() => openCodeModal("Hero.jsx")}
// //               className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-mono font-semibold text-[#0284c7] transition-all shadow-sm"
// //             >
// //               <Code2 size={13} />
// //               <span className="hidden sm:inline">Export Code (7 Files)</span>
// //               <span className="sm:hidden">Code</span>
// //             </button>

// //             <a
// //               href="#contact"
// //               className="px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-xs font-mono uppercase tracking-wider text-white font-semibold transition-all flex items-center gap-2 shadow-sm shadow-sky-500/20"
// //             >
// //               <PhoneCall size={13} />
// //               <span>Consult Engineer</span>
// //             </a>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Complete Redesigned Suite */}
// //       <main>
// //         <Hero onOpenCodeModal={openCodeModal} />
// //         <CompanySnapshot onOpenCodeModal={openCodeModal} />
// //         <div id="about"><AboutPreview onOpenCodeModal={openCodeModal} /></div>
// //         <ProductPreview onOpenCodeModal={openCodeModal} />
// //         <div id="why"><WhyPrecision onOpenCodeModal={openCodeModal} /></div>
// //         <div id="approach"><TechnicalApproach onOpenCodeModal={openCodeModal} /></div>
// //         <div id="clients"><ClientPreview onOpenCodeModal={openCodeModal} /></div>
// //         <EnquiryCTA onOpenCodeModal={openCodeModal} />
// //       </main>

// //       {/* Light Architectural Footer */}
// //       <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6 sm:px-12 text-slate-600 text-xs font-mono">
// //         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
// //           <div className="flex items-center gap-3">
// //             <PrecisionMetallurgyLogo size="small" showText={false} />
// //             <div>
// //               <p className="text-slate-900 font-bold font-sans tracking-wide">
// //                 PRECISION METALLURGY INDIA PVT. LTD.
// //               </p>
// //               <p className="text-[10px] text-slate-500">
// //                 ESTABLISHED SEPTEMBER 2021 · HIGH-PERFORMANCE ROLLING SOLUTIONS
// //               </p>
// //             </div>
// //           </div>

// //           <div className="flex flex-wrap items-center gap-6 text-slate-600 text-[11px] font-semibold">
// //             <span>ISO 9001:2015 CERTIFIED</span>
// //             <span>EN 10204 3.1 & 3.2 VERIFIED</span>
// //             <span>HOT & COLD ROLLING MILLS</span>
// //           </div>

// //           <p className="text-[11px] text-slate-500">
// //             © 2021–2026 Precision Metallurgy India Pvt. Ltd. All rights reserved.
// //           </p>
// //         </div>
// //       </footer>

// //       {/* Floating Code Viewer Modal */}
// //       <CodeExportModal
// //         isOpen={modalOpen}
// //         onClose={() => setModalOpen(false)}
// //         initialTab={targetTab}
// //       />
// //     </div>
// //   );
// // }




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Crosshair,
//   ShieldCheck,
//   Target,
//   Gauge,
//   Flame,
//   Microscope,
//   Activity,
//   Scale,
//   CheckCircle2,
//   Building2,
//   CheckSquare,
//   Mail,
//   Phone,
//   PhoneCall,
//   Download
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // Configuration & Data
// const CONFIG = {
//   company: "Precision Metallurgy India Pvt. Ltd.",
//   brandShort: "PRECISION METALLURGY",
//   tagline: "Rolling Mill Solutions · Est. September 2021",
//   contact: {
//     email: "contact@precisionmetallurgy.in",
//     phone: "+91 98200 12345",
//   },
//   images: {
//     hero: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
//     about: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
//     why: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
//   },
//   facts: [
//     { number: "01", label: "Established", value: "Sept 2021", desc: "Built with a core engineering vision for enhanced hot rolling mill uptime." },
//     { number: "02", label: "Core Focus", value: "Rolling Solutions", desc: "Tungsten carbide rings, composite rolls & high-speed guide equipment." },
//     { number: "03", label: "Quality Benchmark", value: "±0.002 mm", desc: "Calibrated micro-metric tolerance with certified 100% CMM inspection." },
//     { number: "04", label: "Client Mill Base", value: "25+ Steel Mills", desc: "Trusted by primary and secondary steel producers across industrial hubs in India." }
//   ],
//   products: [
//     {
//       number: "01",
//       name: "Tungsten Carbide Roll Rings",
//       category: "Finishing Stand Wire & Bar",
//       grade: "PM-920 Micrograin (WC-Co-Ni)",
//       description: "Engineered specifically for high-speed wire rod blocks and rebar finishing stands running at speeds up to 110 m/s with micro-metric groove retention.",
//       specs: { hardness: "88.5 - 91.5 HRA", density: "14.85 g/cm³", trs: "2,950 MPa", wearLife: "+85% vs Chilled Iron" },
//       features: ["Micrograin sintered carbide", "Zero surface micro-pitting", "High thermal crack resistance"]
//     },
//     {
//       number: "02",
//       name: "High-Speed Steel (HSS) Rolls",
//       category: "Intermediate & Pre-Finishing",
//       grade: "Centrifugally Cast PM-HSS7",
//       description: "Dual-layer centrifugally cast composite rolls combining an ultra-wear resistant vanadium carbide alloy working shell with a high-tensile nodular core.",
//       specs: { hardness: "64 - 68 HRC", density: "7.85 g/cm³", trs: "1,250 MPa", wearLife: "+60% Pass Tonnage" },
//       features: ["Centrifugal composite bonding", "High red-hardness stability", "Uniform depth wear profile"]
//     },
//     {
//       number: "03",
//       name: "Cast Steel & Alloy Iron Rolls",
//       category: "Roughing & Slabbing Stands",
//       grade: "Adamite & High-Chromium PM-HiCr20",
//       description: "Heavy section composite sleeves and solid rolls designed to withstand severe cyclical impact loading during breakdown passes without spalling.",
//       specs: { hardness: "55 - 62 HSD", density: "7.75 g/cm³", trs: "980 MPa", wearLife: "+45% Gross Campaign" },
//       features: ["Tough fracture core", "Hypereutectic carbide phase", "Deep working layer"]
//     },
//     {
//       number: "04",
//       name: "Precision Guide Rollers",
//       category: "Entry / Delivery Roller Guides",
//       grade: "Cryo-Stabilized Tool Steel PM-CR24",
//       description: "Sub-zero stabilized guide rollers paired with sealed high-speed ceramic hybrids to eradicate product scratch marks and high-temperature stick friction.",
//       specs: { hardness: "62 - 64 HRC", density: "7.82 g/cm³", trs: "3,100 MPa", wearLife: "3.2x Standard Bearings" },
//       features: ["Dynamic balancing @ 35,000 RPM", "Mirror polished pass line", "Low inertia ceramic bearing"]
//     }
//   ],
//   whyPoints: [
//     {
//       number: "01",
//       title: "Precision-Sourced Products",
//       copy: "Products selected with meticulous attention to chemical composition, micro-grain structure, and certified wear envelopes tailored to your mill pass design.",
//       metric: "99.8% Batch Purity",
//       icon: Microscope
//     },
//     {
//       number: "02",
//       title: "Technical Understanding",
//       copy: "We work directly on-site to analyze groove heat dissipation, water-cooling pressure, and pass schedule dynamics before recommending alloy grades.",
//       metric: "On-Site Mill Audit",
//       icon: Activity
//     },
//     {
//       number: "03",
//       title: "Lower Total Operating Cost",
//       copy: "Longer roll campaign life, significantly fewer line changes, and reduced cobble scrap rates that directly improve gross mill operating economics.",
//       metric: "Up to -35% Roll Cost/Ton",
//       icon: Scale
//     }
//   ],
//   steps: [
//     { number: "01", title: "Understand", sub: "Rolling Conditions", detail: "Analyze mill speed, temperature gradients, cooling water quality, and rolling stock chemistry." },
//     { number: "02", title: "Select", sub: "The Right Material", detail: "Formulate precise carbide binder ratios (Co/Ni) or HSS shell chemistry to match mechanical stresses." },
//     { number: "03", title: "Validate", sub: "Quality & Composition", detail: "100% ultrasonic flaw scanning, Zeiss CMM dimension testing, and hardness mapping across every unit." },
//     { number: "04", title: "Improve", sub: "Roll Life & Performance", detail: "Continuous tracking of tonnage rolled per pass dress, maximizing roll redressing cycles." }
//   ],
//   clients: [
//     "Jindal Steel & Power Ltd.",
//     "Tata Steel BSL Partner Mills",
//     "JSW Steel Associated Facilities",
//     "Electrosteel Steels",
//     "Kamdhenu Ltd. Rolling Units",
//     "Rungta Mines Limited",
//     "Gallantt Ispat Limited",
//     "Shyam Steel Industries",
//     "Rashmi Group Metal Div.",
//     "Jai Balaji Industries",
//     "SMC Power Generation",
//     "Moorgate Metal & Rolling"
//   ]
// };

// // Reusable Framer Motion Variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
//   })
// };

// const slideFromLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
//   })
// };

// const slideFromRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
//   })
// };

// const popIn = {
//   hidden: { opacity: 0, scale: 0.88, y: 20 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
//   })
// };

// export function Hero() {
//   return (
//     <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#edf2f7] text-slate-900 border-b border-slate-200">
//       <div
//         className="absolute inset-0 opacity-[0.38] pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(#cbd5e1 1px, transparent 1px),
//             linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
//             linear-gradient(#e2e8f0 0.5px, transparent 0.5px),
//             linear-gradient(90deg, #e2e8f0 0.5px, transparent 0.5px)
//           `,
//           backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px"
//         }}
//       />

//       <div
//         className="absolute top-10 right-[5%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-40 blur-3xl"
//         style={{
//           background: "radial-gradient(circle, rgba(186, 230, 253, 0.5) 0%, rgba(226, 232, 240, 0.4) 45%, transparent 70%)"
//         }}
//       />

//       {/* Top Precision Status Bar */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         custom={0.5}
//         className="relative z-10 px-6 sm:px-12 pt-5 flex items-center justify-between text-xs font-mono tracking-wider border-b border-slate-200/80 pb-3.5 bg-white/70 backdrop-blur-sm"
//       >
//         <div className="flex items-center gap-3">
//           <div className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
//           </div>
//           <span className="text-slate-800 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
//             PM METALLURGY LABS · LIVE TOLERANCE MONITOR
//           </span>
//           <span className="hidden md:inline text-slate-300">|</span>
//           <span className="hidden md:inline text-[#0284c7] font-semibold">
//             CALIBRATION: ±0.002 MM RUNOUT
//           </span>
//         </div>

//         <div className="flex items-center gap-4 text-slate-600">
//           <span className="hidden sm:inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[11px] font-mono shadow-sm">
//             <ShieldCheck size={13} className="text-[#0284c7]" />
//             EN 10204 3.1 & 3.2 VERIFIED
//           </span>
//         </div>
//       </motion.div>

//       {/* Center Hero Block */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-20 w-full">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={1}
//           className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0369a1] text-xs font-mono font-semibold tracking-wider uppercase mb-8 shadow-sm"
//         >
//           <Crosshair size={13} className="text-[#0284c7]" />
//           <span>Rolling mill solutions</span>
//           <span className="text-slate-300">·</span>
//           <span className="text-slate-700">Est. Sept 2021</span>
//           <span className="text-slate-300">·</span>
//           <span className="text-emerald-700 font-bold">ISO 9001:2015</span>
//         </motion.div>

//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={2}
//           className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 max-w-4xl leading-[1.08]"
//         >
//           Precision that <br />
//           <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#1d4ed8]">
//             performs
//           </span>{" "}
//           <br />
//           under pressure.
//         </motion.h1>

//         <motion.p
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={3}
//           className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
//         >
//           High-performance rolling mill products and technical solutions engineered to improve roll campaign life, eliminate mechanical failure, and deliver micro-metric strip consistency in hot and cold continuous mills.
//         </motion.p>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={4}
//           className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
//         >
//           <Link
//             to="/products"
//             className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-sky-500/25 active:scale-[0.99] bg-gradient-to-r from-[#0284c7] to-[#0369a1]"
//           >
//             <span>Explore Products</span>
//             <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>

//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-semibold transition-all duration-200 shadow-sm"
//           >
//             <span>Talk to Our Team</span>
//             <ArrowUpRight size={16} className="text-[#0284c7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//           </Link>
//         </motion.div>

//         {/* Telemetry Strip Cards: Staggered Pop-In */}
//         <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-8 border-t border-slate-200">
//           {[
//             { icon: Target, label: "Tolerance", value: "±0.002 mm", color: "text-[#0284c7]" },
//             { icon: Gauge, label: "Hardness", value: "88 - 92 HRA", color: "text-[#0284c7]" },
//             { icon: Flame, label: "Shock Rating", value: "1,100°C Max", color: "text-[#0284c7]" },
//             { icon: ShieldCheck, label: "Campaign Life", value: "+65% Tonnage", color: "text-emerald-600" }
//           ].map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.label}
//                 initial="hidden"
//                 animate="visible"
//                 variants={popIn}
//                 custom={5 + index}
//                 className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className={`p-2.5 rounded-lg bg-sky-50 border border-sky-100 ${item.color}`}>
//                   <Icon size={17} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">{item.label}</p>
//                   <p className="text-sm font-mono font-bold text-slate-900">{item.value}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Hero Footnote */}
//       <div className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-md px-6 sm:px-12 py-3.5 flex items-center justify-between text-xs text-slate-600 font-mono">
//         <div className="flex items-center gap-4 sm:gap-6">
//           <span className="text-[#0284c7] font-bold tracking-widest">01 / 04</span>
//           <span className="text-slate-300">·</span>
//           <span className="uppercase text-slate-700 tracking-wider text-[11px] sm:text-xs">
//             Built for the heat of continuous production
//           </span>
//         </div>

//         <a
//           href="#snapshot"
//           className="group flex items-center gap-2.5 text-slate-600 hover:text-[#0284c7] transition-colors"
//           aria-label="Scroll to company snapshot"
//         >
//           <span className="text-[11px] uppercase tracking-wider hidden sm:inline font-semibold">
//             Company Snapshot
//           </span>
//           <div className="p-2 rounded-full border border-slate-200 group-hover:border-[#0284c7] group-hover:bg-sky-50 transition-all shadow-sm">
//             <ArrowDown size={14} className="text-slate-700 group-hover:text-[#0284c7] group-hover:translate-y-0.5 transition-transform" />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// }

// export function CompanySnapshot() {
//   return (
//     <section id="snapshot" className="relative bg-[#f8fafc] py-20 px-6 sm:px-12 text-slate-900 border-b border-slate-200">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 border-b border-slate-200 gap-4"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-2.5 h-2.5 bg-[#0284c7] rotate-45" />
//             <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284c7] font-bold">
//               Engineering Snapshot · Operational Benchmarks
//             </h3>
//           </div>
//           <span className="font-mono text-xs text-slate-500 hidden sm:inline">
//             CALIBRATED ZEISS CMM INSPECTIONS
//           </span>
//         </motion.div>

//         {/* 4 Cards Grid: Alternate Left & Right Slide-In */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {CONFIG.facts.map((fact, index) => {
//             const isLeft = index % 2 === 0;
//             return (
//               <motion.div
//                 key={fact.label}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-60px" }}
//                 variants={isLeft ? slideFromLeft : slideFromRight}
//                 custom={index}
//                 className="group relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7]/80 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
//               >
//                 <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent group-hover:via-[#0284c7] transition-all" />
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
//                     {fact.number}
//                   </span>
//                   <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold">
//                     {fact.label}
//                   </span>
//                 </div>
//                 <div className="text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-[#0369a1] transition-colors tracking-tight font-sans">
//                   {fact.value}
//                 </div>
//                 <p className="mt-3 text-xs text-slate-600 font-normal leading-relaxed">
//                   {fact.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export function AboutPreview() {
//   return (
//     <section id="about" className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//         {/* Left Side: Image Slide from Left */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={slideFromLeft}
//           className="lg:col-span-6 relative"
//         >
//           <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
//             <img
//               src={CONFIG.images.about}
//               alt="Precision metallurgy inspection"
//               className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
//             <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-slate-900 flex items-center justify-between shadow-lg">
//               <div>
//                 <p className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
//                   Material Knowledge / Mill Performance
//                 </p>
//                 <p className="text-xs text-slate-600 font-mono mt-0.5">
//                   Metallographic structure & wear boundary evaluation
//                 </p>
//               </div>
//               <div className="p-2 rounded-lg bg-sky-50 text-[#0284c7]">
//                 <Microscope size={18} />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side: Copy Slide from Right */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={slideFromRight}
//           className="lg:col-span-6 flex flex-col justify-center"
//         >
//           <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-4">
//             <Building2 size={14} />
//             <span>01 / About Us</span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
//             We don't just supply rolling mill products. <br />
//             <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
//               We help mills perform better.
//             </span>
//           </h2>

//           <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
//             <p>
//               <strong className="text-slate-900 font-semibold">Precision Metallurgy India Private Limited</strong> was established in September 2021 to eliminate unnecessary downtime and elevate strip finish standards across hot and cold rolling mills.
//             </p>
//             <p>
//               As a specialized provider of premium Tungsten Carbide Roll Rings, HSS Rolls, and guide solutions, we blend metallurgical chemistry with hands-on shop-floor rolling experience.
//             </p>
//           </div>

//           <div className="mt-8">
//             <Link
//               to="/about"
//               className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors group"
//             >
//               <span>Discover Our Complete Story</span>
//               <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </Link>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export function ProductPreview() {
//   const [selectedIdx, setSelectedIdx] = useState(0);
//   const activeProduct = CONFIG.products[selectedIdx];

//   return (
//     <section id="products" className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
//         >
//           <div>
//             <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-2 block">
//               02 / Products & Solutions
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
//               Products built for <br />
//               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
//                 demanding rolling environments.
//               </span>
//             </h2>
//           </div>
//           <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
//             Selected for the extreme mechanical shock, high thermal cycles, and wear conditions that define modern high-tonnage steel production.
//           </p>
//         </motion.div>

//         {/* Master-Detail Product Workspace */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

//           {/* Left Column: Product Cards Slide from Left */}
//           <div className="lg:col-span-7 flex flex-col gap-3.5">
//             {CONFIG.products.map((product, idx) => {
//               const isSelected = selectedIdx === idx;
//               return (
//                 <motion.div
//                   key={product.number}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-50px" }}
//                   variants={slideFromLeft}
//                   custom={idx}
//                   onClick={() => setSelectedIdx(idx)}
//                   className={`group relative p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${isSelected
//                     ? "bg-white border-[#0284c7] shadow-lg shadow-sky-500/10"
//                     : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"
//                     }`}
//                 >
//                   {isSelected && (
//                     <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#0284c7] rounded-r-full" />
//                   )}

//                   <div className="flex items-start justify-between gap-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isSelected ? "bg-[#0284c7] text-white" : "bg-slate-100 text-slate-700"
//                           }`}>
//                           {product.number}
//                         </span>
//                         <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
//                           {product.category}
//                         </span>
//                       </div>

//                       <h4 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-[#0369a1] transition-colors">
//                         {product.name}
//                       </h4>
//                       <p className="text-xs font-mono text-[#0284c7] font-semibold mt-1">
//                         {product.grade}
//                       </p>
//                       <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
//                         {product.description}
//                       </p>
//                     </div>

//                     <div className={`p-2.5 rounded-xl border transition-all ${isSelected
//                       ? "bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-500/30"
//                       : "border-slate-200 text-slate-400 group-hover:text-slate-800 bg-white"
//                       }`}>
//                       <ArrowUpRight size={18} />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Right Column: HUD Telemetry Slide from Right */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-60px" }}
//             variants={slideFromRight}
//             className="lg:col-span-5 sticky top-24"
//           >
//             <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
//               <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono">
//                 <div className="flex items-center gap-2 text-[#0284c7] font-bold">
//                   <Crosshair size={14} />
//                   <span>CAD TELEMETRY · SPEC {activeProduct.number}</span>
//                 </div>
//                 <span className="text-emerald-700 font-semibold">VERIFIED SPEC</span>
//               </div>

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeProduct.number}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="p-6">
//                     <span className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
//                       Active Mechanical Properties
//                     </span>
//                     <h3 className="text-xl font-bold text-slate-900 mt-1">
//                       {activeProduct.name}
//                     </h3>

//                     <div className="mt-4 grid grid-cols-3 gap-2 text-center">
//                       <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
//                         <span className="block text-[10px] font-mono text-slate-500 uppercase">Hardness</span>
//                         <span className="text-sm font-mono font-bold text-[#0284c7]">{activeProduct.specs.hardness}</span>
//                       </div>
//                       <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
//                         <span className="block text-[10px] font-mono text-slate-500 uppercase">TRS Rating</span>
//                         <span className="text-sm font-mono font-bold text-slate-900">{activeProduct.specs.trs}</span>
//                       </div>
//                       <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
//                         <span className="block text-[10px] font-mono text-slate-500 uppercase">Performance</span>
//                         <span className="text-sm font-mono font-bold text-emerald-600">{activeProduct.specs.wearLife}</span>
//                       </div>
//                     </div>

//                     <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-100">
//                       {activeProduct.features.map((feat, fIdx) => (
//                         <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-600">
//                           <CheckCircle2 size={13} className="text-[#0284c7]" />
//                           <span>{feat}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <Link
//                       to="/contact"
//                       className="mt-6 w-full py-3.5 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
//                     >
//                       <Download size={14} />
//                       <span>Request Full Specification Sheet</span>
//                     </Link>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export function WhyPrecision() {
//   return (
//     <section id="why" className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           className="mb-16"
//         >
//           <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-2 block">
//             03 / Why Precision
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
//             Engineering the value <br />
//             <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
//               behind every roll.
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//           {/* Machine image: Slide in from Left */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-80px" }}
//             variants={slideFromLeft}
//             className="lg:col-span-5"
//           >
//             <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
//               <img
//                 src={CONFIG.images.why}
//                 alt="Industrial rolling equipment"
//                 className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//           </motion.div>

//           {/* 3 Pillars: Slide in from Right sequentially */}
//           <div className="lg:col-span-7 flex flex-col gap-6">
//             {CONFIG.whyPoints.map((pt, idx) => {
//               const Icon = pt.icon;
//               return (
//                 <motion.div
//                   key={pt.number}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-60px" }}
//                   variants={slideFromRight}
//                   custom={idx}
//                   className="group p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="flex items-start gap-5">
//                     <div className="p-3.5 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-100 text-[#0284c7] transition-colors">
//                       <Icon size={22} />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between mb-1.5">
//                         <span className="font-mono text-xs font-bold text-[#0284c7]">
//                           {pt.number} / FOCUS
//                         </span>
//                         <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
//                           {pt.metric}
//                         </span>
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0369a1] transition-colors">
//                         {pt.title}
//                       </h3>
//                       <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
//                         {pt.copy}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export function TechnicalApproach() {
//   return (
//     <section id="approach" className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           className="mb-16"
//         >
//           <span className="text-xs font-mono uppercase text-[#0284c7] font-bold mb-2 block">
//             04 / Our Approach
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
//             From material selection <br />
//             <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
//               to mill performance.
//             </span>
//           </h2>
//         </motion.div>

//         {/* 4 Steps: Pop-In Staggered */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {CONFIG.steps.map((step, idx) => (
//             <motion.div
//               key={step.number}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-60px" }}
//               variants={popIn}
//               custom={idx}
//               className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center font-mono font-bold text-[#0284c7] text-sm group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
//                     {step.number}
//                   </div>
//                   <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
//                     STAGE {idx + 1}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-light text-slate-900 font-sans tracking-tight">
//                   {step.title}
//                 </h3>
//                 <p className="text-xs font-mono font-semibold text-[#0284c7] mt-1 uppercase">
//                   {step.sub}
//                 </p>
//                 <p className="mt-4 text-xs text-slate-600 leading-relaxed font-normal">
//                   {step.detail}
//                 </p>
//               </div>
//               <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
//                 <CheckSquare size={13} className="text-[#0284c7]" />
//                 <span>Standardized Workflow</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export function ClientPreview() {
//   return (
//     <section id="clients" className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
//         >
//           <div>
//             <span className="text-xs font-mono text-[#0284c7] font-bold uppercase mb-2 block">
//               05 / Clients
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
//               Trusted by industrial <br />
//               <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
//                 operators across India.
//               </span>
//             </h2>
//           </div>
//           <Link
//             to="/clients"
//             className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
//           >
//             <span>View all clients</span> <ArrowUpRight size={16} />
//           </Link>
//         </motion.div>

//         {/* 12 Client Badges Grid: Alternating Pop-In */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {CONFIG.clients.map((client, idx) => (
//             <motion.div
//               key={client}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-40px" }}
//               variants={popIn}
//               custom={idx % 4}
//               className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0284c7] hover:shadow-md transition-all flex items-center gap-4 group"
//             >
//               <span className="font-mono text-xs font-bold text-[#0284c7] bg-white group-hover:bg-sky-50 px-2.5 py-1 rounded border border-slate-200 group-hover:border-sky-100">
//                 {String(idx + 1).padStart(2, "0")}
//               </span>
//               <div className="flex-1 overflow-hidden">
//                 <p className="text-sm font-semibold text-slate-800 group-hover:text-[#0369a1] truncate transition-colors">
//                   {client}
//                 </p>
//                 <span className="text-[10px] font-mono uppercase text-slate-400">
//                   Verified Mill Partner
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export function EnquiryCTA() {
//   return (
//     <section id="contact" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#f8fafc] to-[#ffffff] text-slate-900">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl"
//         >
//           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#94a3b8] via-[#0284c7] to-[#94a3b8]" />
//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

//             <div className="lg:col-span-7">
//               <span className="text-xs font-mono uppercase text-[#0284c7] font-bold mb-4 block">
//                 Start a conversation
//               </span>
//               <h2 className="text-3xl sm:text-5xl font-light text-slate-900 leading-tight">
//                 Looking for the right <br />
//                 <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
//                   rolling mill solution?
//                 </span>
//               </h2>
//               <p className="mt-4 text-base text-slate-600 max-w-xl font-normal leading-relaxed">
//                 Speak with our team about your rolling conditions, product requirements, or procurement needs.
//               </p>
//               <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-slate-100 font-mono text-xs">
//                 <div className="flex items-center gap-2 text-slate-700">
//                   <Mail size={16} className="text-[#0284c7]" /> {CONFIG.contact.email}
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-700">
//                   <Phone size={16} className="text-[#0284c7]" /> {CONFIG.contact.phone}
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-5 flex flex-col gap-4">
//               <Link
//                 to="/contact"
//                 className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white font-semibold text-sm font-mono tracking-wide uppercase flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20 hover:brightness-105 transition-all"
//               >
//                 <span>Send an Enquiry</span> <ArrowUpRight size={17} />
//               </Link>
//               <a
//                 href={`tel:${CONFIG.contact.phone}`}
//                 className="w-full py-4 px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm font-mono tracking-wide uppercase transition-all flex items-center justify-center gap-3 shadow-sm"
//               >
//                 <span>Call Metallurgist Directly</span>
//                 <PhoneCall size={16} className="text-[#0284c7]" />
//               </a>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-200 selection:text-slate-900">
//       <main>
//         <Hero />
//         <CompanySnapshot />
//         <AboutPreview />
//         <ProductPreview />
//         <WhyPrecision />
//         <TechnicalApproach />
//         <ClientPreview />
//         <EnquiryCTA />
//       </main>
//     </div>
//   );
// }





import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Crosshair,
  ShieldCheck,
  Target,
  Gauge,
  Flame,
  Microscope,
  Activity,
  Scale,
  CheckCircle2,
  Building2,
  CheckSquare,
  Mail,
  Phone,
  PhoneCall,
  Download,
  Maximize
} from "lucide-react";
import { Link } from "react-router-dom";

// --- CONFIGURATION & DATA ---
const CONFIG = {
  company: "Precision Metallurgy India Pvt. Ltd.",
  brandShort: "PRECISION METALLURGY",
  tagline: "Rolling Mill Solutions · Est. September 2021",
  contact: {
    email: "contact@precisionmetallurgy.in",
    phone: "+91 98200 12345",
  },
  images: {
    about: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    why: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  },
  facts: [
    { number: "01", label: "Established", value: "Sept 2021", desc: "Built with a core engineering vision for enhanced hot rolling mill uptime." },
    { number: "02", label: "Core Focus", value: "Rolling Solutions", desc: "Tungsten carbide rings, composite rolls & high-speed guide equipment." },
    { number: "03", label: "Quality Benchmark", value: "±0.002 mm", desc: "Calibrated micro-metric tolerance with certified 100% CMM inspection." },
    { number: "04", label: "Client Mill Base", value: "25+ Steel Mills", desc: "Trusted by primary and secondary steel producers across industrial hubs in India." }
  ],
  products: [
    {
      number: "01",
      name: "Tungsten Carbide Roll Rings",
      category: "Finishing Stand Wire & Bar",
      grade: "PM-920 Micrograin (WC-Co-Ni)",
      description: "Engineered specifically for high-speed wire rod blocks and rebar finishing stands running at speeds up to 110 m/s with micro-metric groove retention.",
      specs: { hardness: "88.5 - 91.5 HRA", density: "14.85 g/cm³", trs: "2,950 MPa", wearLife: "+85% vs Chilled Iron" },
      features: ["Micrograin sintered carbide", "Zero surface micro-pitting", "High thermal crack resistance"]
    },
    {
      number: "02",
      name: "High-Speed Steel (HSS) Rolls",
      category: "Intermediate & Pre-Finishing",
      grade: "Centrifugally Cast PM-HSS7",
      description: "Dual-layer centrifugally cast composite rolls combining an ultra-wear resistant vanadium carbide alloy working shell with a high-tensile nodular core.",
      specs: { hardness: "64 - 68 HRC", density: "7.85 g/cm³", trs: "1,250 MPa", wearLife: "+60% Pass Tonnage" },
      features: ["Centrifugal composite bonding", "High red-hardness stability", "Uniform depth wear profile"]
    },
    {
      number: "03",
      name: "Cast Steel & Alloy Iron Rolls",
      category: "Roughing & Slabbing Stands",
      grade: "Adamite & High-Chromium PM-HiCr20",
      description: "Heavy section composite sleeves and solid rolls designed to withstand severe cyclical impact loading during breakdown passes without spalling.",
      specs: { hardness: "55 - 62 HSD", density: "7.75 g/cm³", trs: "980 MPa", wearLife: "+45% Gross Campaign" },
      features: ["Tough fracture core", "Hypereutectic carbide phase", "Deep working layer"]
    },
    {
      number: "04",
      name: "Precision Guide Rollers",
      category: "Entry / Delivery Roller Guides",
      grade: "Cryo-Stabilized Tool Steel PM-CR24",
      description: "Sub-zero stabilized guide rollers paired with sealed high-speed ceramic hybrids to eradicate product scratch marks and high-temperature stick friction.",
      specs: { hardness: "62 - 64 HRC", density: "7.82 g/cm³", trs: "3,100 MPa", wearLife: "3.2x Standard Bearings" },
      features: ["Dynamic balancing @ 35,000 RPM", "Mirror polished pass line", "Low inertia ceramic bearing"]
    }
  ],
  whyPoints: [
    {
      number: "01",
      title: "Precision-Sourced Products",
      copy: "Products selected with meticulous attention to chemical composition, micro-grain structure, and certified wear envelopes tailored to your mill pass design.",
      metric: "99.8% Batch Purity",
      icon: Microscope
    },
    {
      number: "02",
      title: "Technical Understanding",
      copy: "We work directly on-site to analyze groove heat dissipation, water-cooling pressure, and pass schedule dynamics before recommending alloy grades.",
      metric: "On-Site Mill Audit",
      icon: Activity
    },
    {
      number: "03",
      title: "Lower Total Operating Cost",
      copy: "Longer roll campaign life, significantly fewer line changes, and reduced cobble scrap rates that directly improve gross mill operating economics.",
      metric: "Up to -35% Roll Cost/Ton",
      icon: Scale
    }
  ],
  steps: [
    { number: "01", title: "Understand", sub: "Rolling Conditions", detail: "Analyze mill speed, temperature gradients, cooling water quality, and rolling stock chemistry." },
    { number: "02", title: "Select", sub: "The Right Material", detail: "Formulate precise carbide binder ratios (Co/Ni) or HSS shell chemistry to match mechanical stresses." },
    { number: "03", title: "Validate", sub: "Quality & Composition", detail: "100% ultrasonic flaw scanning, Zeiss CMM dimension testing, and hardness mapping across every unit." },
    { number: "04", title: "Improve", sub: "Roll Life & Performance", detail: "Continuous tracking of tonnage rolled per pass dress, maximizing roll redressing cycles." }
  ],
  clients: [
    "Jindal Steel & Power Ltd.",
    "Tata Steel BSL Partner Mills",
    "JSW Steel Associated Facilities",
    "Electrosteel Steels",
    "Kamdhenu Ltd. Rolling Units",
    "Rungta Mines Limited",
    "Gallantt Ispat Limited",
    "Shyam Steel Industries",
    "Rashmi Group Metal Div.",
    "Jai Balaji Industries",
    "SMC Power Generation",
    "Moorgate Metal & Rolling"
  ]
};

// --- FRAMER MOTION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

const popIn = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

// --- 3D INTERACTIVE RING COMPONENT ---
function InteractiveTungstenRing() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 50;
    const rotateX = ((y / rect.height) - 0.5) * -50;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 }); // Snap back to center
  };

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto hidden lg:flex items-center justify-center">
      <div className="absolute inset-0 bg-sky-200/30 rounded-full blur-[80px] pointer-events-none animate-pulse" />

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full"
        style={{ perspective: "1000px" }}
      >
        <div
          className="w-full h-full rounded-full border border-slate-200/60 bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl cursor-crosshair group"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
            transition: isHovering ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* YOUR LOCAL IMAGE GOES HERE */}
          <img
            src="/tungsten-ring.png"
            alt="Tungsten Ring"
            className="w-[75%] h-[75%] object-contain drop-shadow-2xl"
            style={{
              transform: "translateZ(80px)",
              filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.25))"
            }}
          />

          <div
            className="absolute top-[20%] right-[5%] bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xl flex items-center gap-2 pointer-events-none"
            style={{ transform: "translateZ(120px)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-ping" />
            <span className="text-[11px] font-mono font-bold text-slate-800 tracking-wider">HRA 91.5</span>
          </div>

          <div
            className="absolute bottom-[25%] left-[5%] bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xl flex items-center gap-2 pointer-events-none"
            style={{ transform: "translateZ(60px)" }}
          >
            <Crosshair size={12} className="text-[#0284c7]" />
            <span className="text-[11px] font-mono font-bold text-slate-800 tracking-wider">±0.002mm Runout</span>
          </div>

          <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#0284c7]/40 group-hover:border-[#0284c7] transition-colors" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#0284c7]/40 group-hover:border-[#0284c7] transition-colors" />

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize size={10} /> Interact 3D Model
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HERO SECTION ---
export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#edf2f7] text-slate-900 border-b border-slate-200 pt-20">
      <div
        className="absolute inset-0 opacity-[0.38] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#cbd5e1 1px, transparent 1px),
            linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
            linear-gradient(#e2e8f0 0.5px, transparent 0.5px),
            linear-gradient(90deg, #e2e8f0 0.5px, transparent 0.5px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px"
        }}
      />
      <div
        className="absolute top-10 right-[5%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(186, 230, 253, 0.5) 0%, rgba(226, 232, 240, 0.4) 45%, transparent 70%)" }}
      />

      <div className="relative z-10 px-6 sm:px-12 pt-5 flex items-center justify-between text-xs font-mono tracking-wider border-b border-slate-200/80 pb-3.5 bg-white/70 backdrop-blur-sm">
        <div className="flex items-center gap-3 animate-in fade-in duration-1000">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
          </div>
          <span className="text-slate-800 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            PM METALLURGY LABS · LIVE TOLERANCE MONITOR
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline text-[#0284c7] font-semibold">
            CALIBRATION: ±0.002 MM RUNOUT
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-600 animate-in fade-in duration-1000">
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[11px] font-mono shadow-sm">
            <ShieldCheck size={13} className="text-[#0284c7]" />
            EN 10204 3.1 & 3.2 VERIFIED
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-20 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0369a1] text-xs font-mono font-semibold tracking-wider uppercase mb-8 shadow-sm animate-in slide-in-from-bottom-4 fade-in duration-700">
              <Crosshair size={13} className="text-[#0284c7]" />
              <span>Rolling mill solutions</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-700">Est. Sept 2021</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-bold">ISO 9001:2015</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.08] animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150 fill-mode-both">
              Precision that
              <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#1d4ed8]">
                performs
              </span>
              <br />
              under pressure.
            </h1>

            <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-lg font-normal leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300 fill-mode-both">
              High-performance rolling mill products and technical solutions engineered to improve roll campaign life, eliminate mechanical failure, and deliver micro-metric strip consistency.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500 fill-mode-both">
              <Link
                to="/products"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-sky-500/25 active:scale-[0.99] bg-gradient-to-r from-[#0284c7] to-[#0369a1]"
              >
                <span>Explore Products</span>
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight size={16} className="text-[#0284c7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-20 animate-in zoom-in-95 fade-in duration-1000 delay-300 fill-mode-both">
            <InteractiveTungstenRing />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-200">
          {[
            { icon: Target, label: "Tolerance", value: "±0.002 mm", color: "text-[#0284c7]" },
            { icon: Gauge, label: "Hardness", value: "88 - 92 HRA", color: "text-[#0284c7]" },
            { icon: Flame, label: "Shock Rating", value: "1,100°C Max", color: "text-[#0284c7]" },
            { icon: ShieldCheck, label: "Campaign Life", value: "+65% Tonnage", color: "text-emerald-600" }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-in slide-in-from-bottom-4 fade-in duration-700 fill-mode-both"
                style={{ animationDelay: `${700 + (i * 100)}ms` }}
              >
                <div className={`p-2.5 rounded-lg bg-sky-50 border border-sky-100 ${item.color}`}>
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">{item.label}</p>
                  <p className="text-sm font-mono font-bold text-slate-900">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-md px-6 sm:px-12 py-3.5 flex items-center justify-between text-xs text-slate-600 font-mono animate-in fade-in duration-1000 delay-1000 fill-mode-both">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-[#0284c7] font-bold tracking-widest">01 / 04</span>
          <span className="text-slate-300">·</span>
          <span className="uppercase text-slate-700 tracking-wider text-[11px] sm:text-xs">
            Built for the heat of continuous production
          </span>
        </div>
        <a
          href="#snapshot"
          className="group flex items-center gap-2.5 text-slate-600 hover:text-[#0284c7] transition-colors"
        >
          <span className="text-[11px] uppercase tracking-wider hidden sm:inline font-semibold">
            Company Snapshot
          </span>
          <div className="p-2 rounded-full border border-slate-200 group-hover:border-[#0284c7] group-hover:bg-sky-50 transition-all shadow-sm">
            <ArrowDown size={14} className="text-slate-700 group-hover:text-[#0284c7] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
}

export function CompanySnapshot() {
  return (
    <section id="snapshot" className="relative bg-[#f8fafc] py-20 px-6 sm:px-12 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 border-b border-slate-200 gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#0284c7] rotate-45" />
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Engineering Snapshot · Operational Benchmarks
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-500 hidden sm:inline">
            CALIBRATED ZEISS CMM INSPECTIONS
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.facts.map((fact, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={fact.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={isLeft ? slideFromLeft : slideFromRight}
                custom={index}
                className="group relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7]/80 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent group-hover:via-[#0284c7] transition-all" />
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {fact.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold">
                    {fact.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-[#0369a1] transition-colors tracking-tight font-sans">
                  {fact.value}
                </div>
                <p className="mt-3 text-xs text-slate-600 font-normal leading-relaxed">
                  {fact.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromLeft}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
            <img
              src={CONFIG.images.about}
              alt="Precision metallurgy inspection"
              className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-slate-900 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
                  Material Knowledge / Mill Performance
                </p>
                <p className="text-xs text-slate-600 font-mono mt-0.5">
                  Metallographic structure & wear boundary evaluation
                </p>
              </div>
              <div className="p-2 rounded-lg bg-sky-50 text-[#0284c7]">
                <Microscope size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromRight}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-4">
            <Building2 size={14} />
            <span>01 / About Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
            We don't just supply rolling mill products. <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
              We help mills perform better.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-slate-900 font-semibold">Precision Metallurgy India Private Limited</strong> was established in September 2021 to eliminate unnecessary downtime and elevate strip finish standards across hot and cold rolling mills.
            </p>
            <p>
              As a specialized provider of premium Tungsten Carbide Roll Rings, HSS Rolls, and guide solutions, we blend metallurgical chemistry with hands-on shop-floor rolling experience.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors group"
            >
              <span>Discover Our Complete Story</span>
              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ProductPreview() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProduct = CONFIG.products[selectedIdx];

  return (
    <section id="products" className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-2 block">
              02 / Products & Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
              Products built for <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
                demanding rolling environments.
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Selected for the extreme mechanical shock, high thermal cycles, and wear conditions that define modern high-tonnage steel production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {CONFIG.products.map((product, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <motion.div
                  key={product.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={slideFromLeft}
                  custom={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${isSelected
                    ? "bg-white border-[#0284c7] shadow-lg shadow-sky-500/10"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"
                    }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#0284c7] rounded-r-full" />
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isSelected ? "bg-[#0284c7] text-white" : "bg-slate-100 text-slate-700"}`}>
                          {product.number}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                          {product.category}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-[#0369a1] transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs font-mono text-[#0284c7] font-semibold mt-1">
                        {product.grade}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className={`p-2.5 rounded-xl border transition-all ${isSelected
                      ? "bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-500/30"
                      : "border-slate-200 text-slate-400 group-hover:text-slate-800 bg-white"
                      }`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideFromRight}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#0284c7] font-bold">
                  <Crosshair size={14} />
                  <span>CAD TELEMETRY · SPEC {activeProduct.number}</span>
                </div>
                <span className="text-emerald-700 font-semibold">VERIFIED SPEC</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#0284c7] font-bold">
                      Active Mechanical Properties
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">
                      {activeProduct.name}
                    </h3>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block text-[10px] font-mono text-slate-500 uppercase">Hardness</span>
                        <span className="text-sm font-mono font-bold text-[#0284c7]">{activeProduct.specs.hardness}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block text-[10px] font-mono text-slate-500 uppercase">TRS Rating</span>
                        <span className="text-sm font-mono font-bold text-slate-900">{activeProduct.specs.trs}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block text-[10px] font-mono text-slate-500 uppercase">Performance</span>
                        <span className="text-sm font-mono font-bold text-emerald-600">{activeProduct.specs.wearLife}</span>
                      </div>
                    </div>
                    <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-100">
                      {activeProduct.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-600">
                          <CheckCircle2 size={13} className="text-[#0284c7]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="mt-6 w-full py-3.5 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
                    >
                      <Download size={14} />
                      <span>Request Full Specification Sheet</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhyPrecision() {
  return (
    <section id="why" className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-wider text-[#0284c7] font-bold uppercase mb-2 block">
            03 / Why Precision
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
            Engineering the value <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
              behind every roll.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideFromLeft}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src={CONFIG.images.why}
                alt="Industrial rolling equipment"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {CONFIG.whyPoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={pt.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={slideFromRight}
                  custom={idx}
                  className="group p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-100 text-[#0284c7] transition-colors">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-[#0284c7]">
                          {pt.number} / FOCUS
                        </span>
                        <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          {pt.metric}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0369a1] transition-colors">
                        {pt.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                        {pt.copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnicalApproach() {
  return (
    <section id="approach" className="py-24 px-6 sm:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase text-[#0284c7] font-bold mb-2 block">
            04 / Our Approach
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
            From material selection <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
              to mill performance.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={popIn}
              custom={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center font-mono font-bold text-[#0284c7] text-sm group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    {step.number}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    STAGE {idx + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-slate-900 font-sans tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#0284c7] mt-1 uppercase">
                  {step.sub}
                </p>
                <p className="mt-4 text-xs text-slate-600 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <CheckSquare size={13} className="text-[#0284c7]" />
                <span>Standardized Workflow</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientPreview() {
  return (
    <section id="clients" className="py-24 px-6 sm:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-mono text-[#0284c7] font-bold uppercase mb-2 block">
              05 / Clients
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
              Trusted by industrial <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
                operators across India.
              </span>
            </h2>
          </div>
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
          >
            <span>View all clients</span> <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CONFIG.clients.map((client, idx) => (
            <motion.div
              key={client}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={popIn}
              custom={idx % 4}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0284c7] hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <span className="font-mono text-xs font-bold text-[#0284c7] bg-white group-hover:bg-sky-50 px-2.5 py-1 rounded border border-slate-200 group-hover:border-sky-100">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-slate-800 group-hover:text-[#0369a1] truncate transition-colors">
                  {client}
                </p>
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  Verified Mill Partner
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnquiryCTA() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#f8fafc] to-[#ffffff] text-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#94a3b8] via-[#0284c7] to-[#94a3b8]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase text-[#0284c7] font-bold mb-4 block">
                Start a conversation
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-slate-900 leading-tight">
                Looking for the right <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#0284c7]">
                  rolling mill solution?
                </span>
              </h2>
              <p className="mt-4 text-base text-slate-600 max-w-xl font-normal leading-relaxed">
                Speak with our team about your rolling conditions, product requirements, or procurement needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-slate-100 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail size={16} className="text-[#0284c7]" /> {CONFIG.contact.email}
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone size={16} className="text-[#0284c7]" /> {CONFIG.contact.phone}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link
                to="/contact"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white font-semibold text-sm font-mono tracking-wide uppercase flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20 hover:brightness-105 transition-all"
              >
                <span>Send an Enquiry</span> <ArrowUpRight size={17} />
              </Link>
              <a
                href={`tel:${CONFIG.contact.phone}`}
                className="w-full py-4 px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm font-mono tracking-wide uppercase transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <span>Call Metallurgist Directly</span>
                <PhoneCall size={16} className="text-[#0284c7]" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-200 selection:text-slate-900">
      <main>
        <Hero />
        <CompanySnapshot />
        <AboutPreview />
        <ProductPreview />
        <WhyPrecision />
        <TechnicalApproach />
        <ClientPreview />
        <EnquiryCTA />
      </main>
    </div>
  );
}