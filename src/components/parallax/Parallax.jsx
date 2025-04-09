import React, {useRef} from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Use smaller transformation values to prevent excessive movement
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

    return (
        <div 
            className='parallax' 
            ref={ref}
            style={{ 
                background: type === "services" 
                    ? "linear-gradient(180deg, #111132, #0c0c1d)" 
                    : "linear-gradient(180deg, #111132, #505064)" 
            }}
        >
            <motion.h1 style={{y: yText}}>
                {type === "services" ? "What We Do?" : "What We Did?"}
            </motion.h1>
            <motion.div style={{y: yBg}} className="mountains"></motion.div>
            <motion.div 
                style={{y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"])}} 
                className="planets"
            ></motion.div>
            <motion.div 
                style={{x: xStars}} 
                className="stars"
            ></motion.div>
        </div>
    )
}

export default Parallax