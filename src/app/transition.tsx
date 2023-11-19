'use client'
import { motion } from 'framer-motion'

const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        style={{ position: 'relative' }}
    >
        {children}
    </motion.div>
)

export default PageLayout
