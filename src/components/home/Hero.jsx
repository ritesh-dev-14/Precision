import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../assets/slide-1.webp";
import slide2 from "../../assets/slide-2.webp";
import slide3 from "../../assets/slide-3.webp";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- FACTUAL CONFIGURATION & DATA (PRESERVED ACCURATELY) ---
const CONFIG = {
  company: "PRECISION METALLURGY INDIA PVT. LTD.",
  tagline: "Engineered for demanding rolling mill environments.",
  established: "September 2021",
  contacts: {
    email: "sales@precisionmetallurgy.com",
    phone: "+91 89688 26055",
    regAddress: "Plot-336, Sector-56, Kundli, Sonipat, Haryana-131028",
    corpAddress: "SCF 13-14, 2nd Floor, Above HDFC Bank, BRS Nagar, Ludhiana, 141021"
  },
  products: [
    {
      id: "01",
      name: "Tungsten Carbide Rings",
      category: "Wire Rod & Rebar Finishing Blocks",
      description:
        "High-density micrograin sintered carbide rings engineered to withstand severe thermal shock, high rolling velocities (up to 110 m/s), and micro-pitting in finishing stands.",
      image: slide1,
      specs: [
        "Sintered micrograin carbide matrix",
        "Tolerates velocities up to 110 m/s",
        "Resists micro-pitting & severe thermal shock"
      ],
      route: "/products"
    },
    {
      id: "02",
      name: "High-Speed Steel (HSS) Rolls",
      category: "Intermediate & Pre-Finishing Stands",
      description:
        "Centrifugally cast composite rolls combining a vanadium-rich carbide shell with a high-tensile core for uniform pass wear and extended campaign tonnage.",
      image: slide2,
      specs: [
        "Centrifugally cast composite bond",
        "Vanadium-rich carbide outer shell",
        "Uniform pass wear profile across campaigns"
      ],
      route: "/products"
    },
    {
      id: "03",
      name: "Rolling Mill Hardware",
      category: "Guide & Pass-Line Assemblies",
      description:
        "Precision-machined roll sleeves, entry guide assemblies, and specialized metallurgical hardware customized to eliminate pass line surface scoring.",
      image: slide3,
      specs: [
        "Tight dimensional tolerances",
        "Custom application-specific alloys",
        "Eliminates pass-line surface scoring"
      ],
      route: "/products"
    }
  ],
  principles: [
    {
      num: "01",
      title: "Dimensional & Metallurgical Precision",
      desc: "Meticulous attention to microscopic grain structure, chemical tolerances, and tight machining tolerances."
    },
    {
      num: "02",
      title: "Disciplined Quality Control",
      desc: "Pre-supply verification checking every batch against intended operational stress and thermal requirements."
    },
    {
      num: "03",
      title: "Application-Specific Depth",
      desc: "Material recommendations informed by actual rolling mill speeds, temperature cycles, and wear dynamics."
    },
    {
      num: "04",
      title: "Operational Dependability",
      desc: "Reliable product availability, responsive technical communication, and continuous post-supply assistance."
    }
  ],
  process: [
    {
      step: "01",
      name: "Understand",
      detail: "Evaluating pass wear patterns, operational speeds, thermal profiles, and section geometries."
    },
    {
      step: "02",
      name: "Identify",
      detail: "Matching application dynamics with exact alloy chemistries, carbide grain sizes, and hardness ranges."
    },
    {
      step: "03",
      name: "Supply",
      detail: "Coordinating batch-verified material delivery adhering strictly to scheduled downtime windows."
    },
    {
      step: "04",
      name: "Support",
      detail: "Maintaining open communication to track campaign tonnage and optimize subsequent component life."
    }
  ]
};

const transitionEase = [0.16, 1, 0.3, 1];

