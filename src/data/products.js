import tungstenRingImg from '../assets/Product/TungstenRing.png';
import highSpeedRollsImg from '../assets/Product/HighspeedRolls.png';
import compositeRollsImg from '../assets/Product/CompositRolls.png';
import sgiRollsImg from '../assets/Product/SgiRolls.png';
import guideReelsImg from '../assets/Product/GuideReels.png';

export const products = [
  {
    id: "tungsten-carbide-roll-rings",
    key: "tungsten-carbide-roll-rings",
    name: "Tungsten Carbide Roll Rings",
    category: "ROLLING MILL COMPONENTS",
    image: tungstenRingImg,
    shortDescription: "Premium tungsten carbide roll rings with superior heat and wear resistance for high-speed wire, bar, and deformed steel bar production.",
    description: "Premium tungsten carbide roll rings with superior heat and wear resistance for high-speed wire, bar, and deformed steel bar production.",
    characteristics: [
      "Superior Heat Resistance",
      "High Wear Resistance",
      "High-Speed Rolling Capability"
    ],
    features: [
      "Superior Heat Resistance",
      "High Wear Resistance",
      "High-Speed Rolling Capability"
    ],
    chemicalComposition: [
      { grade: "LS08A", wc: "92", binder: "8", density: "14.7±0.15", hra: "88", trs: "2800" },
      { grade: "LS10A", wc: "90", binder: "10", density: "14.5±0.15", hra: "87.5", trs: "2750" },
      { grade: "LS12A", wc: "88", binder: "12", density: "14.2±0.15", hra: "86", trs: "2700" },
      { grade: "LS15A", wc: "85", binder: "15", density: "14.1±0.15", hra: "85", trs: "2650" },
      { grade: "LS18A", wc: "82", binder: "18", density: "13.7±0.15", hra: "83.5", trs: "2600" },
      { grade: "LS20A", wc: "80", binder: "20", density: "13.5±0.15", hra: "82.5", trs: "2550" },
      { grade: "LS22A", wc: "78", binder: "22", density: "13.3±0.15", hra: "81.5", trs: "2500" },
      { grade: "LS25A", wc: "75", binder: "25", density: "13.1±0.15", hra: "80.5", trs: "2450" },
      { grade: "LS30A", wc: "70", binder: "30", density: "12.7±0.15", hra: "79", trs: "2350" }
    ],
    specifications: {
      "Primary Application": "Wire Rod / Rebar High-Speed Rolling",
      "Hardness Range": "79 - 88 HRA",
      "TRS Range": "2350 - 2800 N/mm²",
      "Density": "12.7 - 14.7 g/cm³"
    }
  },
  {
    id: "high-speed-steel-rolls",
    key: "high-speed-steel-rolls",
    name: "High Speed Steel (HSS) Rolls",
    category: "ROLLING MILL ROLLS",
    image: highSpeedRollsImg,
    shortDescription: "Advanced HSS rolls designed for high-performance rolling applications with exceptional durability.",
    description: "Our High-Speed Steel (HSS) Rolls are designed to withstand high thermal loads, extreme rolling pressures, and aggressive mill environments, ensuring exceptional wear resistance and extended roll life. With superior hardness, toughness, and thermal fatigue resistance, our HSS rolls provide consistent rolling performance and reduced downtime in TMT bar, wire rod, and rebar rolling mills.",
    characteristics: [
      "Excellent Thermal Fatigue Resistance",
      "High Hot Hardness",
      "Good Wear Resistance",
      "Superior Surface Quality"
    ],
    features: [
      "Excellent Thermal Fatigue Resistance",
      "High Hot Hardness",
      "Good Wear Resistance",
      "Superior Surface Quality"
    ],
    specifications: {
      "Compressive Strength": "2800-3200 MPa",
      "Transverse Rupture Strength": "1600-2000 MPa"
    }
  },
  {
    id: "composite-rolls",
    key: "composite-rolls",
    name: "Composite Rolls",
    category: "COMPOSITE COMPONENTS",
    image: compositeRollsImg,
    shortDescription: "Cutting-edge composite rolls with improved wear, impact, temperature, and barring resistance for optimal steel plant production.",
    description: "Our Composite Rolls represent cutting-edge technology for steel plant production, delivering superior wear resistance, impact resistance, temperature resistance, and barring resistance. These precision-engineered rolls help achieve optimal production while improving mill stability, reducing operating costs, and enhancing product quality.",
    characteristics: [
      "Superior Wear Resistance",
      "High Impact Resistance",
      "Temperature & Barring Resistance"
    ],
    features: [
      "Superior Wear Resistance",
      "High Impact Resistance",
      "Temperature & Barring Resistance"
    ],
    chemicalComposition: [
      { grade: "LS20A", wc: "80", binder: "20", density: "13.5±0.15", hra: "82.5", trs: "2550" },
      { grade: "LS25A", wc: "75", binder: "25", density: "13.1±0.15", hra: "80.5", trs: "2450" },
      { grade: "LS30A", wc: "70", binder: "30", density: "12.7±0.15", hra: "79", trs: "2350" }
    ],
    specifications: {
      "Hardness Range": "79 - 82.5 HRA",
      "TRS Range": "2350 - 2550 N/mm²",
      "Density Range": "12.7 - 13.5 g/cm³"
    }
  },
  {
    id: "sgi-rolls",
    key: "sgi-rolls",
    name: "SGI Rolls",
    category: "CAST IRON ROLLS",
    image: sgiRollsImg,
    shortDescription: "Spheroidal Graphite Iron rolls offering excellent thermal properties and crack resistance for demanding applications.",
    description: "SGI Rolls, also known as Spheroidal Graphite Iron Rolls or Nodular Cast Iron Rolls, are widely used in hot rolling mills due to their excellent toughness, wear resistance, and cost-effectiveness. These rolls contain spheroidal graphite (SG) nodules in the microstructure, which enhances their shock resistance and durability, making them an ideal choice for roughing and intermediate stands in rolling mills.",
    characteristics: [
      "Excellent Thermal Fatigue Resistance",
      "Good Crack Resistance",
      "Cost-Effective Production",
      "Reliable Performance"
    ],
    features: [
      "Excellent Thermal Fatigue Resistance",
      "Good Crack Resistance",
      "Cost-Effective Production",
      "Reliable Performance"
    ],
    specifications: {
      "Density": "7.1-7.3 g/cm³",
      "Hardness": "50-80 HSD",
      "Thermal Conductivity": "35-42 W/mK",
      "Compressive Strength": "800-1200 MPa",
      "Tensile Strength": "350-500 MPa"
    }
  },
  {
    id: "guide-reels",
    key: "guide-reels",
    name: "Guide Reels",
    category: "GUIDE HARDWARE",
    image: guideReelsImg,
    shortDescription: "Precision-engineered guide reels designed for accurate material handling and superior alignment control.",
    description: "Our precision-engineered guide Reels are specifically designed for applications requiring accurate material handling and superior alignment control. With their self-aligning capabilities and optimized tracking control, these reels minimize strip deviation and reduce edge damage, making them ideal for precision strip mills and continuous processing lines.",
    characteristics: [
      "Accurate Material Handling",
      "Superior Alignment Control",
      "Self-Aligning Capabilities",
      "Optimized Tracking Control"
    ],
    features: [
      "Accurate Material Handling",
      "Superior Alignment Control",
      "Self-Aligning Capabilities",
      "Optimized Tracking Control"
    ],
    specifications: {
      "Density": "7.7-8.1 g/cm³",
      "Hardness": "58-70 HRC",
      "Surface Roughness": "Ra 0.2-0.8 µm",
      "Bearing Load": "500-2000 kN",
      "Runout Tolerance": "±0.01-0.05mm"
    }
  }
];

