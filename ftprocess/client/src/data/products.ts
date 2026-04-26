// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  color: string;
  rating: number;
  inStock: boolean;
}

// Helper function to generate 4 images for each product
const getProductImages = (productId: number, productName: string): string[] => {
  // Different image sets for each product (using reliable Picsum images)
  const imageSets: { [key: number]: string[] } = {
    1: [
      "https://www.ftprocess.com/images/products/thumbnails/1751868420.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1751868420.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1751868420.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1751868420.jpg"
    ],
    2: [
      "https://www.ftprocess.com/images/products/thumbnails/1751868055.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1751868055.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1751868055.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1751868055.jpg"
    ],
    3: [
      "https://www.ftprocess.com/images/products/thumbnails/1750659003.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1750659003.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1750659003.jpg",
      "https://www.ftprocess.com/images/products/thumbnails/1750659003.jpg"
    ],
    4: [
      "https://www.ftprocess.com/images/products/thumbnails/1748082561.png",
      "https://www.ftprocess.com/images/products/thumbnails/1748082561.png",
      "https://www.ftprocess.com/images/products/thumbnails/1748082561.png",
      "https://www.ftprocess.com/images/products/thumbnails/1748082561.png"
    ],
    5: [
      "https://picsum.photos/id/48/400/400",
      "https://picsum.photos/id/49/400/400",
      "https://picsum.photos/id/50/400/400",
      "https://picsum.photos/id/51/400/400"
    ],
    6: [
      "https://picsum.photos/id/55/400/400",
      "https://picsum.photos/id/56/400/400",
      "https://picsum.photos/id/57/400/400",
      "https://picsum.photos/id/58/400/400"
    ],
    7: [
      "https://picsum.photos/id/62/400/400",
      "https://picsum.photos/id/63/400/400",
      "https://picsum.photos/id/64/400/400",
      "https://picsum.photos/id/65/400/400"
    ],
    8: [
      "https://picsum.photos/id/70/400/400",
      "https://picsum.photos/id/71/400/400",
      "https://picsum.photos/id/72/400/400",
      "https://picsum.photos/id/73/400/400"
    ],
    9: [
      "https://picsum.photos/id/77/400/400",
      "https://picsum.photos/id/78/400/400",
      "https://picsum.photos/id/79/400/400",
      "https://picsum.photos/id/80/400/400"
    ],
    10: [
      "https://picsum.photos/id/85/400/400",
      "https://picsum.photos/id/86/400/400",
      "https://picsum.photos/id/87/400/400",
      "https://picsum.photos/id/88/400/400"
    ],
    11: [
      "https://picsum.photos/id/92/400/400",
      "https://picsum.photos/id/93/400/400",
      "https://picsum.photos/id/94/400/400",
      "https://picsum.photos/id/95/400/400"
    ],
    12: [
      "https://picsum.photos/id/99/400/400",
      "https://picsum.photos/id/100/400/400",
      "https://picsum.photos/id/101/400/400",
      "https://picsum.photos/id/102/400/400"
    ],
    13: [
      "https://picsum.photos/id/106/400/400",
      "https://picsum.photos/id/107/400/400",
      "https://picsum.photos/id/108/400/400",
      "https://picsum.photos/id/109/400/400"
    ],
    14: [
      "https://picsum.photos/id/112/400/400",
      "https://picsum.photos/id/113/400/400",
      "https://picsum.photos/id/114/400/400",
      "https://picsum.photos/id/115/400/400"
    ],
    15: [
      "https://picsum.photos/id/120/400/400",
      "https://picsum.photos/id/121/400/400",
      "https://picsum.photos/id/122/400/400",
      "https://picsum.photos/id/123/400/400"
    ],
    16: [
      "https://picsum.photos/id/128/400/400",
      "https://picsum.photos/id/129/400/400",
      "https://picsum.photos/id/130/400/400",
      "https://picsum.photos/id/131/400/400"
    ],
    17: [
      "https://picsum.photos/id/135/400/400",
      "https://picsum.photos/id/136/400/400",
      "https://picsum.photos/id/137/400/400",
      "https://picsum.photos/id/138/400/400"
    ],
    18: [
      "https://picsum.photos/id/142/400/400",
      "https://picsum.photos/id/143/400/400",
      "https://picsum.photos/id/144/400/400",
      "https://picsum.photos/id/145/400/400"
    ],
    19: [
      "https://picsum.photos/id/150/400/400",
      "https://picsum.photos/id/151/400/400",
      "https://picsum.photos/id/152/400/400",
      "https://picsum.photos/id/153/400/400"
    ],
    20: [
      "https://picsum.photos/id/158/400/400",
      "https://picsum.photos/id/159/400/400",
      "https://picsum.photos/id/160/400/400",
      "https://picsum.photos/id/161/400/400"
    ]
  };
  
  return imageSets[productId] || [
    "https://picsum.photos/id/20/400/400",
    "https://picsum.photos/id/21/400/400",
    "https://picsum.photos/id/22/400/400",
    "https://picsum.photos/id/23/400/400"
  ];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Lobe Pump",
    price: 12500,
    originalPrice: 15000,
    description: "High-performance centrifugal pump for industrial water supply. Energy efficient with cast iron body. Max flow: 500 L/min.",
    images: getProductImages(1, "Centrifugal Pump"),
    category: "Centrifugal Pumps",
    sizes: ["5 HP", "7.5 HP", "10 HP", "15 HP"],
    color: "Blue",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Screw Pump",
    price: 18500,
    originalPrice: 22000,
    description: "Heavy-duty submersible pump for sewage and wastewater. Stainless steel construction with thermal protection.",
    images: getProductImages(2, "Submersible Pump"),
    category: "Submersible Pumps",
    sizes: ["2 HP", "3 HP", "5 HP", "7.5 HP"],
    color: "Black",
    rating: 4.8,
    inStock: true
  },
  {
    id: 3,
    name: "Hygenic Centrifugal Pumps",
    price: 9500,
    originalPrice: 12000,
    description: "Booster pump for water pressure boosting in buildings. Silent operation with energy-saving motor.",
    images: getProductImages(3, "Booster Pump"),
    category: "Booster Pumps",
    sizes: ["1 HP", "1.5 HP", "2 HP", "3 HP"],
    color: "Red",
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: "HOMOGINESER",
    price: 7500,
    description: "Precision dosing pump for chemicals and liquids. Adjustable flow rate with digital display.",
    images: getProductImages(4, "Dosing Pump"),
    category: "Dosing Pumps",
    sizes: ["20 LPH", "50 LPH", "100 LPH"],
    color: "White",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "Vertical Multistage Pump",
    price: 22500,
    originalPrice: 28000,
    description: "Vertical multistage centrifugal pump for high-pressure applications. Stainless steel 304 construction.",
    images: getProductImages(5, "Multistage Pump"),
    category: "Centrifugal Pumps",
    sizes: ["10 HP", "15 HP", "20 HP", "25 HP"],
    color: "Silver",
    rating: 4.7,
    inStock: true
  },
  {
    id: 6,
    name: "Dewatering Pump",
    price: 8500,
    originalPrice: 11000,
    description: "Portable dewatering pump for construction sites. Lightweight with high flow rate.",
    images: getProductImages(6, "Dewatering Pump"),
    category: "Submersible Pumps",
    sizes: ["1 HP", "2 HP", "3 HP", "5 HP"],
    color: "Yellow",
    rating: 4.4,
    inStock: true
  },
  {
    id: 7,
    name: "Fire Fighting Pump",
    price: 35000,
    originalPrice: 45000,
    description: "UL/FM certified fire fighting pump set. Complete with controller and accessories.",
    images: getProductImages(7, "Fire Pump"),
    category: "Fire Pumps",
    sizes: ["25 HP", "40 HP", "50 HP", "75 HP"],
    color: "Red",
    rating: 4.9,
    inStock: true
  },
  {
    id: 8,
    name: "Magnetic Drive Pump",
    price: 12500,
    description: "Leak-free magnetic drive pump for chemical transfer. No seals means zero leakage.",
    images: getProductImages(8, "Magnetic Pump"),
    category: "Chemical Pumps",
    sizes: ["0.5 HP", "1 HP", "2 HP", "3 HP"],
    color: "Blue",
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: "Self-Priming Pump",
    price: 10500,
    originalPrice: 13500,
    description: "Self-priming centrifugal pump for applications where pump is above fluid level.",
    images: getProductImages(9, "Self Priming Pump"),
    category: "Centrifugal Pumps",
    sizes: ["3 HP", "5 HP", "7.5 HP", "10 HP"],
    color: "Green",
    rating: 4.4,
    inStock: true
  },
  {
    id: 10,
    name: "Deep Well Pump",
    price: 28000,
    originalPrice: 35000,
    description: "Deep well submersible pump for borewell applications. Suitable for depths up to 200 meters.",
    images: getProductImages(10, "Deep Well Pump"),
    category: "Submersible Pumps",
    sizes: ["5 HP", "7.5 HP", "10 HP", "15 HP"],
    color: "Blue",
    rating: 4.7,
    inStock: true
  },
  {
    id: 11,
    name: "Slurry Pump",
    price: 32000,
    originalPrice: 40000,
    description: "Heavy-duty slurry pump for abrasive and corrosive materials. Hard metal or rubber lined.",
    images: getProductImages(11, "Slurry Pump"),
    category: "Industrial Pumps",
    sizes: ["10 HP", "15 HP", "20 HP", "30 HP"],
    color: "Orange",
    rating: 4.8,
    inStock: true
  },
  {
    id: 12,
    name: "Vacuum Pump",
    price: 18500,
    description: "Oil-sealed rotary vane vacuum pump for industrial applications.",
    images: getProductImages(12, "Vacuum Pump"),
    category: "Vacuum Pumps",
    sizes: ["1 HP", "2 HP", "3 HP", "5 HP"],
    color: "Silver",
    rating: 4.5,
    inStock: true
  },
  {
    id: 13,
    name: "Gear Pump",
    price: 9500,
    originalPrice: 12500,
    description: "External gear pump for oil and fuel transfer. Precision machined gears.",
    images: getProductImages(13, "Gear Pump"),
    category: "Positive Displacement",
    sizes: ["0.5 HP", "1 HP", "2 HP", "3 HP"],
    color: "Black",
    rating: 4.3,
    inStock: true
  },
  {
    id: 14,
    name: "Diaphragm Pump",
    price: 15500,
    description: "Air-operated double diaphragm pump for chemicals and slurries.",
    images: getProductImages(14, "Diaphragm Pump"),
    category: "Positive Displacement",
    sizes: ["1/2 inch", "1 inch", "1.5 inch", "2 inch"],
    color: "Blue",
    rating: 4.6,
    inStock: true
  },
  {
    id: 15,
    name: "Peristaltic Pump",
    price: 22000,
    originalPrice: 28000,
    description: "Hose pump for abrasive and shear-sensitive fluids. Low maintenance.",
    images: getProductImages(15, "Peristaltic Pump"),
    category: "Dosing Pumps",
    sizes: ["10 LPH", "50 LPH", "100 LPH", "200 LPH"],
    color: "White",
    rating: 4.7,
    inStock: true
  },
  {
    id: 16,
    name: "Cryogenic Pump",
    price: 125000,
    originalPrice: 150000,
    description: "Specialized pump for LNG and liquid nitrogen applications.",
    images: getProductImages(16, "Cryogenic Pump"),
    category: "Specialty Pumps",
    sizes: ["2 inch", "3 inch", "4 inch", "6 inch"],
    color: "Silver",
    rating: 4.9,
    inStock: false
  },
  {
    id: 17,
    name: "Hydraulic Pump",
    price: 18500,
    description: "Hydraulic gear pump for industrial machinery. High efficiency.",
    images: getProductImages(17, "Hydraulic Pump"),
    category: "Hydraulic Pumps",
    sizes: ["10 cc", "20 cc", "30 cc", "40 cc"],
    color: "Gray",
    rating: 4.5,
    inStock: true
  },
  {
    id: 18,
    name: "Jet Pump",
    price: 8500,
    originalPrice: 11000,
    description: "Convertible jet pump for shallow and deep wells. Easy installation.",
    images: getProductImages(18, "Jet Pump"),
    category: "Centrifugal Pumps",
    sizes: ["0.5 HP", "1 HP", "1.5 HP", "2 HP"],
    color: "Red",
    rating: 4.2,
    inStock: true
  },
  {
    id: 19,
    name: "Circulating Pump",
    price: 6500,
    description: "Wet rotor circulator for HVAC and heating systems. Energy efficient.",
    images: getProductImages(19, "Circulating Pump"),
    category: "Circulator Pumps",
    sizes: ["25-40", "25-60", "32-40", "32-60"],
    color: "White",
    rating: 4.4,
    inStock: true
  },
  {
    id: 20,
    name: "Well Jet Pump",
    price: 14500,
    originalPrice: 18000,
    description: "Deep well jet pump for residential water supply. Corrosion resistant.",
    images: getProductImages(20, "Well Jet Pump"),
    category: "Centrifugal Pumps",
    sizes: ["1 HP", "1.5 HP", "2 HP", "3 HP"],
    color: "Blue",
    rating: 4.5,
    inStock: true
  }
];