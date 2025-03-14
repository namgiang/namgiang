'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'

import styles from './Name.module.css'
import { Morph } from '../Morph/Morph'

const Name = () => {
  const [direction, setDirection] = useState<number>(1)

  const handleClick = () => {
    setDirection((prev) => (prev === 1 ? 0 : 1))
  }

  return (
    <motion.button
      className={clsx(
        styles.container,
        'w-full md:w-[70%] mt-10 flex flex-col max-w-[500px] uppercase text-center'
      )}
      onClick={handleClick}
      whileHover={{ transform: 'rotateY(10deg) rotateX(-5deg)' }}
    >
      <div>
        <Morph className={styles.first}>
          {direction === 1 ? 'Han Nam' : 'Giang'}
        </Morph>
      </div>
      <div>
        <Morph className={styles.last}>
          {direction === 1 ? 'Giang' : 'Han Nam'}
        </Morph>
      </div>
    </motion.button>
  )
}

export default Name
