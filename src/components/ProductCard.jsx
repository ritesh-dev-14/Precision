import React from 'react';
import { ArrowRight, Layers, ShieldCheck } from 'lucide-react';

export default function ProductCard({ product, index, onSelectProduct, isSelected }) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  // Helper to safely format spec values
  const formatValue = (val) => {
    if (typeof val === 'string' || typeof val === 'number') return String(val);
    if (Array.isArray(val)) {
      return val.map(v => (typeof v === 'object' ? (v.label || v.name || JSON.stringify(v)) : v)).join(', ');
    }
    if (typeof val === 'object' && val !== null) {
      return val.label || val.title || val.name || val.value || '';
    }
    return '';
  };

  // Extract top highlights for badges
  const highlights = React.useMemo(() => {
    if (Array.isArray(product.characteristics) && product.characteristics.length > 0) {
      return product.characteristics.map(formatValue).filter(Boolean).slice(0, 3);
    }
    if (product.specifications && typeof product.specifications === 'object') {
      return Object.entries(product.specifications)
        .map(([k, v]) => `${k}: ${formatValue(v)}`)
        .slice(0, 3);
    }
    return [];
  }, [product]);

  return (
    <div
      className={`group relative bg-white border transition-all duration-300 flex flex-col justify-between rounded-xs overflow-hidden h-full ${
        isSelected
          ? 'border-[#174BFF] ring-1 ring-[#174BFF] shadow-lg'
          : 'border-[#E2E8F0] hover:border-[#0F172A] hover:shadow-xl'
      }`}
    >
      {/* Top Accent Indicator Bar */}
      <div className={`h-1 w-full transition-colors duration-300 ${isSelected ? 'bg-[#174BFF]' : 'bg-transparent group-hover:bg-[#0F172A]'}`} />

      <div className="p-6 flex flex-col flex-grow">
        {/* Card Header Metadata */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F5F9]">
          <span className="text-xs font-mono font-bold text-[#0F172A] bg-[#F8FAFC] px-2 py-0.5 border border-[#E2E8F0]">
            SPEC-{formattedIndex}
          </span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-[#64748B] uppercase">
            {product.category || 'COMPONENT'}
          </span>
        </div>

        {/* Product Image Stage rendering the imported image source */}
        <div className="relative w-full h-[210px] bg-[#F8FAFC] border border-[#E2E8F0] mb-5 rounded-xs overflow-hidden flex items-center justify-center p-6 group-hover:bg-white transition-colors duration-300">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name || 'Industrial Product'}
              className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-[#94A3B8]">
              <Layers className="w-8 h-8 stroke-[1.5]" />
              <span className="text-[10px] font-mono uppercase tracking-wider">No Specimen Render</span>
            </div>
          )}

          {/* Metallurgical Grades Count Overlay */}
          {product.chemicalComposition && product.chemicalComposition.length > 0 && (
            <span className="absolute bottom-2 left-2 text-[9px] font-mono bg-[#0F172A]/80 text-white px-2 py-0.5 rounded-xs backdrop-blur-xs">
              {product.chemicalComposition.length} METALLURGICAL GRADES
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="mb-4">
          <h3 className="text-base font-bold text-[#0F172A] tracking-tight uppercase mb-2 group-hover:text-[#174BFF] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
            {product.shortDescription || product.description}
          </p>
        </div>

        {/* Key Feature Badges */}
        {highlights.length > 0 && (
          <div className="mt-auto pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
            {highlights.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-mono text-[#334155] bg-[#F1F5F9] px-2.5 py-1 rounded-xs border border-[#E2E8F0]"
              >
                <ShieldCheck className="w-3 h-3 text-[#174BFF]" />
                <span className="truncate max-w-[180px]">{item}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Action Button */}
      <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] group-hover:bg-[#0F172A] transition-colors duration-300">
        <button
          onClick={() => onSelectProduct(product.id || product.key || index)}
          className="w-full text-xs font-mono uppercase tracking-wider font-semibold text-[#0F172A] group-hover:text-white flex items-center justify-between transition-colors"
        >
          <span>{isSelected ? 'Currently Viewing Spec' : 'Inspect Specifications'}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
