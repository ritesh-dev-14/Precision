import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TechnicalDocumentation({
  products,
  selectedProductId,
  onSelectProduct,
  tungstenCarbideGrades
}) {
  const activeProduct = products.find(p => (p.id || p.key) === selectedProductId);
  const [activeTab, setActiveTab] = useState('SPECIFICATIONS');
  const hasTungstenGrades =
    activeProduct?.id === 'tungsten-carbide-roll-rings' &&
    Array.isArray(tungstenCarbideGrades) &&
    tungstenCarbideGrades.length > 0;

  // Dynamically derive available tabs based on real data on active product
  const availableTabs = React.useMemo(() => {
    const tabs = [];
    if (activeProduct?.specifications) tabs.push('SPECIFICATIONS');
    if (hasTungstenGrades || activeProduct?.chemicalComposition?.length) {
      tabs.push(
        hasTungstenGrades ? 'TUNGSTEN CARBIDE GRADES' : 'COMPOSITION DATA',
      );
    }
    if (activeProduct?.dimensions) tabs.push('DIMENSIONS');
    if (activeProduct?.applications) tabs.push('APPLICATIONS');
    return tabs;
  }, [activeProduct, hasTungstenGrades]);
  const currentTab = availableTabs.includes(activeTab)
    ? activeTab
    : availableTabs[0];
  const compositionLabels = {
    grade: 'Grade',
    wc: 'Tungsten carbide (WC), %',
    binder: 'Binder, %',
    density: 'Density, g/cm³',
    hra: 'Hardness, HRA',
    trs: 'TRS, N/mm²',
  };

  if (!activeProduct) return null;

  return (
    <section id="technical-documentation" className="products-documentation py-16 lg:py-24 px-6 lg:px-16 border-b border-[#D9DAD7] bg-[#F5F5F2]">
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
                type="button"
                aria-pressed={isSelected}
                aria-controls="product-detail-content"
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
        {availableTabs.length > 0 ? (
        <div id="product-detail-content" className="products-documentation__panel bg-[#FFFFFF] border border-[#D9DAD7] p-6 lg:p-8">
          {/* Sub-Tabs */}
          <div className="flex gap-4 border-b border-[#EBEBE8] pb-4 mb-6 overflow-x-auto">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
                aria-pressed={currentTab === tab}
                aria-controls="product-detail-content"
                className={`text-xs font-mono uppercase tracking-wider px-3 py-1 border transition-colors ${
                  currentTab === tab
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
          {currentTab === 'SPECIFICATIONS' && activeProduct.specifications && (
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
          {(currentTab === 'TUNGSTEN CARBIDE GRADES' ||
            currentTab === 'COMPOSITION DATA') && (
            <div className="overflow-x-auto">
              {hasTungstenGrades ? (
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                      <th className="py-3 px-4 uppercase font-semibold">Grade</th>
                      <th className="py-3 px-4 uppercase font-semibold">Tungsten carbide (WC)</th>
                      <th className="py-3 px-4 uppercase font-semibold">Binder</th>
                      <th className="py-3 px-4 uppercase font-semibold">Density (g/cm³)</th>
                      <th className="py-3 px-4 uppercase font-semibold">Hardness</th>
                      <th className="py-3 px-4 uppercase font-semibold">TRS (N/mm²)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                    {tungstenCarbideGrades.map((g) => (
                      <tr key={g.grade} className="hover:bg-[#F9F9F8]">
                        <td className="py-3 px-4 font-semibold">{g.grade}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.wc || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.binder || g.composition || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.density || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.hardness || '-'}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{g.trs || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : Array.isArray(activeProduct.chemicalComposition) ? (
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                      {Object.keys(activeProduct.chemicalComposition[0] || {}).map((key) => (
                        <th key={key} className="py-3 px-4 uppercase font-semibold">
                          {compositionLabels[key] || key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                    {activeProduct.chemicalComposition.map((composition, idx) => (
                      <tr key={composition.grade || idx} className="hover:bg-[#F9F9F8]">
                        {Object.values(composition).map((value, valueIndex) => (
                          <td key={valueIndex} className="py-3 px-4 text-[#6A6D70]">{String(value)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : activeProduct.chemicalComposition &&
                typeof activeProduct.chemicalComposition === 'object' ? (
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#D9DAD7] bg-[#F5F5F2] text-[#111111]">
                      <th className="py-3 px-4 uppercase font-semibold">Element</th>
                      <th className="py-3 px-4 uppercase font-semibold">Percentage Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBE8] text-[#111111]">
                    {Object.entries(activeProduct.chemicalComposition).map(([elem, range]) => (
                      <tr key={elem} className="hover:bg-[#F9F9F8]">
                        <td className="py-3 px-4 font-semibold">{elem}</td>
                        <td className="py-3 px-4 text-[#6A6D70]">{String(range)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>
          )}

          {/* 3. Dimensions Tab */}
          {currentTab === 'DIMENSIONS' && activeProduct.dimensions && (
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
          {currentTab === 'APPLICATIONS' && activeProduct.applications && (
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
        ) : (
          <p id="product-detail-content" className="products-documentation__empty">
            Product-specific technical information is not listed here.{" "}
            <Link to="/contact">Contact us to enquire.</Link>
          </p>
        )}
      </div>
    </section>
  );
}
