import type React from "react"
import { motion } from "framer-motion"

interface AnimatedDroneProps {
  droneImage: string
}

export const AnimatedDrone: React.FC<AnimatedDroneProps> = ({ droneImage }) => {
  return (
    <motion.div
      className="relative w-64 h-64 mx-auto my-12"
      animate={{
        y: [0, -20, 0],
        rotateZ: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={droneImage}
        alt="Drone"
        className="w-full h-full object-contain"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

