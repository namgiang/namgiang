import { motion } from 'motion/react'

const PushUpStickFigure = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Head */}
      <motion.circle cx="100" cy="40" r="10" fill="black" />

      {/* Body */}
      <motion.line
        x1="100"
        y1="50"
        x2="100"
        y2="100"
        stroke="black"
        strokeWidth="4"
      />

      {/* Left Arm */}
      <motion.line
        x1="100"
        y1="60"
        x2="80"
        y2="90"
        stroke="black"
        strokeWidth="4"
        animate={{ y2: [90, 110, 90] }} // Arm moving up/down
        transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
      />

      {/* Right Arm */}
      <motion.line
        x1="100"
        y1="60"
        x2="120"
        y2="90"
        stroke="black"
        strokeWidth="4"
        animate={{ y2: [90, 110, 90] }}
        transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
      />

      {/* Left Leg */}
      <motion.line
        x1="100"
        y1="100"
        x2="80"
        y2="130"
        stroke="black"
        strokeWidth="4"
      />

      {/* Right Leg */}
      <motion.line
        x1="100"
        y1="100"
        x2="120"
        y2="130"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  )
}

export default PushUpStickFigure
