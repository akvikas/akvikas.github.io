import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const reduced = useReducedMotion()
  return (
    <motion.section
      id={id}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <h2><span className="idx">{String(['projects', 'skills', 'achievements', 'about', 'journey', 'contact'].indexOf(id) + 1).padStart(2, '0')}</span>{title}</h2>
      {children}
    </motion.section>
  )
}
