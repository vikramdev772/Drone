export interface Product {
  name: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    name: "AGRONE-X",
    description:
      "The AGRONE-X is a 10 Liters capacity Agriculture spraying drone which is designed and built in India. It is the world's highest flight time spraying drone in the 10 Liter's category. Advanced aerostructures design of AGRONE-X made it rugged and lightweight for agriculture applications.",
    image: "https://ariessol.com/wp-content/uploads/2024/01/Agrone.png",
  },
  {
    name: "JATAYU",
    description:
      "Jatayu is a Multipurpose hexcopter designed for Industrial applications. It can execute missions with the payload ranges 500 grams to 2000 grams in the range of 5km. Build quality, Stability and the cost effectiveness are the prime features JATAYU which made it for the viable solution for the industries.",
    image: "https://ariessol.com/wp-content/uploads/2024/01/jatayu.png",
  },
  {
    name: "ROVER",
    description:
      "A-ROVER is an unmanned ground vehicle designed and built for multiple applications. It comes with the payload capacity of 150 kg and runtime of 5 hours. It is suitable for applications like agriculture spraying, Law enforcement and Warehouse logistics.",
    image: "https://ariessol.com/wp-content/uploads/2024/01/rovar.png",
  },
];