export const tungstenCarbideGrades = [
  { grade: "LS08A", wc: "92%", binder: "8% (Co/Ni/Cr)", density: "14.7±0.15 g/cm³", hardness: "≥88 HRA", trs: "≥2800 N/mm²" },
  { grade: "LS10A", wc: "90%", binder: "10% (Co/Ni/Cr)", density: "14.5±0.15 g/cm³", hardness: "≥87.5 HRA", trs: "≥2750 N/mm²" },
  { grade: "LS12A", wc: "88%", binder: "12% (Co/Ni/Cr)", density: "14.2±0.15 g/cm³", hardness: "≥86 HRA", trs: "≥2700 N/mm²" },
  { grade: "LS15A", wc: "85%", binder: "15% (Co/Ni/Cr)", density: "14.1±0.15 g/cm³", hardness: "≥85 HRA", trs: "≥2650 N/mm²" },
  { grade: "LS18A", wc: "82%", binder: "18% (Co/Ni/Cr)", density: "13.7±0.15 g/cm³", hardness: "≥83.5 HRA", trs: "≥2600 N/mm²" },
  { grade: "LS20A", wc: "80%", binder: "20% (Co/Ni/Cr)", density: "13.5±0.15 g/cm³", hardness: "≥82.5 HRA", trs: "≥2550 N/mm²" },
  { grade: "LS22A", wc: "78%", binder: "22% (Co/Ni/Cr)", density: "13.3±0.15 g/cm³", hardness: "≥81.5 HRA", trs: "≥2500 N/mm²" },
  { grade: "LS25A", wc: "75%", binder: "25% (Co/Ni/Cr)", density: "13.1±0.15 g/cm³", hardness: "≥80.5 HRA", trs: "≥2450 N/mm²" },
  { grade: "LS30A", wc: "70%", binder: "30% (Co/Ni/Cr)", density: "12.7±0.15 g/cm³", hardness: "≥79 HRA", trs: "≥2350 N/mm²" }
];
