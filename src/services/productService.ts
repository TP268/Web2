
export interface Product {
  id: number;
  modelNumber: string;
  brand: string;
  description: string;
  imageUrl?: string;
  applications?: string[];
  troubleshooting?: string[];
}

// Dummy product data
const dummyProducts: Product[] = [
  {
    id: 1,
    modelNumber: "P-CYL-125-A",
    brand: "AirMaster",
    description: "Pneumatic cylinder with 125mm stroke, standard bore, double-acting. Made with anodized aluminum body and wear-resistant seal for extended life.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    applications: [
      "Automated packaging machinery",
      "Assembly line equipment",
      "Material handling systems"
    ],
    troubleshooting: [
      "If slow operation, check for air leaks in the supply lines",
      "For erratic movement, inspect valve timing and control signals",
      "Regular lubrication recommended every 500 operating hours"
    ]
  },
  {
    id: 2,
    modelNumber: "V-5P-230",
    brand: "FlowTech",
    description: "5-port solenoid valve, 2-position, 230V AC operation. Features direct acting poppet design with NBR seals suitable for general industrial applications.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    applications: [
      "Pneumatic control systems",
      "Machine tool automation",
      "Process control equipment"
    ]
  },
  {
    id: 3,
    modelNumber: "FRL-C400",
    brand: "PneumaControl",
    description: "Filter-Regulator-Lubricator combo unit with 1/2\" NPT ports. Maximum input pressure 150 PSI, adjustable output 15-120 PSI, with semi-automatic drain.",
    applications: [
      "Air preparation for pneumatic tools",
      "System protection for downstream components",
      "Industrial air line conditioning"
    ]
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
