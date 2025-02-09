import type React from "react"
import { UseCases as UseCasesData } from "../data/UseCases"

interface UseCase {
  title: string
  description: string
  image: string
}

const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Industry Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UseCasesData.map((useCase: UseCase) => (
            <div
              key={useCase.title}
              className="backdrop-blur-md bg-white/10 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={useCase.image || "/placeholder.svg"} alt={useCase.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases

