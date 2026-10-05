import tungstenRingImg from '../assets/Product/TungstenRing.png';
import highSpeedRollsImg from '../assets/Product/HighspeedRolls.png';
import compositeRollsImg from '../assets/Product/CompositRolls.png';
import sgiRollsImg from '../assets/Product/SgiRolls.png';
import guideReelsImg from '../assets/Product/GuideReels.png';

export const products = [
  {
    id: "tungsten-carbide-roll-rings",
    key: "tungsten-carbide-roll-rings",
    name: "TC Rings",
    category: "ROLLING MILL COMPONENTS",
    image: tungstenRingImg,
    shortDescription:
      "TC rings for high-speed wire, bar, and deformed steel bar production.",
    specifications: {
      "Primary Application": "Wire Rod / Rebar High-Speed Rolling",
      "Hardness Range": "79 - 88 HRA",
      "TRS Range": "2350 - 2800 N/mm²",
      "Density": "12.7 - 14.7 g/cm³",
    }
  },
  {
    id: "high-speed-steel-rolls",
    key: "high-speed-steel-rolls",
    name: "HSS Rolls",
    category: "ROLLING MILL ROLLS",
    image: highSpeedRollsImg,
    shortDescription:
      "High-speed steel rolls for TMT bar, wire rod, and rebar rolling mills.",
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
    shortDescription: "Composite rolls for steel plant production.",
  },
  {
    id: "sgi-rolls",
    key: "sgi-rolls",
    name: "SGI Rolls",
    category: "CAST IRON ROLLS",
    image: sgiRollsImg,
    shortDescription:
      "Spheroidal graphite iron rolls for hot rolling mill roughing and intermediate stands.",
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
    name: "Guide Rolls",
    category: "GUIDE HARDWARE",
    image: guideReelsImg,
    shortDescription: "Guide rolls for guide / pass-line applications.",
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
