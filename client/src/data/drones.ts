export interface Drone {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  gallery: string[];
  uses: string[];
}

export const drones: Drone[] = [
  {
    id: "phantom-pro",
    name: "Phantom Pro",
    price: 1299,
    description: "Professional-grade drone for aerial photography",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    features: [
      "4K Camera with 3-axis gimbal",
      "30 minutes flight time",
      "7km transmission range",
      "Obstacle avoidance",
      "Intelligent flight modes",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    ],
    uses: ["Aerial Photography", "Cinematography", "Real Estate", "Events Coverage"],
  },
  {
    id: "explorer-x",
    name: "Explorer X",
    price: 899,
    description: "Perfect for adventure and outdoor exploration",
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    features: [
      "2.7K Camera",
      "25 minutes flight time",
      "5km transmission range",
      "Foldable design",
      "GPS positioning",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    ],
    uses: ["Adventure Sports", "Travel Photography", "Hiking", "Outdoor Events"],
  },
  {
    id: "agri-scout",
    name: "Agri Scout",
    price: 1499,
    description: "Specialized drone for agricultural monitoring",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    features: [
      "Multispectral imaging",
      "40 minutes flight time",
      "10km transmission range",
      "Weather resistant",
      "Automated mapping",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    ],
    uses: ["Crop Monitoring", "Soil Analysis", "Irrigation Planning", "Yield Mapping"],
  },
];

