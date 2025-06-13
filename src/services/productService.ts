export interface Product {
  id: number;
  modelNumber: string;
  brand: string;
  category: string;
  description: string;
  imageUrl?: string;
  applications?: string[];
  specifications?: Record<string, string>;
  features?: string[];
  troubleshooting?: string[];
  relatedProducts?: string[];
}

// Dummy product data with additional fields
const dummyProducts: Product[] = [
  {
    id: 1,
    modelNumber: "P-CYL-125-A",
    brand: "AirMaster",
    category: "Cylinders",
    description: "Pneumatic cylinder with 125mm stroke, standard bore, double-acting. Made with anodized aluminum body and wear-resistant seal for extended life.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    specifications: {
      "Bore Size": "40mm",
      "Stroke Length": "125mm",
      "Operating Pressure": "1-10 bar",
      "Temperature Range": "-10°C to 70°C",
      "Material": "Anodized Aluminum"
    },
    features: [
      "Double-acting operation",
      "Wear-resistant seals for extended life",
      "Cushioning on both ends",
      "Magnetic piston for position sensing"
    ],
    applications: [
      "Automated packaging machinery",
      "Assembly line equipment",
      "Material handling systems"
    ],
    troubleshooting: [
      "If slow operation, check for air leaks in the supply lines",
      "For erratic movement, inspect valve timing and control signals",
      "Regular lubrication recommended every 500 operating hours"
    ],
    relatedProducts: ["V-5P-230", "FRL-C400"]
  },
  {
    id: 2,
    modelNumber: "V-5P-230",
    brand: "FlowTech",
    category: "Valves",
    description: "5-port solenoid valve, 2-position, 230V AC operation. Features direct acting poppet design with NBR seals suitable for general industrial applications.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specifications: {
      "Valve Type": "5/2 Solenoid",
      "Port Size": "1/4 inch",
      "Operating Voltage": "230V AC",
      "Flow Rate": "500 l/min",
      "Pressure Range": "2-8 bar"
    },
    features: [
      "Direct acting poppet design",
      "Manual override option",
      "LED status indicator",
      "Surge suppressor included"
    ],
    applications: [
      "Pneumatic control systems",
      "Machine tool automation",
      "Process control equipment"
    ],
    relatedProducts: ["P-CYL-125-A", "FRL-C400"]
  },
  {
    id: 3,
    modelNumber: "FRL-C400",
    brand: "PneumaControl",
    category: "Air Preparation",
    description: "Filter-Regulator-Lubricator combo unit with 1/2\" NPT ports. Maximum input pressure 150 PSI, adjustable output 15-120 PSI, with semi-automatic drain.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specifications: {
      "Port Size": "1/2 inch NPT",
      "Max Inlet Pressure": "150 PSI",
      "Adjustable Range": "15-120 PSI",
      "Filter Rating": "40 micron",
      "Bowl Size": "300cc"
    },
    features: [
      "Modular design for easy service",
      "Transparent bowl with guard",
      "Semi-automatic drain valve",
      "Pressure gauge included"
    ],
    applications: [
      "Air preparation for pneumatic tools",
      "System protection for downstream components",
      "Industrial air line conditioning"
    ],
    troubleshooting: [
      "For pressure drop issues, check filter element for clogging",
      "If lubricator isn't working, verify oil level and drip rate",
      "Clean filter bowl and element every 3 months"
    ],
    relatedProducts: ["P-CYL-125-A", "V-5P-230"]
  },
  {
    id: 4,
    modelNumber: "QC-38-SS",
    brand: "ConnectFast",
    category: "Fittings",
    description: "Quick connect coupling, 3/8\" tube, stainless steel construction. Push-to-connect design with double O-ring seal for leak-free operation in corrosive environments.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    specifications: {
      "Connection Size": "3/8 inch",
      "Material": "316 Stainless Steel",
      "Max Pressure": "250 PSI",
      "Temperature Range": "-20°C to 100°C",
      "Seal Type": "Double O-ring"
    },
    features: [
      "Push-to-connect design",
      "Double O-ring seal",
      "Corrosion resistant construction",
      "One-hand operation"
    ],
    applications: [
      "Food and beverage processing",
      "Chemical processing equipment",
      "Outdoor applications",
      "Marine environments"
    ],
    relatedProducts: ["V-5P-230", "FRL-C400"]
  },
  {
    id: 5,
    modelNumber: "AF-2000",
    brand: "AirFlow",
    category: "Air Preparation",
    description: "High-capacity compressed air filter with 2000 SCFM flow rate. Features 0.01 micron filtration with differential pressure indicator and auto drain.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    specifications: {
      "Flow Capacity": "2000 SCFM",
      "Filtration": "0.01 micron",
      "Connection Size": "2 inch NPT",
      "Max Pressure": "200 PSI",
      "Housing Material": "Die-cast Aluminum"
    },
    features: [
      "High-efficiency coalescing element",
      "Differential pressure indicator",
      "Automatic condensate drain",
      "Modular design for easy element replacement"
    ],
    applications: [
      "Critical air systems",
      "Electronics manufacturing",
      "Painting operations",
      "Food processing"
    ],
    troubleshooting: [
      "Monitor differential pressure indicator for filter element replacement",
      "Verify auto drain function weekly",
      "For optimal performance, change element annually"
    ],
    relatedProducts: ["FRL-C400", "P-CYL-125-A"]
  },
  {
    id: 6,
    modelNumber: "PU-4MM-BLU",
    brand: "TubeMaster",
    category: "PU Tubes",
    description: "High-quality polyurethane pneumatic tube, 4mm outer diameter. Excellent flexibility and durability for compressed air applications up to 10 bar.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specifications: {
      "Outer Diameter": "4mm",
      "Inner Diameter": "2.5mm",
      "Wall Thickness": "0.75mm",
      "Max Pressure": "10 bar",
      "Material": "Polyurethane",
      "Color": "Blue",
      "Temperature Range": "-40°C to 60°C"
    },
    features: [
      "Excellent flexibility",
      "High burst pressure",
      "Chemical resistant",
      "UV resistant",
      "Food grade approved"
    ],
    applications: [
      "Pneumatic control lines",
      "Instrument air systems",
      "Food processing equipment",
      "Medical devices"
    ],
    relatedProducts: ["PU-8MM-BLU", "QC-38-SS"]
  },
  {
    id: 7,
    modelNumber: "PU-8MM-BLU",
    brand: "TubeMaster",
    category: "PU Tubes",
    description: "High-quality polyurethane pneumatic tube, 8mm outer diameter. Perfect balance of flexibility and strength for medium pressure applications.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specifications: {
      "Outer Diameter": "8mm",
      "Inner Diameter": "5.5mm",
      "Wall Thickness": "1.25mm",
      "Max Pressure": "12 bar",
      "Material": "Polyurethane",
      "Color": "Blue",
      "Temperature Range": "-40°C to 60°C"
    },
    features: [
      "Excellent flexibility",
      "High burst pressure",
      "Chemical resistant",
      "UV resistant",
      "Easy installation"
    ],
    applications: [
      "General pneumatic systems",
      "Automation equipment",
      "Pneumatic tools",
      "Industrial machinery"
    ],
    relatedProducts: ["PU-4MM-BLU", "PU-10MM-BLU"]
  },
  {
    id: 8,
    modelNumber: "PU-10MM-BLU",
    brand: "TubeMaster",
    category: "PU Tubes",
    description: "High-quality polyurethane pneumatic tube, 10mm outer diameter. Ideal for main air lines and high-flow applications with superior durability.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specifications: {
      "Outer Diameter": "10mm",
      "Inner Diameter": "7mm",
      "Wall Thickness": "1.5mm",
      "Max Pressure": "15 bar",
      "Material": "Polyurethane",
      "Color": "Blue",
      "Temperature Range": "-40°C to 60°C"
    },
    features: [
      "High flow capacity",
      "Superior durability",
      "Chemical resistant",
      "UV resistant",
      "Kink resistant"
    ],
    applications: [
      "Main air distribution",
      "High-flow pneumatic systems",
      "Heavy-duty equipment",
      "Production line pneumatics"
    ],
    relatedProducts: ["PU-8MM-BLU", "PU-12MM-BLU"]
  },
  {
    id: 9,
    modelNumber: "PU-12MM-BLU",
    brand: "TubeMaster",
    category: "PU Tubes",
    description: "High-quality polyurethane pneumatic tube, 12mm outer diameter. Heavy-duty construction for demanding industrial applications and high-pressure systems.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specifications: {
      "Outer Diameter": "12mm",
      "Inner Diameter": "8.5mm",
      "Wall Thickness": "1.75mm",
      "Max Pressure": "16 bar",
      "Material": "Polyurethane",
      "Color": "Blue",
      "Temperature Range": "-40°C to 60°C"
    },
    features: [
      "Heavy-duty construction",
      "High pressure rating",
      "Excellent abrasion resistance",
      "Chemical resistant",
      "Long service life"
    ],
    applications: [
      "Heavy industrial applications",
      "High-pressure pneumatic systems",
      "Mining equipment",
      "Construction machinery"
    ],
    relatedProducts: ["PU-10MM-BLU", "PU-14MM-BLU"]
  },
  {
    id: 10,
    modelNumber: "PU-14MM-BLU",
    brand: "TubeMaster",
    category: "PU Tubes",
    description: "High-quality polyurethane pneumatic tube, 14mm outer diameter. Extra heavy-duty design for maximum flow capacity and extreme operating conditions.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specifications: {
      "Outer Diameter": "14mm",
      "Inner Diameter": "10mm",
      "Wall Thickness": "2mm",
      "Max Pressure": "18 bar",
      "Material": "Polyurethane",
      "Color": "Blue",
      "Temperature Range": "-40°C to 60°C"
    },
    features: [
      "Maximum flow capacity",
      "Extra heavy-duty design",
      "Superior abrasion resistance",
      "Chemical resistant",
      "Extreme durability"
    ],
    applications: [
      "Large pneumatic cylinders",
      "High-volume air systems",
      "Industrial automation",
      "Heavy machinery"
    ],
    relatedProducts: ["PU-12MM-BLU", "PU-16MM-BLU"]
  },
  {
    id: 11,
    modelNumber: "PU-16MM-BLU",
    brand: "TubeMaster",
    category: "PU Tubes",
    description: "High-quality polyurethane pneumatic tube, 16mm outer diameter. Premium grade for the most demanding applications requiring maximum flow and pressure.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    specifications: {
      "Outer Diameter": "16mm",
      "Inner Diameter": "12mm",
      "Wall Thickness": "2mm",
      "Max Pressure": "20 bar",
      "Material": "Polyurethane",
      "Color": "Blue",
      "Temperature Range": "-40°C to 60°C"
    },
    features: [
      "Premium grade construction",
      "Maximum pressure rating",
      "Exceptional flow capacity",
      "Superior chemical resistance",
      "Extended service life"
    ],
    applications: [
      "Main air distribution networks",
      "Large industrial systems",
      "Heavy-duty pneumatic equipment",
      "High-capacity applications"
    ],
    relatedProducts: ["PU-14MM-BLU", "FRL-C400"]
  }
];

export const searchProduct = (modelNumber: string): Product | undefined => {
  // In a real app, this would be a fetch call to a Supabase database
  return dummyProducts.find(
    (product) => product.modelNumber.toLowerCase() === modelNumber.toLowerCase()
  );
};

export const getAllProducts = (): Product[] => {
  return dummyProducts;
};

export const getProductsByCategory = (category: string): Product[] => {
  return dummyProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getRelatedProducts = (modelNumbers: string[]): Product[] => {
  return dummyProducts.filter(product => 
    modelNumbers.includes(product.modelNumber)
  );
};

// Get unique categories
export const getCategories = (): string[] => {
  const categories = dummyProducts.map(product => product.category);
  return [...new Set(categories)];
};
