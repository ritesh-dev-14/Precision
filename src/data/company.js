import { products as productCatalog } from "./products";

export const contact = {
  email: "sales@precisionmetallurgy.com",
  phone: "+91 89688 26055",
  emailLink: "mailto:sales@precisionmetallurgy.com",
  phoneLink: "tel:+918968826055",
};

export const offices = {
  registered: [
    "Plot-336, Sector-56,",
    "Kundli, Sonipat,",
    "Haryana-131028",
  ],
  corporate: [
    "SCF 13-14, 2nd Floor, Above HDFC Bank,",
    "BRS Nagar,",
    "Ludhiana, 141021",
  ],
};

export const company = {
  name: "Precision Metallurgy India Private Limited",
  established: "September 2021",
  intro:
    "Precision Metallurgy India Private Limited is a specialized supplier of high-performance rolls and rolling mill components for the steel industry, with a focus on TMT bar and wire rod rolling mills.",
  supplier:
    "Our product portfolio includes TC Rings, composite rolls, HSS rolls, SGI rolls, Adamite rolls, pinch rolls, guide rolls, and other rolls designed for demanding hot rolling applications.",
  expertise:
    "We work with a strong focus on helping mills improve performance and reduce cost per tonne of production.",
  reach:
    "We supply customers across India while progressively expanding our presence into international markets.",
  understanding:
    "At Precision Metallurgy, our focus goes beyond simply supplying rolls. We aim to understand the operating conditions, production requirements, and challenges of each rolling mill so we can help customers achieve better overall mill performance.",
  quality:
    "A key objective of our business is to help rolling mills reduce their cost per tonne by continuously focusing on product quality, material development, application engineering, and R&D to improve pass life, wear resistance, consistency, and reliability.",
  innovation:
    "Longer roll life and improved performance can contribute to fewer roll changes, reduced downtime, lower maintenance requirements, and better annual mill uptime. By continuously improving our products and understanding their performance in actual rolling conditions, we aim to deliver measurable long-term value rather than simply competing on initial purchase price.",
};

export const vision =
  "To become a globally trusted and preferred supplier of high-performance rolling mill rolls and components, recognized for delivering exceptional quality, longer service life, and solutions that continuously improve the efficiency and competitiveness of our customers' rolling mills.";

export const mission =
  "Our mission is to help rolling mills achieve greater productivity and lower cost per tonne through reliable, high-performance rolls and rolling mill components backed by continuous research, product development, and application-focused improvement.";

export const commitments = [
  [
    "Delivering Quality",
    "Providing consistently high-quality rolls and components capable of performing under demanding rolling conditions.",
  ],
  [
    "Increasing Pass Life",
    "Continuously working towards improved wear resistance and longer operating life to maximize output between roll changes.",
  ],
  [
    "Reducing Cost per Tonne",
    "Helping customers evaluate value based on total operating performance rather than product purchase price alone.",
  ],
  [
    "Minimizing Downtime",
    "Supporting improvements in roll performance that can reduce roll changes, maintenance interruptions, and annual mill downtime.",
  ],
  [
    "Continuous R&D",
    "Working closely with manufacturing partners and customers to develop and refine products based on actual mill conditions and performance data.",
  ],
  [
    "Building Long-Term Partnerships",
    "Developing relationships based on reliability, transparency, technical support, and consistent performance.",
  ],
  [
    "Expanding Globally",
    "Building Precision Metallurgy into a trusted international partner for TMT, wire rod, and hot rolling mills across global markets.",
  ],
];

const imageForProduct = (id) =>
  productCatalog.find((product) => product.id === id)?.image;
const productFor = (id) =>
  productCatalog.find((product) => product.id === id);

export const portfolio = [
  {
    name: "TC Rings",
    productId: "tungsten-carbide-roll-rings",
    image: imageForProduct("tungsten-carbide-roll-rings"),
    category: productFor("tungsten-carbide-roll-rings")?.category,
  },
  {
    name: "Composite Rolls",
    productId: "composite-rolls",
    image: imageForProduct("composite-rolls"),
    category: productFor("composite-rolls")?.category,
  },
  {
    name: "HSS Rolls",
    productId: "high-speed-steel-rolls",
    image: imageForProduct("high-speed-steel-rolls"),
    category: productFor("high-speed-steel-rolls")?.category,
  },
  {
    name: "SGI Rolls",
    productId: "sgi-rolls",
    image: imageForProduct("sgi-rolls"),
    category: productFor("sgi-rolls")?.category,
  },
  { name: "Adamite Rolls" },
  { name: "Pinch Rolls" },
  {
    name: "Guide Rolls",
    productId: "guide-reels",
    image: imageForProduct("guide-reels"),
    category: productFor("guide-reels")?.category,
  },
  { name: "Other Rolls" },
];

const productNameFor = (id) =>
  productCatalog.find((product) => product.id === id)?.name;

export const applications = [
  {
    name: "TMT bar rolling",
    productIds: ["high-speed-steel-rolls", "tungsten-carbide-roll-rings"],
  },
  {
    name: "Wire rod rolling",
    productIds: ["tungsten-carbide-roll-rings", "high-speed-steel-rolls"],
  },
  {
    name: "Hot rolling",
    productIds: ["sgi-rolls", "high-speed-steel-rolls", "composite-rolls"],
  },
  {
    name: "Finishing applications",
    productIds: ["tungsten-carbide-roll-rings"],
  },
  {
    name: "Intermediate / pre-finishing",
    productIds: ["high-speed-steel-rolls", "sgi-rolls"],
  },
  {
    name: "Guide / pass-line applications",
    productIds: ["guide-reels"],
  },
].map((application) => ({
  ...application,
  products: application.productIds
    .map(productNameFor)
    .filter(Boolean),
}));

export const materialSystems = [
  { name: "Tungsten carbide", productId: "tungsten-carbide-roll-rings" },
  { name: "High-speed steel", productId: "high-speed-steel-rolls" },
  { name: "Composite rolls", productId: "composite-rolls" },
  { name: "Spheroidal graphite iron", productId: "sgi-rolls" },
  { name: "Adamite rolls" },
].map((material) => ({
  ...material,
  image: material.productId ? imageForProduct(material.productId) : undefined,
  category: productCatalog.find((product) => product.id === material.productId)
    ?.category,
}));

export const costPerTonneSequence = [
  "Pass life",
  "Fewer roll changes",
  "Less interruption",
  "Lower maintenance",
  "Reduced downtime",
  "Long-term value",
];

export const approach = [
  {
    name: "Understand",
    detail:
      "Operating conditions, production requirements, and the challenges of each rolling mill.",
  },
  {
    name: "Develop",
    detail:
      "Material and product development, informed by actual mill conditions and performance data.",
  },
  {
    name: "Apply",
    detail:
      "Application engineering focused on the requirements of TMT bar and wire rod rolling mills.",
  },
  {
    name: "Improve",
    detail:
      "Continuous work towards better pass life, wear resistance, consistency, and reliability.",
  },
];

export const companyValues = [
  "Quality",
  "Application understanding",
  "Material development",
  "Continuous R&D",
  "Consistency",
  "Reliability",
  "Long-term partnerships",
];

export const performancePrinciples = [
  "Quality",
  "Consistency",
  "Reliability",
  "Continuous development",
];

export const focusAreas = [
  "Product quality",
  "Material development",
  "Application engineering",
  "Research & development",
  "Pass life",
  "Wear resistance",
  "Consistency",
  "Reliability",
];

export const materialFocusAreas = [
  "Material development",
  "Wear resistance",
  "Pass life",
  "Application engineering",
];
