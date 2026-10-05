import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  SlidersHorizontal, 
  ChevronRight, 
  FileText, 
  Zap,
  Maximize2
} from 'lucide-react';

// DATA IMPORTS (Using real imported image bindings inside products array)
import { products, tungstenCarbideGrades } from '../data/products';

// SUB-COMPONENTS
import ProductCard from '../components/ProductCard';
import TechnicalDocumentation from '../components/products/TechnicalDocumentation';

export default function ProductsPage() {
  const [selectedProductId, setSelectedProductId] = useState(
    products && products.length > 0 ? (products[0].id || products[0].key || 'tungsten-carbide-roll-rings') : null
  );
  
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category || 'GENERAL'));
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'ALL') return products;
    return products.filter((p) => (p.category || 'GENERAL') === activeCategory);
  }, [activeCategory]);

  // Resolve currently active product
  const currentSelectedProduct = useMemo(() => {
    return products.find((p) => (p.id || p.key) === selectedProductId) || products[0];
  }, [selectedProductId]);

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
    const element = document.getElementById('technical-documentation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalogue = () => {
    const element = document.getElementById('catalogue-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAFBFD] text-[#0F172A] font-sans antialiased selection:bg-[#0F172A] selection:text-white">
      
      {/* HERO SECTION WITH REAL IMPORTED HERO PREVIEW */}
      <section className="relative bg-[#0F172A] text-white pt-20 pb-20 px-6 lg:px-16 overflow-hidden border-b border-[#1E293B]">
        {/* Background Radial Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Industrial Messaging */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#334155] rounded-full text-xs font-mono text-[#60A5FA]">
              <Cpu className="w-3.5 h-3.5" />
              <span>HEAVY INDUSTRIAL METALLURGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.05]">
              ENGINEERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                COMPONENTS FOR
              </span> <br />
              ROLLING MILLS
            </h1>

            <p className="text-sm lg:text-base text-slate-300 max-w-xl leading-relaxed font-normal">
              High-performance tungsten carbide, composite, and steel alloy roll systems designed to withstand extreme mechanical stress, thermal shock, and severe abrasion.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={scrollToCatalogue}
                className="px-6 py-3.5 bg-[#174BFF] hover:bg-[#123ACC] text-white text-xs font-mono uppercase font-bold tracking-wider rounded-xs flex items-center gap-3 transition-all shadow-lg shadow-blue-600/20"
              >
                <span>EXPLORE PRODUCT RANGE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#technical-documentation"
                className="px-6 py-3.5 bg-[#1E293B] hover:bg-[#334155] text-slate-200 text-xs font-mono uppercase font-semibold tracking-wider rounded-xs border border-[#334155] flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>TECHNICAL DATASHEETS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Hero Product Preview */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E293B]/80 backdrop-blur-md border border-[#334155] rounded-xs p-6 relative group shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#334155] mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA]">
                  FEATURED SPECIMEN
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentSelectedProduct.category}
                </span>
              </div>

              {/* Renders the imported image from currentSelectedProduct */}
              <div className="h-[240px] bg-[#0F172A]/90 border border-[#334155] rounded-xs p-6 flex items-center justify-center relative overflow-hidden">
                <img
                  src={currentSelectedProduct.image}
                  alt={currentSelectedProduct.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase text-white tracking-wide">
                    {currentSelectedProduct.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {currentSelectedProduct.specifications ? Object.values(currentSelectedProduct.specifications)[0] : 'High-Performance Grade'}
                  </p>
                </div>
                <button
                  onClick={() => handleSelectProduct(currentSelectedProduct.id || currentSelectedProduct.key)}
                  className="p-2 bg-[#174BFF] text-white rounded-xs hover:bg-blue-600 transition-colors"
                  title="Inspect Specifications"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Product Index Ticker */}
        <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#1E293B] hidden md:flex items-center justify-between">
          <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            SYSTEM INDEX ({products.length}):
          </span>
          <div className="flex items-center gap-6 overflow-x-auto py-1">
            {products.map((p, idx) => (
              <button
                key={p.id || idx}
                onClick={() => handleSelectProduct(p.id || p.key)}
                className={`text-xs font-mono uppercase transition-colors flex items-center gap-2 whitespace-nowrap ${
                  selectedProductId === (p.id || p.key) ? 'text-[#60A5FA] font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-[10px] text-slate-500">0{idx + 1}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER & CATALOGUE GRID */}
      <section id="catalogue-grid" className="py-16 px-6 lg:px-16 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#174BFF] uppercase tracking-widest mb-2 font-bold">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>COMPONENT CATALOGUE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold uppercase text-[#0F172A] tracking-tight">
                ENGINEERED PRODUCT RANGE
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase rounded-xs transition-all whitespace-nowrap font-medium ${
                    activeCategory === cat
                      ? 'bg-[#0F172A] text-white shadow-md'
                      : 'bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:border-[#0F172A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id || product.key || idx}
                product={product}
                index={idx}
                isSelected={selectedProductId === (product.id || product.key)}
                onSelectProduct={handleSelectProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* PERFORMANCE COMPARISON MATRIX */}
      <section className="py-16 px-6 lg:px-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#174BFF] font-bold uppercase tracking-widest block mb-1">
              PERFORMANCE COMPARISON
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-[#0F172A] tracking-tight">
              APPLICATION SUITABILITY MATRIX
            </h2>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xs shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white text-xs font-mono uppercase">
                  <th className="py-4 px-6">System Component</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Key Engineering Trait</th>
                  <th className="py-4 px-6">Primary Application</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-xs">
                {products.map((p, idx) => (
                  <tr key={p.id || idx} className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-4 px-6 font-bold uppercase text-[#0F172A]">
                      {p.name}
                    </td>
                    <td className="py-4 px-6 font-mono text-[#64748B]">
                      {p.category}
                    </td>
                    <td className="py-4 px-6 text-[#334155]">
                      {p.characteristics ? p.characteristics[0] : 'High Wear Resistance'}
                    </td>
                    <td className="py-4 px-6 text-[#64748B] font-mono">
                      {p.specifications?.['Primary Application'] || 'Hot Rolling Mills'}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleSelectProduct(p.id || p.key)}
                        className="text-[11px] font-mono font-bold text-[#174BFF] hover:underline uppercase inline-flex items-center gap-1"
                      >
                        <span>Specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL DOCUMENTATION SECTION */}
      <div id="technical-documentation" className="scroll-mt-8">
        <TechnicalDocumentation
          products={products}
          selectedProductId={selectedProductId}
          onSelectProduct={handleSelectProduct}
          tungstenCarbideGrades={tungstenCarbideGrades}
        />
      </div>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 lg:px-16 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#334155] rounded-full text-xs font-mono text-[#60A5FA]">
            <Zap className="w-3.5 h-3.5" />
            <span>CUSTOM METALLURGICAL SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight">
            REQUIRE CUSTOM DIMENSIONS <br />OR SPECIFIC GRADE ALLOY?
          </h2>

          <p className="text-xs lg:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Submit your roll drawings, stand specifications, or operating parameters for customized metallurgical engineering support.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#174BFF] hover:bg-[#123ACC] text-white text-xs font-mono uppercase tracking-wider font-bold rounded-xs transition-colors shadow-xl shadow-blue-600/30"
            >
              <span>SUBMIT TECHNICAL DRAWINGS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