// --- 1. REFINED architectural NAVIGATION ---
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#F5F5F2]/90 backdrop-blur-sm border-[#D8D9D7] py-4"
          : "bg-[#F5F5F2] border-transparent py-7"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex items-center justify-between">
        <Link to="/" className="group flex flex-col">
          <span className="text-xs font-bold tracking-wider text-[#111111] uppercase font-mono">
            PRECISION METALLURGY
          </span>
          <span className="text-[10px] tracking-widest text-[#6B6D6F] font-mono">
            INDIA PVT. LTD.
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-12 text-xs font-medium text-[#202225] tracking-widest uppercase font-mono">
          <Link to="/products" className="hover:text-[#174BFF] transition-colors">
            Products
          </Link>
          <Link to="/products" className="hover:text-[#174BFF] transition-colors">
            Applications
          </Link>
          <Link to="/contact" className="hover:text-[#174BFF] transition-colors">
            Engineering
          </Link>
          <Link to="/contact" className="hover:text-[#174BFF] transition-colors">
            About
          </Link>
        </nav>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#174BFF] transition-colors group"
        >
          <span>Technical Inquiry</span>
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </header>
  );
}

// --- 2. EDITORIAL HERO (NO CARDS, OVERSIZED CROP & TYPOGRAPHY) ---
export function Hero() {
  const slides = [
    {
      image: slide1,
      id: "01 / 03",
      name: "TUNGSTEN CARBIDE RINGS",
      application: "FINISHING BLOCK APPLICATION",
      metric: "110 M/S VELOCITY"
    },
    {
      image: slide2,
      id: "02 / 03",
      name: "HIGH-SPEED STEEL ROLLS",
      application: "INTERMEDIATE STANDS",
      metric: "CENTRIFUGAL CAST MATRIX"
    },
    {
      image: slide3,
      id: "03 / 03",
      name: "ROLLING MILL HARDWARE",
      application: "GUIDE & PASS-LINE ASSEMBLIES",
      metric: "MICRON TOLERANCE"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-[#F5F5F2] pt-28 lg:pt-36 pb-16 flex flex-col justify-between overflow-hidden border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 w-full my-auto">
        
        {/* Top Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D8D9D7] pb-4 mb-8 lg:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174BFF]" />
            <span className="text-[11px] font-mono tracking-widest text-[#202225] uppercase">
              PRECISION METALLURGY INDIA PVT. LTD.
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-[#6B6D6F] uppercase mt-2 sm:mt-0">
            EST. SEPTEMBER 2021
          </span>
        </div>

        {/* Oversized Headline */}
        <div className="mb-12 lg:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className="text-[clamp(3.5rem,8.5vw,8.5rem)] font-normal text-[#111111] leading-[0.92] tracking-tighter uppercase"
          >
            ENGINEERED <br />
            FOR EXTREME <br />
            PRECISION.
          </motion.h1>
        </div>

        {/* Oversized Industrial Crop & Overlapping Metadata */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/9] bg-[#FFFFFF] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].name}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1, ease: transitionEase }}
                  className="w-full h-full object-cover filter contrast-[1.03]"
                />
              </AnimatePresence>

              {/* Minimal Slide Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D8D9D7]">
                <motion.div
                  key={activeSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6.5, ease: "linear" }}
                  className="h-full bg-[#174BFF]"
                />
              </div>
            </div>
          </div>

          {/* Side Editorial Details & Slide Navigation */}
          <div className="lg:col-span-4 space-y-8 lg:pl-6">
            <div className="space-y-4 border-t border-[#111111] pt-4 font-mono">
              <div className="flex justify-between items-center text-[10px] text-[#6B6D6F] uppercase tracking-widest">
                <span>SPECIFICATION METADATA</span>
                <span className="text-[#174BFF]">{slides[activeSlide].id}</span>
              </div>
              <h2 className="text-xl font-medium text-[#111111] tracking-tight uppercase">
                {slides[activeSlide].name}
              </h2>
              <div className="text-xs text-[#202225] space-y-1">
                <p>APPLICATION: {slides[activeSlide].application}</p>
                <p>TOLERANCE: {slides[activeSlide].metric}</p>
              </div>
            </div>

            <p className="text-xs text-[#6B6D6F] leading-relaxed font-normal">
              High-performance metallurgical components designed for severe thermal loads, extreme rolling speeds, and extended campaign tonnage in continuous rolling operations.
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-[#D8D9D7] pt-4">
              <div className="flex gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`text-[11px] font-mono px-2 py-0.5 border transition-all ${
                      activeSlide === idx
                        ? "border-[#111111] bg-[#111111] text-white"
                        : "border-[#D8D9D7] text-[#6B6D6F] hover:border-[#111111]"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#174BFF] transition-colors"
              >
                <span>CATALOGUE</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// --- 3. EDITORIAL STATEMENT SECTION (NO TWO-COLUMN CARDS) ---
export function EngineeringStatement() {
  return (
    <section className="py-32 bg-[#FFFFFF] border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="max-w-5xl">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block mb-8">
            01 // METALLURGICAL STATEMENT
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: transitionEase }}
            className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#111111] leading-[1.05] tracking-tight mb-12"
          >
            Precision is not a specification we add at the end. <br />
            <span className="text-[#6B6D6F]">
              It is built into the material, the geometry, and the application dynamics.
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#D8D9D7] text-sm text-[#202225] font-normal leading-relaxed">
            <p>
              Established in September 2021, Precision Metallurgy India Pvt. Ltd. supplies high-grade metallurgical components engineered specifically for wire rod, rebar, and merchant bar hot rolling mills across India and international markets.
            </p>
            <p>
              By aligning carbide grain distributions, centrifugally cast roll chemistries, and custom roll sleeve tolerances with real operational thermal profiles, we help mill operators minimize unplanned pass downtime and maximize campaign output.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- 4. VISUAL PRODUCT CATALOGUE & PERSISTENT INDEX ---
export function ProductCatalogue() {
  const [activeProduct, setActiveProduct] = useState("01");

  return (
    <section className="py-32 bg-[#F5F5F2] border-b border-[#D8D9D7] relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Header & Sticky Minimal Index */}
        <div className="sticky top-20 z-30 bg-[#F5F5F2]/95 backdrop-blur-sm py-4 border-b border-[#D8D9D7] mb-20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF]">
            02 // PRODUCT CATALOGUE
          </span>

          <div className="flex items-center gap-6 font-mono text-xs">
            {CONFIG.products.map((p) => (
              <a
                key={p.id}
                href={`#product-${p.id}`}
                onClick={() => setActiveProduct(p.id)}
                className={`transition-colors ${
                  activeProduct === p.id
                    ? "text-[#111111] font-bold underline underline-offset-8 decoration-[#174BFF]"
                    : "text-[#6B6D6F] hover:text-[#111111]"
                }`}
              >
                {p.id} {p.name.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Asymmetric Product Presentation */}
        <div className="space-y-40">
          {CONFIG.products.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={p.id}
                id={`product-${p.id}`}
                className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Large Oversized Visual */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] bg-[#FFFFFF] overflow-hidden group">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-6 left-6 font-mono text-xs bg-[#111111] text-white px-3 py-1 uppercase tracking-widest">
                      {p.id} // {p.category}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B6D6F] block">
                    {p.category}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-normal text-[#111111] uppercase tracking-tight">
                    {p.name}
                  </h3>

                  <p className="text-sm text-[#202225] leading-relaxed font-normal">
                    {p.description}
                  </p>

                  <div className="border-t border-[#D8D9D7] pt-6 space-y-3 font-mono text-xs">
                    <span className="text-[#6B6D6F] uppercase block tracking-widest text-[10px]">
                      TECHNICAL SPECIFICATIONS
                    </span>
                    {p.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3 text-[#111111]">
                        <span className="w-1 h-1 bg-[#174BFF]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to={p.route}
                      className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#111111] border-b border-[#111111] pb-1 hover:text-[#174BFF] hover:border-[#174BFF] transition-colors group"
                    >
                      <span>VIEW PRODUCT SPECIFICATIONS</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// --- 5. TECHNICAL ENGINEERING CONDITIONS (NO FAKE SCORES) ---
export function EngineeringConditions() {
  const conditions = [
    {
      num: "01",
      title: "THERMAL LOAD",
      desc: "Rapid cyclic heating up to 1100°C followed by high-pressure cooling creates severe surface micro-cracking risks without optimized binder stability."
    },
    {
      num: "02",
      title: "ROLLING VELOCITY",
      desc: "Finishing blocks operating at speeds up to 110 m/s require exact micro-structural density to eliminate centrifugal ring degradation."
    },
    {
      num: "03",
      title: "WEAR DYNAMICS",
      desc: "Abrasive pass wear is mitigated by selecting specific vanadium and tungsten carbide grain distributions tailored to rolled section grades."
    },
    {
      num: "04",
      title: "DIMENSIONAL CONTROL",
      desc: "Micron-level machining tolerances prevent pass alignment deviations, ensuring uniform bar surface quality across extended campaigns."
    }
  ];

  return (
    <section className="py-32 bg-[#FFFFFF] border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="max-w-3xl mb-20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block mb-3">
            03 // TECHNICAL ANALYSIS
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#111111] tracking-tight uppercase leading-tight">
            Performance begins with understanding the conditions.
          </h2>
        </div>

        {/* Technical Connected System Visual */}
        <div className="border-t border-[#111111] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conditions.map((c) => (
              <div key={c.num} className="space-y-4 relative border-l border-[#D8D9D7] pl-6 py-2">
                <span className="text-xs font-mono text-[#174BFF] block">
                  {c.num} //
                </span>
                <h3 className="text-base font-bold text-[#111111] uppercase tracking-wider font-mono">
                  {c.title}
                </h3>
                <p className="text-xs text-[#6B6D6F] leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Schematic Process Line */}
          <div className="mt-20 p-8 bg-[#F5F5F2] border border-[#D8D9D7] font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-6 text-[#202225]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#174BFF]" />
              <span className="uppercase tracking-widest font-bold">ROLLING CONDITIONS</span>
            </div>
            <span className="hidden md:inline text-[#6B6D6F]">→</span>
            <span className="uppercase tracking-widest">MATERIAL SELECTION</span>
            <span className="hidden md:inline text-[#6B6D6F]">→</span>
            <span className="uppercase tracking-widest">MICRON TOLERANCE</span>
            <span className="hidden md:inline text-[#6B6D6F]">→</span>
            <span className="uppercase tracking-widest font-bold text-[#174BFF]">EXTENDED CAMPAIGN TONNAGE</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- 6. APPLICATIONS RELATIONSHIP DIAGRAM ---
export function ApplicationsMap() {
  const applications = [
    {
      millSection: "WIRE ROD & REBAR FINISHING BLOCK",
      component: "TUNGSTEN CARBIDE RINGS",
      benefit: "High thermal fatigue resistance at 110 m/s finishing speeds."
    },
    {
      millSection: "INTERMEDIATE & PRE-FINISHING STANDS",
      component: "HSS COMPOSITE ROLLS",
      benefit: "Centrifugally cast shell ensures uniform pass wear across long campaigns."
    },
    {
      millSection: "GUIDE & PASS-LINE ASSEMBLIES",
      component: "ROLLING MILL HARDWARE",
      benefit: "Custom alloy sleeves reduce stock scratching and surface defects."
    }
  ];

  return (
    <section className="py-32 bg-[#F5F5F2] border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="mb-20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block mb-3">
            04 // MILL INTEGRATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-tight">
            Application Matrix
          </h2>
        </div>

        {/* Architectural Grid / Line System (No Cards) */}
        <div className="border-t border-b border-[#111111] divide-y divide-[#D8D9D7]">
          {applications.map((app, i) => (
            <div
              key={i}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center font-mono text-xs hover:bg-[#FFFFFF] transition-colors px-4"
            >
              <div className="lg:col-span-4 text-[#6B6D6F] uppercase tracking-wider">
                {app.millSection}
              </div>
              <div className="lg:col-span-1 text-[#174BFF] hidden lg:block">→</div>
              <div className="lg:col-span-3 font-bold text-[#111111] uppercase tracking-wider">
                {app.component}
              </div>
              <div className="lg:col-span-4 text-[#202225] font-sans text-xs">
                {app.benefit}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// --- 7. FULL-WIDTH EDITORIAL BANNER ---
export function FullWidthEditorial() {
  return (
    <section className="relative h-[75vh] min-h-[500px] bg-[#111111] overflow-hidden flex items-center justify-center border-b border-[#D8D9D7]">
      <img
        src={slide1}
        alt="Precision Metallurgy"
        className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale contrast-125"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block">
          05 // OPERATIONAL METALLURGY
        </span>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tighter uppercase leading-none">
          PRECISION <br />
          UNDER PRESSURE.
        </h2>
        <p className="text-xs font-mono text-white/70 tracking-widest uppercase max-w-md mx-auto pt-4">
          Tungsten Carbide • High-Speed Steel • Custom Mill Assemblies
        </p>
      </div>

      <div className="absolute bottom-6 left-8 font-mono text-[10px] text-white/40 uppercase tracking-widest">
        PRECISION METALLURGY INDIA PVT. LTD. // PUBLICATION REF: 2026-PMI
      </div>
    </section>
  );
}

// --- 8. WHY PRECISION EDITORIAL LIST (NO CARDS) ---
export function EditorialPrinciples() {
  return (
    <section className="py-32 bg-[#FFFFFF] border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="max-w-2xl mb-20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block mb-3">
            06 // CORE DISCIPLINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-tight">
            Why Precision Matters
          </h2>
        </div>

        <div className="border-t border-[#111111] divide-y divide-[#D8D9D7]">
          {CONFIG.principles.map((p) => (
            <div
              key={p.num}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-[#F5F5F2] transition-colors px-4"
            >
              <div className="lg:col-span-2 text-2xl font-mono text-[#174BFF]">
                {p.num}
              </div>
              <div className="lg:col-span-4 text-2xl font-normal text-[#111111] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                {p.title}
              </div>
              <div className="lg:col-span-6 text-sm text-[#6B6D6F] leading-relaxed">
                {p.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// --- 9. HORIZONTAL PROCESS DRAWING & QUALITY SPLIT ---
export function ProcessAndQuality() {
  return (
    <section className="py-32 bg-[#F5F5F2] border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Horizontal Engineering Sequence */}
        <div className="mb-32">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block mb-3">
            07 // SUPPLY METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#111111] uppercase tracking-tight mb-16">
            Engineering Sequence
          </h2>

          <div className="relative border-t border-[#111111] pt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {CONFIG.process.map((step) => (
              <div key={step.step} className="space-y-3 font-mono">
                <span className="text-xs text-[#174BFF] block font-bold">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-[#111111] uppercase tracking-wider">
                  {step.name}
                </h3>
                <p className="text-xs text-[#6B6D6F] leading-relaxed font-sans font-normal">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#111111] pt-24">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block mb-4">
              08 // QUALITY PROOF
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal text-[#111111] uppercase tracking-tight leading-[1.02]">
              QUALITY IS BUILT <br />
              INTO THE PROCESS.
            </h2>
          </div>

          <div className="lg:col-span-6 divide-y divide-[#D8D9D7]">
            {[
              { title: "MATERIAL CHEMISTRY", desc: "Batch micrograin binder ratios and carbide distribution verification." },
              { title: "DIMENSIONAL TOLERANCE", desc: "Micron-level concentricity and pass geometry checks." },
              { title: "APPLICATION ALIGNMENT", desc: "Grade recommendations tailored to exact rolling speeds and section dynamics." },
              { title: "SUPPLY DEPENDABILITY", desc: "Structured dispatch planning aligned with planned mill maintenance turnarounds." }
            ].map((item, i) => (
              <div key={i} className="py-6 space-y-1">
                <span className="text-[10px] font-mono text-[#174BFF] uppercase tracking-widest">
                  CHECKPOINT 0{i + 1}
                </span>
                <h3 className="text-base font-bold text-[#111111] font-mono uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B6D6F] font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// --- 10. RESTRAINED COMPANY STORY SECTION ---
export function CompanyStory() {
  return (
    <section className="py-32 bg-[#FFFFFF] border-b border-[#D8D9D7]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          
          <div className="lg:col-span-5 font-mono">
            <span className="text-[11px] uppercase tracking-widest text-[#174BFF] block mb-2">
              09 // COMPANY PROFILE
            </span>
            <div className="text-[clamp(4rem,10vw,9rem)] font-normal text-[#111111] leading-none tracking-tighter">
              2021
            </div>
            <span className="text-xs text-[#6B6D6F] uppercase tracking-widest block pt-2">
              ESTABLISHED IN SONIPAT, HARYANA
            </span>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm text-[#202225] leading-relaxed font-normal">
            <h3 className="text-2xl font-normal text-[#111111] uppercase tracking-tight">
              A serious technical partner for demanding mill operations.
            </h3>
            <p>
              Precision Metallurgy India Pvt. Ltd. was founded with a targeted focus: providing high-grade carbide, centrifugally cast HSS, and mill hardware built to withstand the rigorous wear environment of modern hot rolling.
            </p>
            <p>
              Operating from Kundli (Sonipat) and Ludhiana, we combine material depth with responsive technical communication to build long-term supply partnerships with rolling mill engineers and plant management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- 11. HIGH-IMPACT RESTRAINED CTA ---
export function FinalCTA() {
  return (
    <section className="py-36 bg-[#F5F5F2] text-[#111111]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#174BFF] block">
          10 // TECHNICAL INQUIRY
        </span>

        <h2 className="text-4xl sm:text-7xl font-normal tracking-tight uppercase leading-none text-[#111111]">
          LET’S ENGINEER <br />
          THE RIGHT SOLUTION.
        </h2>

        <p className="text-sm text-[#6B6D6F] max-w-lg mx-auto font-normal">
          Connect with our metallurgical team to discuss product specifications, grade selections, and operational rolling mill requirements.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#111111] text-[#F5F5F2] hover:bg-[#174BFF] px-8 py-4 text-xs font-mono uppercase tracking-widest transition-colors"
          >
            <span>START A TECHNICAL DISCUSSION</span>
            <ArrowUpRight size={14} />
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] border-b border-[#111111] pb-1 hover:text-[#174BFF] hover:border-[#174BFF] transition-colors"
          >
            <span>VIEW PRODUCTS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- 12. ARCHITECTURAL FOOTER ---
export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 border-t border-[#111111] font-mono text-xs">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase block text-white">
              {CONFIG.company}
            </span>
            <p className="text-white/50 max-w-sm leading-relaxed text-xs font-sans">
              {CONFIG.tagline} Established September 2021. Engineered metallurgical solutions for high-speed rolling mills.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3 text-white/70">
            <span className="block text-[10px] text-[#174BFF] uppercase tracking-widest mb-2">
              PRODUCTS
            </span>
            <p><Link to="/products" className="hover:text-white">Tungsten Carbide Rings</Link></p>
            <p><Link to="/products" className="hover:text-white">High-Speed Steel Rolls</Link></p>
            <p><Link to="/products" className="hover:text-white">Rolling Mill Hardware</Link></p>
          </div>

          <div className="lg:col-span-4 space-y-4 text-white/50 text-xs font-sans">
            <span className="block text-[10px] font-mono text-[#174BFF] uppercase tracking-widest mb-2">
              OFFICES & CONTACT
            </span>
            <div>
              <span className="block text-white font-mono text-xs uppercase mb-1">REGISTERED OFFICE</span>
              <p>{CONFIG.contacts.regAddress}</p>
            </div>
            <div>
              <span className="block text-white font-mono text-xs uppercase mb-1">CORPORATE OFFICE</span>
              <p>{CONFIG.contacts.corpAddress}</p>
            </div>
            <div className="pt-2 font-mono text-xs text-white">
              <p>{CONFIG.contacts.email}</p>
              <p>{CONFIG.contacts.phone}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-white/30 text-[10px] gap-4">
          <p>© {new Date().getFullYear()} {CONFIG.company} ALL RIGHTS RESERVED.</p>
          <p>INTERNATIONAL INDUSTRIAL ENGINEERING PRESENCE</p>
        </div>

      </div>
    </footer>
  );
}

// --- MAIN HOMEPAGE WRAPPER ---
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-white">
      <Header />
      <main>
        <Hero />
        <EngineeringStatement />
        <ProductCatalogue />
        <EngineeringConditions />
        <ApplicationsMap />
        <FullWidthEditorial />
        <EditorialPrinciples />
        <ProcessAndQuality />
        <CompanyStory />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}