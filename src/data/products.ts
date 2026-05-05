export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string | null;
  discount: string | null;
  img: string;
  isFeatured: boolean;
  desc: string;
  shopeeLink: string;
  size: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Boxy Tee",
    category: "Tops",
    price: "Rp129.630",
    originalPrice: "Rp149.000",
    discount: "13%",
    img: "/essential-oversized-black.png",
    isFeatured: true,
    desc: "KEY FEATURES\nOversized boxy silhouette with a structured yet relaxed fit.\nPremium cotton fabric, soft and breathable.\nThick material, not see-through.\nClean and minimal design.\n\nMATERIAL & FIT\nPremium Cotton (Australia Cool Breeze Treatment)\n16S Fabric, 250 GSM\nOversized Boxy Fit",
    shopeeLink: "https://id.shp.ee/a5175UUA",
    size: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Oversized Boxy Tee - Special Design",
    category: "Tops",
    price: "Rp129.630",
    originalPrice: "Rp149.000",
    discount: "13%",
    img: "/refined-everyday-tee.png",
    isFeatured: true,
    desc: "KEY FEATURES\nOversized boxy silhouette with a structured yet relaxed fit.\nPremium cotton fabric, soft and breathable.\nThick material, not see-through.\nClean and minimal design.\n\nMATERIAL & FIT\nPremium Cotton (Australia Cool Breeze Treatment)\n16S Fabric, 250 GSM\nOversized Boxy Fit",
    shopeeLink: "https://id.shp.ee/rrLPbXZu",
    size: ["M", "L"],
  },
  {
    id: 3,
    name: "Oversized T-Shirt - The World Is Yours",
    category: "Tops",
    price: "Rp100.000",
    originalPrice: null,
    discount: null,
    img: "/the-world-is-yours.png",
    isFeatured: true,
    desc: "A philosophical message printed with high-density technique on the finest cotton.",
    shopeeLink: "https://id.shp.ee/sddYqQAb",
    size: ["S", "M", "L"],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getCategories(): string[] {
  return ["All", ...new Set(products.map((p) => p.category))];
}
