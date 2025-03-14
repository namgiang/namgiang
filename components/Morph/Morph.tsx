'use client'

import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

export function Morph({
  children,
  className,
}: {
  children: string | string[]
  className?: string
}) {
  function generateKeys(text: string) {
    const charCount: { [key: string]: number } = {}
    return text.split('').map((char) => {
      if (!charCount[char]) {
        charCount[char] = 0
      }
      const key = `${char}-${charCount[char]}`
      charCount[char]++
      return { char, key }
    })
  }

  const textToDisplay = generateKeys(children as string)

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {textToDisplay.map(({ char, key }) => (
        <motion.span
          key={key}
          layoutId={key}
          className={clsx('inline-block text-inherit', className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            bounce: 0,
            opacity: {
              duration: 0.35,
              type: 'spring',
              bounce: 0,
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </AnimatePresence>
  )
}
