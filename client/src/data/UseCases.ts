import disaster from "../assets/disaster.jpg"
import mining from "../assets/mining.jpg"

export interface UseCase {
  title: string
  description: string
  image: string
}

export const UseCases: UseCase[] = [
  {
    title: "Agriculture",
    description: "Precision farming with automated crop spraying and monitoring",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Disaster Management",
    description: "Real-time surveillance and emergency response coordination",
    image: disaster,
  },
  {
    title: "Mining",
    description: "Efficient surveying and mapping of mining operations",
    image: mining,
  },
  {
    title: "Solar Energy",
    description: "Thermal inspection and maintenance of solar installations",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Wind Energy",
    description: "Blade inspection and maintenance optimization",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
  },
]

