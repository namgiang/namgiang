const COPY = [
  'I create user-friendly UI components and build accessible, inclusive web apps. I take pride in writing clean, clear code.',
  'I enjoy crafting playful and creative web animations.',
  'Beyond coding, I love movement—whether swinging on the rings, flowing on the floor, or exploring the outdoors.',
]
import clsx from 'clsx'
import { CSSProperties } from 'react'
import styles from './page.module.css'
interface CustomCSSProperties extends CSSProperties {
  '--index'?: number
}

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className={clsx('w-[50%]', styles.container)}>
        <h1>Han Nam Giang</h1>
        {COPY.map((copy, index) => (
          <p
            key={index}
            style={{ '--index': index + 1 } as CustomCSSProperties}
          >
            {copy}
          </p>
        ))}
      </div>
    </div>
  )
}
