import React from 'react'
import { motion } from "framer-motion"
import { 
    FaHome, 
    FaLaptopCode, 
    FaProjectDiagram, 
    FaPaperPlane 
} from 'react-icons/fa'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    open: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        x: -50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

// Icons mapping to menu items
const iconMap = {
    "Home": <FaHome size={18} />,
    "Services": <FaLaptopCode size={18} />,
    "Portfolio": <FaProjectDiagram size={18} />,
    "Contact": <FaPaperPlane size={18} />
};

const items = ["Home", "Services", "Portfolio", "Contact"];

const Links = ({ setOpen }) => {
    const handleLinkClick = () => {
        // Close the sidebar when link is clicked
        setOpen(false);
    };

    return (
        <motion.div className='links' variants={variants}>
            {items.map((item, i) => (
                <motion.a
                    href={`#${item}`}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, x: 3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleLinkClick}
                    custom={i}
                >
                    <span className="icon">{iconMap[item]}</span>
                    <span className="text">{item}</span>
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links