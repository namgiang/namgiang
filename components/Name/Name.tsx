'use client'

import clsx from 'clsx'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { useState } from 'react'

import styles from './Name.module.css'

const Name = () => {
  const [direction, setDirection] = useState<number>(1)
  const itemVariants = {
    initial: { opacity: 0, scale: 1.2, filter: 'blur(4px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(4px)' },
  }

  const handleClick = () => {
    setDirection((prev) => (prev === 1 ? 0 : 1))
  }

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0.4, duration: 2 }}>
      <AnimatePresence mode="popLayout">
        <motion.button
          layout
          className={clsx(
            styles.container,
            'w-full md:w-[70%] mt-10 flex flex-col max-w-[500px] uppercase text-center'
          )}
          onClick={handleClick}
          whileHover={{ transform: 'rotateY(10deg) rotateX(-5deg)' }}
        >
          {direction === 1 ? (
            <>
              <motion.div key="first1" className={styles.first}>
                <motion.span
                  layoutId="first"
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Han Nam
                </motion.span>
              </motion.div>
              <motion.div key="last1" layoutId="last" className={styles.last}>
                <motion.span
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Giang
                </motion.span>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                key="first2"
                layoutId="first"
                className={styles.first}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 1.2, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                >
                  Giang
                </motion.span>
              </motion.div>
              <motion.div key="last2" layoutId="last" className={styles.last}>
                <motion.span
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Han Nam
                </motion.span>
              </motion.div>
            </>
          )}
        </motion.button>
      </AnimatePresence>
    </MotionConfig>
  )
}

export default Name
