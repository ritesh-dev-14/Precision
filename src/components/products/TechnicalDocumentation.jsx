import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

export default function TechnicalDocumentation({
  products,
  selectedProductId,
  onSelectProduct,
  tungstenCarbideGrades
}) {
  const activeProduct = products.find(p => (p.id || p.key) === selectedProductId) || products[0];
  const [activeTab, setActiveTab] = useState('SPECIFICATIONS');

  // Dynamically derive available tabs based on real data on active product
  const availableTabs = React.useMemo(() => {
    const tabs = [];
    if (activeProduct?.specifications) tabs.push('SPECIFICATIONS');
    if (activeProduct?.chemicalComposition || tungstenCarbideGrades) tabs.push('CHEMICAL COMPOSITION');
    if (activeProduct?.dimensions) tabs.push('DIMENSIONS');
    if (activeProduct?.applications) tabs.push('APPLICATIONS');
    return tabs.length > 0 ? tabs : ['SPECIFICATIONS'];
  }, [activeProduct, tungstenCarbideGrades]);

  useEffect(() => {
    if (!availableTabs.includes(activeTab)) {
      setActiveTab(availableTabs[0]);
    }
  }, [activeProduct, availableTabs, activeTab]);

  if (!activeProduct) return null;

  return (
    <section id="technical-documentation" className="py-16 lg:py-24 px-6 lg:px-16 border-b border-[#D9DAD7] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-[#6A6D70] uppercase tracking-widest mb-1">TECHNICAL REFERENCE</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight uppercase text-[#111111]">
            TECHNICAL DOCUMENTATION
          </h2>
        </div>

        {/* Product System Selector Buttons */}
        <div className="flex border-b border-[#D9DAD7] mb-8 overflow-x-auto scrollbar-none">
          {products.map((p, idx) => {
            const pid = p.id || p.key || idx;
            const isSelected = activeProduct && (activeProduct.id || activeProduct.key || idx) === pid;
            return (
              <button
                key={pid}
                onClick={() => onSelectProduct(pid)}
                className={`py-3 px-6 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 transition-all ${
                  isSelected
                    ? "border-[#111111] text-[#111111] font-semibold bg-[#FFFFFF]"
                    : "border-transparent text-[#6A6D70] hover:text-[#111111]"
                }`}
              >
                0{idx + 1} {p.name}
              </button>
            );
          })}
        </div>

        {/* Detail Specs Card Wrapper */}
        <div className="bg-[#FFFFFF] border border-[#D9DAD7] p-6 lg:p-8">
          {/* Sub-Tabs */}
          <div className="flex gap-4 border-b border-[#EBEBE8] pb-4 mb-6 overflow-x-auto">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-mono uppercase tracking-wider px-3 py-1 border transition-colors ${
                  activeTab === tab
                    ? "bg-[#111111] text-[#FFFFFF] border-[#111111]"
                    : "bg-[#F5F5F2] text-[#6A6D70] border-[#D9DAD7] hover:border-[#111111]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT RENDERING */}

          {/* 1. Specifications Tab */}
          {activeTab === 'SPECIFICATIONS' && activeProduct.specifications && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                    <th className="py-3 px-4 uppercase font-semibold">Parameter</th>
                    <th className="py-3 px-4 uppercase font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                  {Object.entries(activeProduct.specifications).map(([key, val], idx) => (
                    <tr key={idx} className="hover:bg-[#F9F9F8]">
                      <td className="py-3 px-4 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
                      <td className="py-3 px-4 text-[#6A6D70]">{Array.isArray(val) ? val.join(', ') : String(val)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 2. Chemical Composition / Tungsten Grades Tab */}
          {activeTab === 'CHEMICAL COMPOSITION' && (
            <div className="overflow-x-auto">
              {tungstenCarbideGrades && Array.isArray(tungstenCarbideGrades) ? (
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                      <th className="py-3 px-4 uppercase font-semibold">Grade</th>
                      <th className="py-3 px-4 uppercase font-semibold">Binder / Composition</th>
                      <th className="py-3 px-4 uppercase font-semibold">Density (g/cm³)</th>
                      <th className="py-3 px-4 uppercase font-semibold">Hardness</th>
                      <th className="py-3 px-4 uppercase font-semibold">TRS (N/mm²)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                    {tungstenCarbideGrades.map((g, idx) => (
                      <tr key={idx} className="hover:bg-[#F9F9F8]">
                        <td className="py-3 px-4 font-semibold">{g.grade || g.name || `Grade ${idx+1}`}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.binder || g.composition || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.density || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.hardness || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.trs || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : activeProduct.chemicalComposition ? (
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                      <th className="py-3 px-4 uppercase font-semibold">Element</th>
                      <th className="py-3 px-4 uppercase font-semibold">Percentage Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                    {Object.entries(activeProduct.chemicalComposition).map(([elem, range], idx) => (
                      <tr key={idx} className="hover:bg-[#F9F9F8]">
                        <td className="py-3 px-4 font-semibold">{elem}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>
          )}

          {/* 3. Dimensions Tab */}
          {activeTab === 'DIMENSIONS' && activeProduct.dimensions && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                    <th className="py-3 px-4 uppercase font-semibold">Dimension Vector</th>
                    <th className="py-3 px-4 uppercase font-semibold">Range / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                  {Object.entries(activeProduct.dimensions).map(([k, v], idx) => (
                    <tr key={idx} className="hover:bg-[#F9F9F8]">
                      <td className="py-3 px-4 font-semibold capitalize">{k.replace(/([A-Z])/g, ' $1')}</td>
                      <td className="py-3 px-4 text-[#6A6D70]">{Array.isArray(v) ? v.join(' × ') : String(v)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 4. Applications Tab */}
          {activeTab === 'APPLICATIONS' && activeProduct.applications && (
            <div className="space-y-3 font-sans text-xs text-[#6A6D70]">
              {Array.isArray(activeProduct.applications) ? (
                <ul className="divide-y divide-[#EBEBE8]">
                  {activeProduct.applications.map((app, idx) => (
                    <li key={idx} className="py-3 font-mono text-[#111111] flex items-center gap-2">
                      <span className="text-[#6A6D70]">0{idx + 1}.</span>
                      <span>{typeof app === 'string' ? app : app.name || app.title}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed">{String(activeProduct.applications)}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
