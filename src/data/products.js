import tungstenRingImg from '../assets/Product/TungstenRing.png';
import highSpeedRollsImg from '../assets/Product/HighspeedRolls.png';
import compositeRollsImg from '../assets/Product/CompositRolls.png';
import sgiRollsImg from '../assets/Product/SgiRolls.png';
import guideReelsImg from '../assets/Product/GuideReels.png';

export const products = [
  {
    number: "01",
    name: "Tungsten Carbide Roll Rings",
    description:
      "Premium tungsten carbide roll rings with high wear resistance for high-speed wire, bar and deformed steel bar production.",
    image: tungstenRingImg,
    characteristics: [
      "High wear resistance",
      "Suitable for high-speed rolling applications",
      "Designed for wire, bar and deformed steel bar production",
    ],
  },
  {
    number: "02",
    name: "High Speed Steel (HSS) Rolls",
    description:
      "High Speed Steel rolls designed for demanding rolling applications where wear resistance and rolling performance are important considerations.",
    image: highSpeedRollsImg,
    characteristics: [
      "Excellent Thermal Fatigue Resistance",
      "Good Wear Resistance",
      "High Hot Hardness",
      "Superior Surface Quality",
    ],
    specifications: {
      description: "Our High-Speed Steel (HSS) Rolls are designed to withstand high thermal loads, extreme rolling pressures, and aggressive mill environments, ensuring exceptional wear resistance and extended roll life. With superior hardness, toughness, and thermal fatigue resistance, our HSS rolls provide consistent rolling performance and reduced downtime in TMT bar, wire rod, and rebar rolling mills.",
      properties: [
        { label: "Compressive Strength", value: "2800-3200 MPa" },
        { label: "Transverse Rupture Strength", value: "1600-2000 MPa" }
      ]
    },
    chemicalComposition: [
      ["HSS", "HSS", "80-88", "1.6/2.2", "0.3/1.0", "0.2/0.8", "2.0/6.0", "3.0/7.0", "0.5/1.5", "2.0/6.0", "2.0/6.0", "7.9"],
      ["HP HSS", "HSS", "80-88", "1.6-2.2", "0.3-1.0", "0.2-0.8", "4.5-6.0", "3.0-7.0", "0.5-1.5", "3.0-6.5", "4.0-7.0", "7.9"]
    ],
    applications: {
      instructions: [
        "Water Pressure: Maintain water pressure at 0.4-0.6mpa for optimal performance.",
        "Water Temperature: Ensure water temperature is maintained between 35°-40°C for effective roll cooling.",
        "Water discharge: 300-400 liters per minute",
        "PH Value: Maintain pH level between PH 7.2-8.0 for water quality control.",
        "Water TDS (Total Dissolved Solids): Monitor TDS levels and ensure it remains within 250-400 for optimal performance.",
        "Water Tank Setup: Use a separate water tank dedicated solely to HSS roll cooling to prevent contamination and ensure consistent cooling efficiency.",
        "Nozzle Design and Placement: Each HSS roll requires a C-type stand nozzle for roll pulling as per the provided drawing/picture.",
        "The nozzle diameter should be 4-6mm.",
        "The gap between nozzle to nozzle should be 20-24mm to optimize cooling efficiency and prevent uneven cooling effects."
      ],
      note: "Refer to the water cooling diagram for proper nozzle placement and setup configuration."
    }
  },
  {
    number: "03",
    name: "Composite Rolls",
    description:
      "Cutting-edge composite rolls with improved wear, impact, temperature, and barring resistance for optimal steel plant production.",
    image: compositeRollsImg,
    specifications: {
      title: "Grades and Specifications",
      description: "Our Composite Rolls represent cutting-edge technology for steel plant production, delivering superior wear resistance, impact resistance, temperature resistance, and barring resistance. These precision-engineered rolls help achieve optimal production while improving mill stability, reducing operating costs, and enhancing product quality.",
      grades: [
        ["LS20A", "80", "20", "13.5±0.15", "82.5", "2550"],
        ["LS25A", "75", "25", "13.1±0.15", "80.5", "2450"],
        ["LS30A", "70", "30", "12.7±0.15", "79", "2350"]
      ]
    }
  },
  {
    number: "04",
    name: "SGI Rolls",
    description:
      "Spheroidal Graphite Iron rolls offering excellent thermal properties and crack resistance for demanding applications.",
    image: sgiRollsImg,
    characteristics: [
      "Excellent Thermal Fatigue Resistance",
      "Cost-Effective Production",
      "Good Crack Resistance",
      "Reliable Performance"
    ],
    specifications: {
      title: "Technical Specifications",
      description: "SGI Rolls, also known as Spheroidal Graphite Iron Rolls or Nodular Cast Iron Rolls, are widely used in hot rolling mills due to their excellent toughness, wear resistance, and cost-effectiveness. These rolls contain spheroidal graphite (SG) nodules in the microstructure, which enhances their shock resistance and durability, making them an ideal choice for roughing and intermediate stands in rolling mills.",
      properties: [
        { label: "Density", value: "7.1-7.3 g/cm³" },
        { label: "Hardness", value: "50-80 HSD" },
        { label: "Thermal Conductivity", value: "35-42 W/mK" },
        { label: "Compressive Strength", value: "800-1200 MPa" },
        { label: "Tensile Strength", value: "350-500 MPa" }
      ]
    },
    chemicalComposition: [
      ["C", "2.5-4.0%"],
      ["Si", "0.8-2.5%"],
      ["Mn", "0.2-1.2%"],
      ["P", "≤0.20%"],
      ["S", "≤0.03%"],
      ["V", "≤0.4%"],
      ["Ti", "≤0.8%"],
      ["Cr", "0.2-1.2%"],
      ["Ni", "0.5-4.5%"],
      ["Mo", "0.2-1.2%"],
      ["Fe", "Balance"]
    ]
  },
  {
    number: "05",
    name: "Guide Reels",
    description:
      "Precision-engineered guide reels designed for accurate material handling and superior alignment control.",
    image: guideReelsImg,
    specifications: {
      title: "Technical Specifications",
      description: "Our precision-engineered guide Reels are specifically designed for applications requiring accurate material handling and superior alignment control. With their self-aligning capabilities and optimized tracking control, these reels minimize strip deviation and reduce edge damage, making them ideal for precision strip mills and continuous processing lines.",
      properties: [
        { label: "Density", value: "7.7-8.1 g/cm³" },
        { label: "Hardness", value: "58-70 HRC" },
        { label: "Surface Roughness", value: "Ra 0.2-0.8 μm" },
        { label: "Bearing Load", value: "500-2000 kN" },
        { label: "Runout Tolerance", value: "±0.01-0.05mm" }
      ]
    }
  },
];

export const tungstenCarbideGrades = [
  ["LS08A", "92", "8", "14.7±0.15", "88", "2800"],
  ["LS10A", "90", "10", "14.5±0.15", "87.5", "2750"],
  ["LS12A", "88", "12", "14.2±0.15", "86", "2700"],
  ["LS15A", "85", "15", "14.1±0.15", "85", "2650"],
  ["LS18A", "82", "18", "13.7±0.15", "83.5", "2600"],
  ["LS20A", "80", "20", "13.5±0.15", "82.5", "2550"],
  ["LS22A", "78", "22", "13.3±0.15", "81.5", "2500"],
  ["LS25A", "75", "25", "13.1±0.15", "80.5", "2450"],
  ["LS30A", "70", "30", "12.7±0.15", "79", "2350"],
];
